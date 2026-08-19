(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Skills Radar ---
  var radarEl = document.getElementById('chart-radar');
  if (radarEl) {
    var chart = echarts.init(radarEl, null, { renderer: 'svg' });
    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'item',
        appendToBody: true,
        backgroundColor: bg2,
        borderColor: rule,
        borderWidth: 1,
        textStyle: { color: ink, fontSize: 13 }
      },
      radar: {
        indicator: [
          { name: '0→1产品定义', max: 100 },
          { name: '用户体验设计', max: 100 },
          { name: '数据分析', max: 100 },
          { name: 'AI技术理解', max: 100 },
          { name: '需求洞察', max: 100 },
          { name: '跨团队协作', max: 100 }
        ],
        center: ['50%', '52%'],
        radius: '68%',
        axisName: {
          color: ink,
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "'WorkSans', sans-serif"
        },
        splitLine: {
          lineStyle: { color: rule, width: 1 }
        },
        splitArea: {
          areaStyle: {
            color: [
              'rgba(194,119,78,0.02)',
              'rgba(194,119,78,0.04)',
              'rgba(194,119,78,0.06)',
              'rgba(194,119,78,0.08)',
              'rgba(194,119,78,0.1)'
            ]
          }
        },
        axisLine: {
          lineStyle: { color: rule }
        }
      },
      series: [{
        type: 'radar',
        data: [{
          value: [90, 92, 82, 85, 88, 86],
          name: '核心能力',
          areaStyle: {
            color: {
              type: 'radial',
              x: 0.5, y: 0.5, r: 0.5,
              colorStops: [
                { offset: 0, color: 'rgba(194,119,78,0.28)' },
                { offset: 1, color: 'rgba(166,133,98,0.15)' }
              ]
            }
          },
          lineStyle: {
            color: accent,
            width: 2
          },
          itemStyle: {
            color: accent2,
            borderColor: bg2,
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 7
        }]
      }]
    });
    window.addEventListener('resize', function() { chart.resize(); });
  }
})();
