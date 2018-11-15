
export default {
	getColNum: function () {
		return Math.abs(12 / this.colsPerRow);
	},
	
	getUniqueKey: function (keyID, length) {
		length = (length === undefined) ? 8 : length;
		let characters = '0123456789ABCDEF';
		let randomString = '';
		
		for (let i = 0; i < length; i++) {
			randomString += characters[Math.floor((Math.random() * characters.length))];
		}
		return randomString + '-' + parseInt(Math.random()*100);    //keyID;
	},
	
	getColumnClass : function(){
		return 'col-xs-12 ' + 'col-md-' + this.colNum + ' col-lg-'+ this.colNum;
	},
}