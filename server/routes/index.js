var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js')

// 跨域
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/goods/id', function(req, res, next) {
  let id = req.query.id;
  connection.query("select * from goods_search where id="+ id +"", function (error, results, fields) {
  	if(error) throw error;
  	res.send({
  		code:"0",
  		data:results
  	})
  });
});

router.get('/api/goods/list', function(req, res, next) {
  res.json({
	  code:0,
	  data:[
		  {
			id:1,
			name:"家具家纺",
			data:[
				{
					name:"家纺",
					list:[
						{
							id:1,
							name:"毛巾/浴巾",
							imgUrl:"../../static/img/list1.jpg"
						},
						{
							id:2,
							name:"枕头",
							imgUrl:"../../static/img/list1.jpg"
						}
					]
				},
				{
					name:"生活用品",
					list:[
						{
							id:1,
							name:"浴室用品",
							imgUrl:"../../static/img/list1.jpg"
						},
						{
							id:2,
							name:"洗晒",
							imgUrl:"../../static/img/list1.jpg"
						}
					]
				}
			]
		  },
		  {
			id:2,
			name:"女装",
			data:[
				{
					name:"裙装",
					list:[
						{
							id:1,
							name:"半身裙",
							imgUrl:"../../static/img/list1.jpg"
						},
						{
							id:2,
							name:"连衣群",
							imgUrl:"../../static/img/list1.jpg"
						}
					]
				},
				{
					name:"上衣",
					list:[
						{
							id:1,
							name:"T恤",
							imgUrl:"../../static/img/list1.jpg"
						},
						{
							id:2,
							name:"衬衫",
							imgUrl:"../../static/img/list1.jpg"
						}
					]
				}
			]
		  }
	  ]
  })
});

router.get("/api/goods/search", function(req, res, next) {
		// desc 降序  asc升序
		// 获取对象的key
		let [goodsName,orderName] = Object.keys(req.query);
		// name参数的值
		let name = req.query.name;
		// orderName的key的值
		let order = req.query[orderName];
		
		connection.query("select * from goods_search where name like '%"+name+"%' order by "+orderName+" "+order+"", function (error, results, fields) {
			if(error) throw error;
			res.send({
				code:"0",
				data:results
			})
		});
})


