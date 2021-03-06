'use strict';

/*
 * イベント一覧 モデル
 *
 */

// API URL
var api_url = "api/event";


var m = require('../../mithril');


// コンストラクタ
var Model = function (data, isInitial) {
	this.p = m.prop(data.p);

	// 前へ
	this.prev_id = data.prev_id;
	// 次へ
	this.next_id = data.next_id;

	// イベント一覧
	this.events = data.events;
};

// サーバからJSONを読み込む
Model.read = function (p) {
	var url = api_url;

	if(p) {
		url += "?p=" + p;
	}

	return m.request({method: "GET", url: url, type: Model});
};

// サーバにJSONを保存
Model.prototype.save = function () {
	return m.request({method: "POST", url: api_url, data: {

	}});
};

module.exports = Model;

