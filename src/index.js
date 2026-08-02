// 🍑 打屁屁发泄室 - API Worker
// 处理排行榜数据存储

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    // API 路由
    if (url.pathname.startsWith('/api/')) {
      return handleApi(request, env, url);
    }

    // 非 API 请求，交给静态资源处理
    return env.ASSETS.fetch(request);
  },
};

async function handleApi(request, env, url) {
  try {
    // GET /api/leaderboard - 获取排行榜
    if (url.pathname === '/api/leaderboard' && request.method === 'GET') {
      const data = await env.LEADERBOARD.get('rankings', 'json');
      return jsonResponse(data || []);
    }

    // POST /api/score - 提交成绩
    if (url.pathname === '/api/score' && request.method === 'POST') {
      const body = await request.json();
      const nickname = (body.nickname || '').trim().slice(0, 20);
      const totalHits = parseInt(body.totalHits) || 0;

      if (!nickname) {
        return jsonResponse({ error: '昵称不能为空' }, 400);
      }

      if (totalHits <= 0) {
        return jsonResponse({ error: '成绩无效' }, 400);
      }

      // 读取当前排行榜
      let rankings = await env.LEADERBOARD.get('rankings', 'json') || [];

      // 查找是否已有该昵称
      const existingIndex = rankings.findIndex(
        (r) => r.nickname === nickname
      );
      const entry = {
        nickname,
        totalHits,
        updatedAt: new Date().toISOString(),
      };

      if (existingIndex >= 0) {
        // 只更新更高分
        if (totalHits > rankings[existingIndex].totalHits) {
          rankings[existingIndex] = entry;
        } else {
          const rank = rankings.findIndex((r) => r.nickname === nickname) + 1;
          return jsonResponse({
            success: true,
            rank,
            message: '已有更高分记录，未更新',
          });
        }
      } else {
        rankings.push(entry);
      }

      // 按总分降序排列
      rankings.sort((a, b) => b.totalHits - a.totalHits);

      // 只保留前 100 名
      rankings = rankings.slice(0, 100);

      await env.LEADERBOARD.put('rankings', JSON.stringify(rankings));

      const rank = rankings.findIndex((r) => r.nickname === nickname) + 1;

      return jsonResponse({ success: true, rank, rankings });
    }

    return jsonResponse({ error: '接口不存在' }, 404);
  } catch (err) {
    return jsonResponse({ error: '服务器内部错误' }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json',
    },
  });
}