// 运动户外第二次加载数据
router.get('/api/index_list/2/data/3', function(req, res, next) {
	res.json({
		code: "0",
		data: [
			{
			  type: "commodityList",
			  data: [
				  {
					id:1,
					imgUrl: '../../static/img/commodity1.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:2,
					imgUrl: '../../static/img/commodity2.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:3,
					imgUrl: '../../static/img/commodity3.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:4,
					imgUrl: '../../static/img/commodity4.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  }
			  ]
			}
		]
	})
});

// 运动户外第一次加载数据
router.get('/api/index_list/2/data/2', function(req, res, next) {
	res.json({
		code: "0",
		data: [
			{
			  type: "commodityList",
			  data: [
				  {
					id:1,
					imgUrl: '../../static/img/commodity1.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:2,
					imgUrl: '../../static/img/commodity2.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:3,
					imgUrl: '../../static/img/commodity3.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:4,
					imgUrl: '../../static/img/commodity4.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  }
			  ]
			}
		]
	})
});

// 运动户外默认数据
router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.json({
	  code: "0",
	  data: [
		  {
			  type:"bannerList",
			  imgUrl: "../../static/img/banner1.jpg"
		  },
		  {
			  type: 'iconsList',
			  data: [
				  {imgUrl: "../../static/img/icons1.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons2.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons3.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons4.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons5.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons6.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons7.png",name: "运动户外"},
				  {imgUrl: "../../static/img/icons8.png",name: "运动户外"}
			  ]
		  },
		  {
			  type:"hotList",
			  data: [
				  {
				  	id:1,
				  	imgUrl: '../../static/img/commodity1.jpg',
				  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
				  	pprice: '248',
				  	oprice: '998',
				  	discount: '4.5'
				  },
				  {
				  	id:2,
				  	imgUrl: '../../static/img/commodity2.jpg',
				  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
				  	pprice: '248',
				  	oprice: '998',
				  	discount: '4.5'
				  },
				  {
				  	id:3,
				  	imgUrl: '../../static/img/commodity3.jpg',
				  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
				  	pprice: '248',
				  	oprice: '998',
				  	discount: '4.5'
				  }
			  ]
		  },
		  {
			  type: "shopList",
			  data:[
				  {
					  bigUrl:"../../static/img/shop.jpg",
					  data: [
						  {
						  	id:1,
						  	imgUrl: '../../static/img/shop1.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:2,
						  	imgUrl: '../../static/img/shop2.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:3,
						  	imgUrl: '../../static/img/shop3.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:4,
						  	imgUrl: '../../static/img/shop4.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:5,
						  	imgUrl: '../../static/img/shop1.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:6,
						  	imgUrl: '../../static/img/shop2.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:7,
						  	imgUrl: '../../static/img/shop3.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:8,
						  	imgUrl: '../../static/img/shop4.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  }
					  ]
				  }
			  ]
		  },
		  {
			  type: "commodityList",
			  data: [
				  {
					id:1,
					imgUrl: '../../static/img/commodity1.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:2,
					imgUrl: '../../static/img/commodity2.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:3,
					imgUrl: '../../static/img/commodity3.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:4,
					imgUrl: '../../static/img/commodity4.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  }
			  ]
		  }
	  ]
  })
});

// 服饰内衣默认数据
router.get('/api/index_list/3/data/1', function(req, res, next) {
  res.json({
	  code: "0",
	  data: [
		  {
			  type:"bannerList",
			  imgUrl: "../../static/img/banner1.jpg"
		  },
		  {
			  type: 'iconsList',
			  data: [
				  {imgUrl: "../../static/img/icons1.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons2.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons3.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons4.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons5.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons6.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons7.png",name: "服饰内衣"},
				  {imgUrl: "../../static/img/icons8.png",name: "服饰内衣"}
			  ]
		  },
		  {
			  type:"hotList",
			  data: [
				  {
				  	id:1,
				  	imgUrl: '../../static/img/commodity1.jpg',
				  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
				  	pprice: '248',
				  	oprice: '998',
				  	discount: '4.5'
				  },
				  {
				  	id:2,
				  	imgUrl: '../../static/img/commodity2.jpg',
				  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
				  	pprice: '248',
				  	oprice: '998',
				  	discount: '4.5'
				  },
				  {
				  	id:3,
				  	imgUrl: '../../static/img/commodity3.jpg',
				  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
				  	pprice: '248',
				  	oprice: '998',
				  	discount: '4.5'
				  }
			  ]
		  },
		  {
			  type: "shopList",
			  data:[
				  {
					  bigUrl:"../../static/img/shop.jpg",
					  data: [
						  {
						  	id:1,
						  	imgUrl: '../../static/img/shop1.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:2,
						  	imgUrl: '../../static/img/shop2.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:3,
						  	imgUrl: '../../static/img/shop3.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:4,
						  	imgUrl: '../../static/img/shop4.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:5,
						  	imgUrl: '../../static/img/shop1.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:6,
						  	imgUrl: '../../static/img/shop2.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:7,
						  	imgUrl: '../../static/img/shop3.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  },
						  {
						  	id:8,
						  	imgUrl: '../../static/img/shop4.jpg',
						  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						  	pprice: '248',
						  	oprice: '998',
						  	discount: '4.5'
						  }
					  ]
				  }
			  ]
		  },
		  {
			  type: "commodityList",
			  data: [
				  {
					id:1,
					imgUrl: '../../static/img/commodity1.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:2,
					imgUrl: '../../static/img/commodity2.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:3,
					imgUrl: '../../static/img/commodity3.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  },
				  {
					id:4,
					imgUrl: '../../static/img/commodity4.jpg',
					name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					pprice: '248',
					oprice: '998',
					discount: '4.5'
				  }
			  ]
		  }
	  ]
  })
});

// 首页推荐数据
router.get('/api/index_list/data', function(req, res, next) {
  res.send({
	  "code": 0,
	  "data": {
		  topBar: [
			  {id:1,name:'推荐'},
			  {id:2,name:'运动户外'},
			  {id:3,name:'服饰内衣'},
			  {id:4,name:'鞋靴箱包'},
			  {id:5,name:'美妆个护'},
			  {id:6,name:'家具数码'},
			  {id:7,name:'食品母婴'}
		  ],
		  data: [
			  {
				  type:"swiperList",
				  data:[
					  {imgUrl: '../../static/img/swiper1.jpg'},
					  {imgUrl: '../../static/img/swiper2.jpg'},
					  {imgUrl: '../../static/img/swiper3.jpg'}
				  ]
			  },
			  {
				  type: "recommendList",
				  data:[
					  {
						  bigUrl: "../../static/img/Children.jpg",
						  data: [
							  {imgUrl: "../../static/img/Children1.jpg"},
							  {imgUrl: "../../static/img/Children2.jpg"},
							  {imgUrl: "../../static/img/Children3.jpg"}
						  ]
					  },
					  {
						  bigUrl: "../../static/img/Furnishing.jpg",
						  data: [
							  {imgUrl: "../../static/img/Furnishing1.jpg"},
							  {imgUrl: "../../static/img/Furnishing2.jpg"},
							  {imgUrl: "../../static/img/Furnishing3.jpg"}
						  ]
					  }
				  ]
			  },
			  {
				  type: "commodityList",
				  data: [
					  {
					  	id:1,
					  	imgUrl: '../../static/img/commodity1.jpg',
					  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					  	pprice: '248',
					  	oprice: '998',
					  	discount: '4.5'
					  },
					  {
					  	id:2,
					  	imgUrl: '../../static/img/commodity2.jpg',
					  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					  	pprice: '248',
					  	oprice: '998',
					  	discount: '4.5'
					  },
					  {
					  	id:3,
					  	imgUrl: '../../static/img/commodity3.jpg',
					  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					  	pprice: '248',
					  	oprice: '998',
					  	discount: '4.5'
					  },
					  {
					  	id:4,
					  	imgUrl: '../../static/img/commodity4.jpg',
					  	name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
					  	pprice: '248',
					  	oprice: '998',
					  	discount: '4.5'
					  }
				  ]
			  }
		  ]
	  }
  })
});

module.exports = router;
