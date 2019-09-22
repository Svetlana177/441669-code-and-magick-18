'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var SHADOW_GAP = 10;
var COLUMN_X = 150;
var COLUMN_Y = 100;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP / 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP);

  for (var i = 0; i < names.length; i++) {
    var color = 0;
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'hsl(240,' + Math.floor(Math.random() * 101) + '%,50%)';
    }
    var maxTime = getMaxElement(times);
    var x = COLUMN_X + i * (COLUMN_WIDTH + GAP);
    var width = COLUMN_WIDTH;
    var height = COLUMN_HEIGHT * Math.round(times[i]) / maxTime;
    var y = (COLUMN_Y + COLUMN_HEIGHT) - height;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), x, y - 10);
    ctx.fillText(names[i], x, COLUMN_Y + COLUMN_HEIGHT + 20);
  }
};
