//! ITEM24 일광성 있는 별칭 사용하기 

interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox{
  x: [number, number];
  y: [number, number];
}

interface Polygon{
  exterior : Coordinate[];
  holes : Coordinate[][];
  bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate){
  if(polygon.bbox){
    if(pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] || pt.y < polygon.bbox.y[0] || pt.y > polygon.bbox.y[1]){
      return false;
    }
  }
}

function isPointInPolygonL1(polygon: Polygon, pt: Coordinate){
  const box = polygon.bbox;
  if(pt.x < box.x[0] || pt.x > box.x[1])
    return;
}