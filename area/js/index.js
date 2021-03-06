DD.createModule({
	el:'.position',
	data:{
		hhh:111,
		location_country:'重庆',
		popular_country:[
			{name:'北京'},
			{name:'重庆'},
			{name:'四川'},
			{name:'江西'},
			{name:'青海'},
			{name:'重庆'},
			{name:'江苏'},
			{name:'天津'},
			{name:'深圳'},
			{name:'浙江'},
			{name:'重庆'},
			{name:'江苏'},
			{name:'天津'},
			{name:'深圳'},
			{name:'浙江'}
		]
	}
})

/*
安徽省 Anhuisheng 
澳门特别行政区 Aomen Tebie Xingzhengqu 
北京市 Beijingshi
重庆市 Chongqingshi 
福建省 Fujiansheng 
甘肃省 Gansusheng 
广东省 Guangdongsheng
广西壮族自治区 Guangxi Zhuangzu zizhiqu
贵州省 Guizhousheng
海南省 Hainansheng
河北省 Hebeisheng
黑龙江省 Heilongjiangsheng 
河南省 Henansheng 
湖北省 Hubeisheng 
湖南省 Hunansheng 
江苏省 Jiangsusheng 
江西省 Jiangxisheng 
吉林省 Jilinsheng 
辽宁省 Liaoningsheng 
内蒙古 Neimenggu zizhiqu 
宁夏回族自治区 Ningxia Huizu zizhiqu 
青海省 Qinghaisheng 
陕西省 Shaanxisheng 
山东省 Shandongsheng 
上海市 Shanghaishi 
山西省 Shanxisheng 
四川省 Sichuansheng 
台湾省 Taiwansheng 
天津市 Tianjinshi 
香港特别行政区 Xianggang Tebie Xingzhengqu 
新疆维吾尔族自治区 Xinjiang Weiwu’erzu zizhiqu
西藏自治区 Xizang zizhiqu 
云南省 Yunnansheng
浙江省 Zhejiangsheng 


A: 鞍山（辽宁） 安阳 （河南） 安顺（贵州）安庆（安徽） 
B: 北京 蚌埠（安徽） 包头（内蒙古 ）保定（河北） 宝鸡（陕西） 博鳌（海南） 承德（河北） 本溪（辽宁） 阜新（辽宁） 白山（吉林） 白城（吉林） 亳州（安徽） 滨州（山东） 北海（广西） 百色（广西） 巴中（四川） 宝山（云南） 白银（甘肃） 白云鄂博(内蒙古) 巴彦淖尔（内蒙古） 北戴河（河北）
C: 重庆 成都（四川） 长沙（湖南） 长春（吉林） 承德（河北） 常州（江苏） 池州（安徽） 沧州（河北） 赤峰（内蒙古） 滁州（安徽） 巢湖（安徽） 常德（湖南） 郴州（湖南） 潮州 （广东） 崇左（广西） 德阳（四川）
D: 大连（辽宁） 大庆(黑龙江) 大同 （山西）丹东（辽宁） 大冶（湖北） 东营（山东） 登封（山东） 大理（云南） 德州（山东） 东莞（广东） 达州（四川） 定西（甘肃）大石桥（辽宁、镁矿）
E: 鄂尔多斯（内蒙古） 鄂州（湖北）
F: 佛山（广东） 福州 （福建）抚顺（辽宁）阜阳（安徽）抚州（江西）防城港（广西）
G: 广州 （广东） 贵阳(贵州) 桂林（广西） 赣州（江西） 贵港（广西） 广元（四川） 广安（四川） 杭州（浙江） 固原（宁夏）哈尔滨 (黑龙江)
H: 呼和浩特（内蒙古） 合肥（安徽） 海口（海南） 邯郸 （河北） 湖州（浙江） 黄山(安徽) 黄石（湖北） 黄冈（湖北） 衡阳（湖南）汉中（陕西） 菏泽（山东） 衡水（河北） 呼伦贝尔（内蒙古） 葫芦岛（辽宁） 淮南（安徽） 淮北（安徽） 鹤壁（河南）淮安（江苏） 怀化（湖南） 惠州（广东） 河源（广东） 贺州（广西）河池（广西） 鹤岗(黑龙江) 黑河(黑龙江)
I:
J: 济南（山东） 吉林（吉林） 九江（江西） 景德镇（江西） 金昌（甘肃） 揭阳（广东） 吉安（江西） 锦州（辽宁） 鸡西(黑龙江) 佳木斯(黑龙江) 金华（浙江） 济宁（山东） 焦作（河南） 荆州（湖北） 荆门（湖北） 娄底（湖南） 江门（广东） 酒泉（甘肃） 嘉峪关（甘肃） K: 昆明（云南） 开封 （河南） 克拉玛依 （新疆） 嘉兴（浙江） L: 兰州（甘肃） 拉萨（西藏） 洛阳（河南） 柳州（广西） 乐山 （四川） 临沧（云南 ）陇南（甘肃） 丽江（云南） 乐山（四川） 连云港（江苏） 廊坊（河北） 辽阳（辽宁） 辽源（吉林） 泸州（四川） 漯河（河南） 来宾（广西）
M: 绵阳（四川） 牡丹江(黑龙江) 丽水（浙江） 马鞍山（安徽） 六安（安徽） 龙岩（福建） 莱芜（山东） 临沂（山东） 聊城（山东） 茂名（广东） 梅州（广东） 眉山（四川）
N: 南京（江苏） 宁波 （浙江） 南通（江苏） 南昌 （江西） 南平（福建） 南阳（河南） 宁德（福建） 南宁（广西） 内江（四川） 南充（四川）
O:
P: 莆田（福建） 萍乡（江西） 盘锦（辽宁） 攀枝花 （四川）平顶山（河南） 平遥（山西） 平凉（甘肃） 濮阳（河南） 许昌（河南） 普洱（云南）
Q: 青岛（山东） 泉州（福建） 齐齐哈尔(黑龙江) 秦皇岛（河北） 曲阜（山东） 七台河(黑龙江) 秦州（江苏） 衢州（浙江） 曲靖（云南） 庆阳（甘肃）
R: 日照（山东） 清远（广东） 钦州（广西）
S: 上海（沪） 深圳 （广东） 天津 苏州（江苏） 沈阳（辽宁）石家庄(河北) 汕头 （广东） 三亚 （海南） 绍兴（浙江） 十堰（湖北） 上饶 （江西） 四平（吉林） 松原（吉林） 来宾（广西） 宿迁（江苏） 宿州（安徽） 三明（福建） 三门峡（河南）商丘（河南）随州（湖北） 邵阳（湖南） 韶关（广东） 汕尾（广东） 遂宁（四川） 石嘴山（甘肃） 双鸭山(黑龙江) 绥化(黑龙江)
T: 天津 唐山（河北） 太原（山西） 泰安（山东） 泰州（江苏） 铁岭（辽宁） 通辽（内蒙古） 通化（吉林） 台州（浙江） 铜陵（安徽） 天水（甘肃）
U ：
V:
W: 武汉 （湖北 无锡（江苏） 乌鲁木齐（新疆） 潍坊（山东）
芜湖（安徽） 武夷山（福建） 渭南（陕西） 乌海（内蒙古） 乌兰察布（内蒙古） 温州（浙江） 威海（山东） 梧州（广西） 武威（甘肃） 吴忠（甘肃）
X: 西安（陕西） 厦门（福建） 西宁（青海） 襄樊（湖北）咸阳（陕西） 湘潭（湖南） 忻州（山西） 徐州 （江苏） 信阳 （河南） 邢台（河北） 宣城（安徽） 新余（江西）新乡（河南）孝感（湖北）咸宁（湖北）
Y: 烟台 （山东） 银川 （宁夏） 扬州（江苏） 宜昌 （湖北）延吉（吉林） 伊春(黑龙江) 盐城（江苏） 鹰潭（江西） 宜春（江西）益阳（湖南） 永州（湖南） 阳江（广东） 云浮（广东） 玉林（广西）宜宾（四川） 雅安（四川） 玉溪（云南） 岳阳（湖南） 延安 (陕西） 营口（辽宁）
Z: 郑州 （河南） 珠海（广东） 漳州（福建） 株洲（湖南 ） 肇庆（广东） 自贡（四川） 舟山（浙江） 张家界（湖南） 遵义（贵州） 湛江（广东） 张家口（河北） 张家界（湖南） 朝阳（辽宁） 镇江（江苏） 淄博（山东） 枣庄（山东） 中山（广东）资阳（四川） 周口（河南） 驻马店（河南） 昭通（云南） 张掖（甘肃） 中卫（甘肃）
*/