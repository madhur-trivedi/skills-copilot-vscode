// calculate the area of multiple shapes just by signature passing and conditions checking
function calculateShapesArea(shapes) {
  let area = 0;
  shapes.forEach((shape) => {
    if (shape.type === 'circle') {
      area += Math.PI * shape.radius ** 2;
    } else if (shape.type === 'rectangle') {
      area += shape.width * shape.height;
    } else if (shape.type === 'square') {
      area += shape.side ** 2;
    }
  });
  return area;
}