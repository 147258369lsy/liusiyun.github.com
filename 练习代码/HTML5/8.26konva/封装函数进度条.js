// Progress
// 属性:
// 1.位置    2.大小  3.边框颜色/宽度
// 4.内部填充颜色   5.value 当前进度值

// 方法:  1.init 初始化各种值,以及形状
//        2.改变当前值 

function Progress(argument){
	this._init(argument);
}

Progress.prototype = {
	_init : function(){
		this.x = argument.x || 0;
		this.y = argument.y || 0;
		//0,未定义,正常值
		this.width = argument.width === 0 ? 0 : argument.width || 500;
		this.height = argument.height === 0 ? 0 : argument.height || 500;
		this.strokeColor = argument.strokeColor || '#ccc';
		this.strokeWidth = argument.strokeWidth === 0 ? 0 : argument.strokeWidth || 10;
		this.fillColor = argument.fillColor || 'skyblue';
		this.value = argument.value === 0 ? 0 : argument.value || 0.5;
	}	

	
 		addProgressToLayer : function(layer){
 			layer.add(this._group);
 		},
 		changedValue : function(newValue){
 			if(newValue >= 0 && newValue <= 1){
 				this.value = newValue;

 				var inner = this._group.findOne('#inner');
 				inner.to({
 					width : this.width * this.value,
 					duration : 5
 				});
 			}
 		}
}

//创建矩形(外部)
	var outsideRect = new Konva.Rect({
		x : this.x,
		y : this.y,
		width : this.width,
		height : this.height,
		strokeWidth : this.strokeWidth,
		cornerRadius : this.height / 2,
		id : 'inner'
	});

 //创建外部矩形 
 		var innerRect = new Konva.Rect({
 			x : this.x,
 			y : this.y,
 			width : this.width * this.value,
 			height : this.height,
 			fill : this.fillColor,
 			cornerRadius : this.height / 2,
 			id : 'inner'
 		});

 		this._group = new Konva.Group({
 			x : 0,
 			y : 0
 		});
        this._group.add(innerRect);
        this._group.add(outsideRect);

