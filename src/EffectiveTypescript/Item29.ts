//! ITEM 29 사용할 때는 너그럽게, 성생할 때는 엄격하게
declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): CameraOptions

interface CameraOptions {
  center? : LngLat;
  zoom? : number;
  bearing?: number;
  pitch?: number;
}

type LngLat = {lng: number; lat: number} | {lon: number; lat: number;} | [number, number];
type LngLatBounds = {northeast: LngLat, southwest: LngLat} | [LngLat, LngLat] | [number, number, number, number];

function focusOnFeature(f: Feature){
  const camera = viewportForBounds(bounds);
  const {center: {lat, lng}, zoom} = camera;
}

interface LngLatL1 { lng: number; lat: number;};
type LngLatLike = LngLatL1 | {lon: number; lat:number;} | [number, number];

interface Camera{
  center: LngLatL1;
  zoom: number;
  bearing: number;
  pitch: number;
}

interface CameraOptionsL1 extends Omit<Partial<Camera>, 'center'>{
  center?: LngLatLike;
}

type LngLatBoundsL1 = {northeast: LngLatLike, southwest: LngLatLike} | [LngLatLike, LngLatLike] | [number, number ,number, number];

declare function setCameraL1(camera: CameraOptionsL1): void;
declare function viewportForBoundsL1(bounds: LngLatBounds): Camera;

function focusOnFeatureL1(f: Feature){
  const camera = viewportForBoundsL1(bounds);
  const {center: {lat, lng}, zoom} = camera;
  zoom
}

