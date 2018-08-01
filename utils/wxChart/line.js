module.exports = function line () {
	return {
		init: function (ctx, options) {
			this._draw(ctx, options)
		},
		_draw: function (ctx, options) {
			let data = options.series[0].data
			let grid = options.grid[0]
			let left = grid.left
			let right = grid.right
			let top = grid.top
			let bottom = grid.bottom
			let range = grid.range
			let gridHeight = grid.height - top - bottom
			let gridWidth = grid.width - left - right
			let widthUnit = gridWidth / data.length
			let unit = gridHeight / (range.maxRange - range.minRange)

			// 坐标系问题
			ctx.beginPath()
			data.forEach(function (item, index) {
				let l = (item - range.minRange) * unit
				if (index === 0) {
					ctx.moveTo(grid.left + index * widthUnit +  widthUnit / 2, grid.height - l - bottom)
				} else {

					ctx.lineTo(grid.left + index * widthUnit + widthUnit / 2, grid.height - l - bottom)
				}
			})
		 	ctx.stroke()
		},
		_dataTogrid: function (options) {
			let data = options.series[0].data

		}
	}
}