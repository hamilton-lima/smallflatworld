import { Library } from './editor-library.model';

const blasterkitComponents = [
  {
    id: 'blasterkit://targetA',
    name: 'targetA',
    icon: 'assets/library/kenney/blasterkit/Isometric/targetA_NE.png',
    model3D: 'library/kenney/blasterkit/Models/GLTF format/targetA.glb',
    scale: 8,
  },
  {
    id: 'blasterkit://targetB',
    name: 'targetB',
    icon: 'assets/library/kenney/blasterkit/Isometric/targetB_NE.png',
    model3D: 'library/kenney/blasterkit/Models/GLTF format/targetB.glb',
    scale: 8,
  },
];
const carkit14Components = [
  {
    id: 'carkit-1.4://ambulance',
    name: 'ambulance',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/ambulance_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/ambulance.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://deliveryFlat',
    name: 'deliveryFlat',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/deliveryFlat_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/deliveryFlat.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://delivery',
    name: 'delivery',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/delivery_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/delivery.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://firetruck',
    name: 'firetruck',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/firetruck_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/firetruck.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://garbageTruck',
    name: 'garbageTruck',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/garbageTruck_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/garbageTruck.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://hatchbackSports',
    name: 'hatchbackSports',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/hatchbackSports_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/hatchbackSports.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://police',
    name: 'police',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/police_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/police.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://raceFuture',
    name: 'raceFuture',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/raceFuture_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/raceFuture.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://race',
    name: 'race',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/race_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/race.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://sedanSports',
    name: 'sedanSports',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/sedanSports_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/sedanSports.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://sedan',
    name: 'sedan',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/sedan_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/sedan.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://suvLuxury',
    name: 'suvLuxury',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/suvLuxury_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/suvLuxury.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://suv',
    name: 'suv',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/suv_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/suv.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://taxi',
    name: 'taxi',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/taxi_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/taxi.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://tractorPolice',
    name: 'tractorPolice',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/tractorPolice_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/tractorPolice.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://tractorShovel',
    name: 'tractorShovel',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/tractorShovel_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/tractorShovel.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://tractor',
    name: 'tractor',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/tractor_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/tractor.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://truckFlat',
    name: 'truckFlat',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/truckFlat_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/truckFlat.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://truck',
    name: 'truck',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/truck_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/truck.glb',
    scale: 2.5,
  },
  {
    id: 'carkit-1.4://van',
    name: 'van',
    icon: 'assets/library/kenney/carkit-1.4/Isometric/van_E.png',
    model3D: 'library/kenney/carkit-1.4/Models/GLTF format/van.glb',
    scale: 2.5,
  },
];
const citykiturban1Components = [
  {
    id: 'city-kit-urban-1://driveway_long',
    name: 'driveway_long',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/driveway_long_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/driveway_long.glb',
    scale: 12,
    skipColision: true,
  },
  {
    id: 'city-kit-urban-1://driveway_short',
    name: 'driveway_short',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/driveway_short_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/driveway_short.glb',
    scale: 12,
    skipColision: true,
  },
  {
    id: 'city-kit-urban-1://fence_large',
    name: 'fence_large',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_large_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_large.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://fence_medium',
    name: 'fence_medium',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_medium_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_medium.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://fence_open',
    name: 'fence_open',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_open_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_open.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://fence_rectangle',
    name: 'fence_rectangle',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_rectangle_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_rectangle.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://fence_short',
    name: 'fence_short',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_short_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_short.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://fence_small',
    name: 'fence_small',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_small_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_small.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://fence_wide',
    name: 'fence_wide',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/fence_wide_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/fence_wide.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type01',
    name: 'house_type01',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type01_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type01.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type02',
    name: 'house_type02',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type02_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type02.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type03',
    name: 'house_type03',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type03_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type03.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type04',
    name: 'house_type04',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type04_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type04.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type05',
    name: 'house_type05',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type05_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type05.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type06',
    name: 'house_type06',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type06_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type06.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type07',
    name: 'house_type07',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type07_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type07.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type08',
    name: 'house_type08',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type08_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type08.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type09',
    name: 'house_type09',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type09_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type09.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type10',
    name: 'house_type10',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type10_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type10.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type11',
    name: 'house_type11',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type11_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type11.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type12',
    name: 'house_type12',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type12_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type12.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type13',
    name: 'house_type13',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type13_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type13.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type14',
    name: 'house_type14',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type14_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type14.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type15',
    name: 'house_type15',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type15_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type15.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type16',
    name: 'house_type16',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type16_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type16.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type17',
    name: 'house_type17',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type17_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type17.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type18',
    name: 'house_type18',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type18_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type18.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type19',
    name: 'house_type19',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type19_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type19.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type20',
    name: 'house_type20',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type20_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type20.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://house_type21',
    name: 'house_type21',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/house_type21_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/house_type21.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://path_long',
    name: 'path_long',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/path_long_NE.png',
    model3D: 'library/kenney/city-kit-urban-1/Models/GLTF format/path_long.glb',
    scale: 12,
    skipColision: true,
  },
  {
    id: 'city-kit-urban-1://path_short',
    name: 'path_short',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/path_short_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/path_short.glb',
    scale: 12,
    skipColision: true,
  },
  {
    id: 'city-kit-urban-1://path_tilesLong',
    name: 'path_tilesLong',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/path_tilesLong_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/path_tilesLong.glb',
    scale: 12,
    skipColision: true,
  },
  {
    id: 'city-kit-urban-1://path_tilesShort',
    name: 'path_tilesShort',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/path_tilesShort_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/path_tilesShort.glb',
    scale: 12,
    skipColision: true,
  },
  {
    id: 'city-kit-urban-1://tree_large',
    name: 'tree_large',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/tree_large_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/tree_large.glb',
    scale: 12,
  },
  {
    id: 'city-kit-urban-1://tree_small',
    name: 'tree_small',
    icon: 'assets/library/kenney/city-kit-urban-1/Isometric/tree_small_NE.png',
    model3D:
      'library/kenney/city-kit-urban-1/Models/GLTF format/tree_small.glb',
    scale: 12,
  },
];
const citykitroadsComponents = [
  {
    id: 'citykitroads://bridge_pillarWide',
    name: 'bridge_pillarWide',
    icon: 'assets/library/kenney/citykitroads/Isometric/bridge_pillarWide_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/bridge_pillarWide.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://bridge_pillar',
    name: 'bridge_pillar',
    icon: 'assets/library/kenney/citykitroads/Isometric/bridge_pillar_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/bridge_pillar.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://construction_barrier',
    name: 'construction_barrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/construction_barrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/construction_barrier.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://construction_light',
    name: 'construction_light',
    icon: 'assets/library/kenney/citykitroads/Isometric/construction_light_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/construction_light.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://construction_pylon',
    name: 'construction_pylon',
    icon: 'assets/library/kenney/citykitroads/Isometric/construction_pylon_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/construction_pylon.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://light_curvedCross',
    name: 'light_curvedCross',
    icon: 'assets/library/kenney/citykitroads/Isometric/light_curvedCross_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/light_curvedCross.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://light_curvedDouble',
    name: 'light_curvedDouble',
    icon: 'assets/library/kenney/citykitroads/Isometric/light_curvedDouble_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/light_curvedDouble.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://light_curved',
    name: 'light_curved',
    icon: 'assets/library/kenney/citykitroads/Isometric/light_curved_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/light_curved.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://light_squareCross',
    name: 'light_squareCross',
    icon: 'assets/library/kenney/citykitroads/Isometric/light_squareCross_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/light_squareCross.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://light_squareDouble',
    name: 'light_squareDouble',
    icon: 'assets/library/kenney/citykitroads/Isometric/light_squareDouble_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/light_squareDouble.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://light_square',
    name: 'light_square',
    icon: 'assets/library/kenney/citykitroads/Isometric/light_square_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/light_square.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://road_bendBarrier',
    name: 'road_bendBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_bendBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_bendBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_bendSidewalk',
    name: 'road_bendSidewalk',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_bendSidewalk_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_bendSidewalk.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_bendSquareBarrier',
    name: 'road_bendSquareBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_bendSquareBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_bendSquareBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_bendSquare',
    name: 'road_bendSquare',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_bendSquare_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_bendSquare.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_bend',
    name: 'road_bend',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_bend_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_bend.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_bridge',
    name: 'road_bridge',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_bridge_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_bridge.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_crossing',
    name: 'road_crossing',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_crossing_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_crossing.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_crossroadBarrier',
    name: 'road_crossroadBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_crossroadBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_crossroadBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_crossroadLine',
    name: 'road_crossroadLine',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_crossroadLine_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_crossroadLine.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_crossroadPath',
    name: 'road_crossroadPath',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_crossroadPath_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_crossroadPath.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_crossroad',
    name: 'road_crossroad',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_crossroad_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_crossroad.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_curveBarrier',
    name: 'road_curveBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_curveBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_curveBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_curveIntersectionBarrier',
    name: 'road_curveIntersectionBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_curveIntersectionBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_curveIntersectionBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_curveIntersection',
    name: 'road_curveIntersection',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_curveIntersection_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_curveIntersection.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_curvePavement',
    name: 'road_curvePavement',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_curvePavement_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_curvePavement.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_curve',
    name: 'road_curve',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_curve_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_curve.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_drivewayDoubleBarrier',
    name: 'road_drivewayDoubleBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_drivewayDoubleBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_drivewayDoubleBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_drivewayDouble',
    name: 'road_drivewayDouble',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_drivewayDouble_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_drivewayDouble.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_drivewaySingleBarrier',
    name: 'road_drivewaySingleBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_drivewaySingleBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_drivewaySingleBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_drivewaySingle',
    name: 'road_drivewaySingle',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_drivewaySingle_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_drivewaySingle.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_endBarrier',
    name: 'road_endBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_endBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_endBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_end',
    name: 'road_end',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_end_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_end.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_intersectionBarrier',
    name: 'road_intersectionBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_intersectionBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_intersectionBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_intersectionLine',
    name: 'road_intersectionLine',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_intersectionLine_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_intersectionLine.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_intersectionPath',
    name: 'road_intersectionPath',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_intersectionPath_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_intersectionPath.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_intersection',
    name: 'road_intersection',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_intersection_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_intersection.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_roundaboutBarrier',
    name: 'road_roundaboutBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_roundaboutBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_roundaboutBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_roundabout',
    name: 'road_roundabout',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_roundabout_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_roundabout.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_sideBarrier',
    name: 'road_sideBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_sideBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_sideBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_sideEntryBarrier',
    name: 'road_sideEntryBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_sideEntryBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_sideEntryBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_sideEntry',
    name: 'road_sideEntry',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_sideEntry_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_sideEntry.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_sideExitBarrier',
    name: 'road_sideExitBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_sideExitBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_sideExitBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_sideExit',
    name: 'road_sideExit',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_sideExit_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_sideExit.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_side',
    name: 'road_side',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_side_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_side.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantBarrier',
    name: 'road_slantBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantCurveBarrier',
    name: 'road_slantCurveBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantCurveBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantCurveBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantCurve',
    name: 'road_slantCurve',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantCurve_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantCurve.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantFlatCurve',
    name: 'road_slantFlatCurve',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantFlatCurve_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantFlatCurve.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantFlatHigh',
    name: 'road_slantFlatHigh',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantFlatHigh_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantFlatHigh.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantFlat',
    name: 'road_slantFlat',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantFlat_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantFlat.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantHighBarrier',
    name: 'road_slantHighBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantHighBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantHighBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slantHigh',
    name: 'road_slantHigh',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slantHigh_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_slantHigh.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_slant',
    name: 'road_slant',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_slant_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_slant.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_splitBarrier',
    name: 'road_splitBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_splitBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_splitBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_split',
    name: 'road_split',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_split_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_split.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_squareBarrier',
    name: 'road_squareBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_squareBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_squareBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_square',
    name: 'road_square',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_square_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_square.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_straightBarrierEnd',
    name: 'road_straightBarrierEnd',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_straightBarrierEnd_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_straightBarrierEnd.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_straightBarrier',
    name: 'road_straightBarrier',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_straightBarrier_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/road_straightBarrier.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://road_straight',
    name: 'road_straight',
    icon: 'assets/library/kenney/citykitroads/Isometric/road_straight_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/road_straight.glb',
    scale: 12.1,
    skipColision: true,
  },
  {
    id: 'citykitroads://tile_high',
    name: 'tile_high',
    icon: 'assets/library/kenney/citykitroads/Isometric/tile_high_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/tile_high.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://tile_low',
    name: 'tile_low',
    icon: 'assets/library/kenney/citykitroads/Isometric/tile_low_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/tile_low.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://tile_slantHigh',
    name: 'tile_slantHigh',
    icon: 'assets/library/kenney/citykitroads/Isometric/tile_slantHigh_NE.png',
    model3D:
      'library/kenney/citykitroads/Models/GLTF format/tile_slantHigh.glb',
    scale: 12.1,
  },
  {
    id: 'citykitroads://tile_slant',
    name: 'tile_slant',
    icon: 'assets/library/kenney/citykitroads/Isometric/tile_slant_NE.png',
    model3D: 'library/kenney/citykitroads/Models/GLTF format/tile_slant.glb',
    scale: 12.1,
  },
];
const fantasytownkit10Components = [
  {
    id: 'fantasy-town-kit-1.0://bannerGreen',
    name: 'bannerGreen',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/bannerGreen_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/bannerGreen.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://bannerRed',
    name: 'bannerRed',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/bannerRed_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/bannerRed.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://blade',
    name: 'blade',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/blade_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/blade.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://cartHigh',
    name: 'cartHigh',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/cartHigh_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/cartHigh.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://cart',
    name: 'cart',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/cart_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/cart.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://chimneyBase',
    name: 'chimneyBase',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/chimneyBase_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/chimneyBase.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://chimneyTop',
    name: 'chimneyTop',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/chimneyTop_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/chimneyTop.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://chimney',
    name: 'chimney',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/chimney_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/chimney.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fenceBroken',
    name: 'fenceBroken',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fenceBroken_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fenceBroken.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fenceCurved',
    name: 'fenceCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fenceCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fenceCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fenceGate',
    name: 'fenceGate',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fenceGate_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fenceGate.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fence',
    name: 'fence',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fence_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fence.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainCenter',
    name: 'fountainCenter',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainCenter_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainCenter.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainCornerInnerSquare',
    name: 'fountainCornerInnerSquare',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainCornerInnerSquare_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainCornerInnerSquare.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainCornerInner',
    name: 'fountainCornerInner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainCornerInner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainCornerInner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainCorner',
    name: 'fountainCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainCurved',
    name: 'fountainCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainEdge',
    name: 'fountainEdge',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainEdge_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainEdge.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainRoundDetail',
    name: 'fountainRoundDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainRoundDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainRoundDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainRound',
    name: 'fountainRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainSquareDetail',
    name: 'fountainSquareDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainSquareDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainSquareDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://fountainSquare',
    name: 'fountainSquare',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/fountainSquare_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/fountainSquare.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://hedgeCurved',
    name: 'hedgeCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/hedgeCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/hedgeCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://hedgeGate',
    name: 'hedgeGate',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/hedgeGate_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/hedgeGate.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://hedge',
    name: 'hedge',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/hedge_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/hedge.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://lantern',
    name: 'lantern',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/lantern_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/lantern.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://overhang',
    name: 'overhang',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/overhang_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/overhang.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://pillarStone',
    name: 'pillarStone',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/pillarStone_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/pillarStone.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://pillarWood',
    name: 'pillarWood',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/pillarWood_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/pillarWood.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://planksHalf',
    name: 'planksHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/planksHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/planksHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://planksOpening',
    name: 'planksOpening',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/planksOpening_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/planksOpening.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://planks',
    name: 'planks',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/planks_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/planks.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://polesHorizontal',
    name: 'polesHorizontal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/polesHorizontal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/polesHorizontal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://poles',
    name: 'poles',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/poles_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/poles.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadBend',
    name: 'roadBend',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadBend_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadBend.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadCornerInner',
    name: 'roadCornerInner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadCornerInner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadCornerInner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadCorner',
    name: 'roadCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadCurb',
    name: 'roadCurb',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadCurb_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadCurb.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadEdgeSlope',
    name: 'roadEdgeSlope',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadEdgeSlope_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadEdgeSlope.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadEdge',
    name: 'roadEdge',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadEdge_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadEdge.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roadSlope',
    name: 'roadSlope',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roadSlope_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roadSlope.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://road',
    name: 'road',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/road_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/road.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://rockLarge',
    name: 'rockLarge',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/rockLarge_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/rockLarge.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://rockSmall',
    name: 'rockSmall',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/rockSmall_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/rockSmall.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://rockWide',
    name: 'rockWide',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/rockWide_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/rockWide.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofCornerInner',
    name: 'roofCornerInner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofCornerInner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofCornerInner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofCornerRound',
    name: 'roofCornerRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofCornerRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofCornerRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofCorner',
    name: 'roofCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofFlat',
    name: 'roofFlat',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofFlat_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofFlat.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofGableDetail',
    name: 'roofGableDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofGableDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofGableDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofGableEnd',
    name: 'roofGableEnd',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofGableEnd_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofGableEnd.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofGableTop',
    name: 'roofGableTop',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofGableTop_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofGableTop.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofGable',
    name: 'roofGable',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofGable_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofGable.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighCornerInner',
    name: 'roofHighCornerInner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighCornerInner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighCornerInner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighCornerRound',
    name: 'roofHighCornerRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighCornerRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighCornerRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighCorner',
    name: 'roofHighCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighFlat',
    name: 'roofHighFlat',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighFlat_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighFlat.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighGableDetail',
    name: 'roofHighGableDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighGableDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighGableDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighGableEnd',
    name: 'roofHighGableEnd',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighGableEnd_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighGableEnd.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighGableTop',
    name: 'roofHighGableTop',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighGableTop_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighGableTop.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighGable',
    name: 'roofHighGable',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighGable_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighGable.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighLeft',
    name: 'roofHighLeft',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighLeft_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighLeft.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighPoint',
    name: 'roofHighPoint',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighPoint_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighPoint.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighRight',
    name: 'roofHighRight',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighRight_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighRight.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHighWindow',
    name: 'roofHighWindow',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHighWindow_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHighWindow.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofHigh',
    name: 'roofHigh',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofHigh_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofHigh.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofLeft',
    name: 'roofLeft',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofLeft_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofLeft.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofPoint',
    name: 'roofPoint',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofPoint_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofPoint.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofRight',
    name: 'roofRight',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofRight_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofRight.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roofWindow',
    name: 'roofWindow',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roofWindow_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roofWindow.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://roof',
    name: 'roof',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/roof_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/roof.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stairsStoneCorner',
    name: 'stairsStoneCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stairsStoneCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stairsStoneCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stairsStoneHandrail',
    name: 'stairsStoneHandrail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stairsStoneHandrail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stairsStoneHandrail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stairsStoneRound',
    name: 'stairsStoneRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stairsStoneRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stairsStoneRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stairsStone',
    name: 'stairsStone',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stairsStone_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stairsStone.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stairsWoodHandrail',
    name: 'stairsWoodHandrail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stairsWoodHandrail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stairsWoodHandrail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stairsWood',
    name: 'stairsWood',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stairsWood_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stairsWood.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stallBench',
    name: 'stallBench',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stallBench_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stallBench.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stallGreen',
    name: 'stallGreen',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stallGreen_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stallGreen.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stallRed',
    name: 'stallRed',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stallRed_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stallRed.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stallStool',
    name: 'stallStool',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stallStool_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stallStool.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://stall',
    name: 'stall',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/stall_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/stall.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://treeCrooked',
    name: 'treeCrooked',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/treeCrooked_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/treeCrooked.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://treeHighCrooked',
    name: 'treeHighCrooked',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/treeHighCrooked_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/treeHighCrooked.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://treeHighRound',
    name: 'treeHighRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/treeHighRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/treeHighRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://treeHigh',
    name: 'treeHigh',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/treeHigh_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/treeHigh.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://tree',
    name: 'tree',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/tree_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/tree.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallArchTopDetail',
    name: 'wallArchTopDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallArchTopDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallArchTopDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallArchTop',
    name: 'wallArchTop',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallArchTop_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallArchTop.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallArch',
    name: 'wallArch',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallArch_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallArch.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallBlockHalf',
    name: 'wallBlockHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallBlockHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallBlockHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallBlock',
    name: 'wallBlock',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallBlock_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallBlock.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallBroken',
    name: 'wallBroken',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallBroken_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallBroken.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallCornerDetail',
    name: 'wallCornerDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallCornerDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallCornerDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallCornerDiagonalHalf',
    name: 'wallCornerDiagonalHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallCornerDiagonalHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallCornerDiagonalHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallCornerDiagonal',
    name: 'wallCornerDiagonal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallCornerDiagonal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallCornerDiagonal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallCornerEdge',
    name: 'wallCornerEdge',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallCornerEdge_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallCornerEdge.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallCorner',
    name: 'wallCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallCurved',
    name: 'wallCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDetailCross',
    name: 'wallDetailCross',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDetailCross_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDetailCross.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDetailDiagonal',
    name: 'wallDetailDiagonal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDetailDiagonal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDetailDiagonal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDetailHorizontal',
    name: 'wallDetailHorizontal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDetailHorizontal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDetailHorizontal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDiagonal',
    name: 'wallDiagonal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDiagonal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDiagonal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDoor',
    name: 'wallDoor',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDoor_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDoor.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDoorwayBase',
    name: 'wallDoorwayBase',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDoorwayBase_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDoorwayBase.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDoorwayRound',
    name: 'wallDoorwayRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDoorwayRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDoorwayRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDoorwaySquareWideCurved',
    name: 'wallDoorwaySquareWideCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDoorwaySquareWideCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDoorwaySquareWideCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDoorwaySquareWide',
    name: 'wallDoorwaySquareWide',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDoorwaySquareWide_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDoorwaySquareWide.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallDoorwaySquare',
    name: 'wallDoorwaySquare',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallDoorwaySquare_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallDoorwaySquare.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallHalf',
    name: 'wallHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallRounded',
    name: 'wallRounded',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallRounded_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallRounded.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallSide',
    name: 'wallSide',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallSide_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallSide.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallSlope',
    name: 'wallSlope',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallSlope_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallSlope.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWindowGlass',
    name: 'wallWindowGlass',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWindowGlass_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWindowGlass.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWindowRound',
    name: 'wallWindowRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWindowRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWindowRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWindowShutters',
    name: 'wallWindowShutters',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWindowShutters_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWindowShutters.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWindowSmall',
    name: 'wallWindowSmall',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWindowSmall_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWindowSmall.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWindowStone',
    name: 'wallWindowStone',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWindowStone_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWindowStone.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodArchTopDetail',
    name: 'wallWoodArchTopDetail',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodArchTopDetail_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodArchTopDetail.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodArchTop',
    name: 'wallWoodArchTop',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodArchTop_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodArchTop.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodArch',
    name: 'wallWoodArch',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodArch_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodArch.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodBlockHalf',
    name: 'wallWoodBlockHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodBlockHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodBlockHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodBlock',
    name: 'wallWoodBlock',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodBlock_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodBlock.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodBroken',
    name: 'wallWoodBroken',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodBroken_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodBroken.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodCornerDiagonalHalf',
    name: 'wallWoodCornerDiagonalHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodCornerDiagonalHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodCornerDiagonalHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodCornerDiagonal',
    name: 'wallWoodCornerDiagonal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodCornerDiagonal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodCornerDiagonal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodCornerEdge',
    name: 'wallWoodCornerEdge',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodCornerEdge_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodCornerEdge.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodCorner',
    name: 'wallWoodCorner',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodCorner_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodCorner.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodCurved',
    name: 'wallWoodCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDetailCross',
    name: 'wallWoodDetailCross',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDetailCross_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDetailCross.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDetailDiagonal',
    name: 'wallWoodDetailDiagonal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDetailDiagonal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDetailDiagonal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDetailHorizontal',
    name: 'wallWoodDetailHorizontal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDetailHorizontal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDetailHorizontal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDiagonal',
    name: 'wallWoodDiagonal',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDiagonal_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDiagonal.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDoor',
    name: 'wallWoodDoor',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDoor_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDoor.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDoorwayBase',
    name: 'wallWoodDoorwayBase',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDoorwayBase_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDoorwayBase.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDoorwayRound',
    name: 'wallWoodDoorwayRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDoorwayRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDoorwayRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDoorwaySquareWideCurved',
    name: 'wallWoodDoorwaySquareWideCurved',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDoorwaySquareWideCurved_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDoorwaySquareWideCurved.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDoorwaySquareWide',
    name: 'wallWoodDoorwaySquareWide',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDoorwaySquareWide_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDoorwaySquareWide.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodDoorwaySquare',
    name: 'wallWoodDoorwaySquare',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodDoorwaySquare_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodDoorwaySquare.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodHalf',
    name: 'wallWoodHalf',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodHalf_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodHalf.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodRounded',
    name: 'wallWoodRounded',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodRounded_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodRounded.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodSide',
    name: 'wallWoodSide',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodSide_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodSide.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodSlope',
    name: 'wallWoodSlope',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodSlope_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodSlope.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodWindowGlass',
    name: 'wallWoodWindowGlass',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodWindowGlass_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodWindowGlass.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodWindowRound',
    name: 'wallWoodWindowRound',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodWindowRound_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodWindowRound.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodWindowShutters',
    name: 'wallWoodWindowShutters',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodWindowShutters_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodWindowShutters.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodWindowSmall',
    name: 'wallWoodWindowSmall',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodWindowSmall_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodWindowSmall.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWoodWindowStone',
    name: 'wallWoodWindowStone',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWoodWindowStone_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWoodWindowStone.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wallWood',
    name: 'wallWood',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wallWood_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wallWood.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wall',
    name: 'wall',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wall_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wall.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://watermill',
    name: 'watermill',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/watermill_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/watermill.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://wheel',
    name: 'wheel',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/wheel_E.png',
    model3D: 'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/wheel.glb',
    scale: 8.101,
  },
  {
    id: 'fantasy-town-kit-1.0://windmill',
    name: 'windmill',
    icon: 'assets/library/kenney/fantasy-town-kit-1.0/Isometric/windmill_E.png',
    model3D:
      'library/kenney/fantasy-town-kit-1.0/Models/GLTF format/windmill.glb',
    scale: 8.101,
  },
];
const graveyardkit3Components = [
  {
    id: 'graveyardkit-3://altarStone',
    name: 'altarStone',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/altarStone_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/altarStone.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://altarWood',
    name: 'altarWood',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/altarWood_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/altarWood.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://benchDamaged',
    name: 'benchDamaged',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/benchDamaged_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/benchDamaged.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://bench',
    name: 'bench',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/bench_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/bench.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://borderPillar',
    name: 'borderPillar',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/borderPillar_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/borderPillar.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://brickWallCurve',
    name: 'brickWallCurve',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/brickWallCurve_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/brickWallCurve.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://brickWall',
    name: 'brickWall',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/brickWall_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/brickWall.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://coffinOld',
    name: 'coffinOld',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/coffinOld_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/coffinOld.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://coffin',
    name: 'coffin',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/coffin_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/coffin.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://columnLarge',
    name: 'columnLarge',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/columnLarge_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/columnLarge.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://crossColumn',
    name: 'crossColumn',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/crossColumn_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/crossColumn.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://crossWood',
    name: 'crossWood',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/crossWood_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/crossWood.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://cross',
    name: 'cross',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/cross_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/cross.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://crypt',
    name: 'crypt',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/crypt_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/crypt.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://debrisWood',
    name: 'debrisWood',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/debrisWood_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/debrisWood.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://debris',
    name: 'debris',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/debris_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/debris.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://detailBowl',
    name: 'detailBowl',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/detailBowl_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/detailBowl.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://detailChalice',
    name: 'detailChalice',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/detailChalice_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/detailChalice.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://detailPlate',
    name: 'detailPlate',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/detailPlate_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/detailPlate.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://digger',
    name: 'digger',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/digger_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/digger.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://fenceDamaged',
    name: 'fenceDamaged',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/fenceDamaged_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/fenceDamaged.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://fenceGate',
    name: 'fenceGate',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/fenceGate_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/fenceGate.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://fence',
    name: 'fence',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/fence_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/fence.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://fireBasket',
    name: 'fireBasket',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/fireBasket_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/fireBasket.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ghost',
    name: 'ghost',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ghost_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/ghost.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://graveBorder',
    name: 'graveBorder',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/graveBorder_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/graveBorder.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://grave',
    name: 'grave',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/grave_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/grave.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneBevel',
    name: 'gravestoneBevel',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneBevel_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneBevel.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneBroken',
    name: 'gravestoneBroken',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneBroken_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneBroken.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneCrossLarge',
    name: 'gravestoneCrossLarge',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneCrossLarge_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneCrossLarge.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneCross',
    name: 'gravestoneCross',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneCross_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneCross.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneDebris',
    name: 'gravestoneDebris',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneDebris_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneDebris.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneDecorative',
    name: 'gravestoneDecorative',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneDecorative_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneDecorative.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneFlatOpen',
    name: 'gravestoneFlatOpen',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneFlatOpen_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneFlatOpen.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneFlat',
    name: 'gravestoneFlat',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneFlat_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneFlat.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneRoof',
    name: 'gravestoneRoof',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneRoof_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneRoof.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneRound',
    name: 'gravestoneRound',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneRound_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneRound.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://gravestoneWide',
    name: 'gravestoneWide',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/gravestoneWide_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/gravestoneWide.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceBar',
    name: 'ironFenceBar',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceBar_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceBar.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceBorderColumn',
    name: 'ironFenceBorderColumn',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceBorderColumn_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceBorderColumn.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceBorderCurve',
    name: 'ironFenceBorderCurve',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceBorderCurve_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceBorderCurve.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceBorderGate',
    name: 'ironFenceBorderGate',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceBorderGate_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceBorderGate.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceBorder',
    name: 'ironFenceBorder',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceBorder_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceBorder.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceCurve',
    name: 'ironFenceCurve',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceCurve_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceCurve.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFenceDamaged',
    name: 'ironFenceDamaged',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFenceDamaged_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/ironFenceDamaged.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://ironFence',
    name: 'ironFence',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/ironFence_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/ironFence.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://lanternCandle',
    name: 'lanternCandle',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/lanternCandle_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/lanternCandle.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://lanternGlass',
    name: 'lanternGlass',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/lanternGlass_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/lanternGlass.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://lightpostAll',
    name: 'lightpostAll',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/lightpostAll_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/lightpostAll.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://lightpostDouble',
    name: 'lightpostDouble',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/lightpostDouble_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/lightpostDouble.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://lightpostSingle',
    name: 'lightpostSingle',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/lightpostSingle_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/lightpostSingle.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pillarLarge',
    name: 'pillarLarge',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pillarLarge_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/pillarLarge.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pillarObelisk',
    name: 'pillarObelisk',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pillarObelisk_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/pillarObelisk.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pillarSmall',
    name: 'pillarSmall',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pillarSmall_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/pillarSmall.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pillarSquare',
    name: 'pillarSquare',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pillarSquare_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/pillarSquare.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pineCrooked',
    name: 'pineCrooked',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pineCrooked_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/pineCrooked.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pine',
    name: 'pine',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pine_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/pine.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pumpkinCarved',
    name: 'pumpkinCarved',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pumpkinCarved_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/pumpkinCarved.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pumpkinTallCarved',
    name: 'pumpkinTallCarved',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pumpkinTallCarved_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/pumpkinTallCarved.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pumpkinTall',
    name: 'pumpkinTall',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pumpkinTall_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/pumpkinTall.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://pumpkin',
    name: 'pumpkin',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/pumpkin_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/pumpkin.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://road',
    name: 'road',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/road_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/road.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://rocksTall',
    name: 'rocksTall',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/rocksTall_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/rocksTall.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://rocks',
    name: 'rocks',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/rocks_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/rocks.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://shovelDirt',
    name: 'shovelDirt',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/shovelDirt_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/shovelDirt.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://shovel',
    name: 'shovel',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/shovel_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/shovel.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://skeleton',
    name: 'skeleton',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/skeleton_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/skeleton.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://stoneWallColumn',
    name: 'stoneWallColumn',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/stoneWallColumn_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/stoneWallColumn.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://stoneWallCurve',
    name: 'stoneWallCurve',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/stoneWallCurve_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/stoneWallCurve.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://stoneWallDamaged',
    name: 'stoneWallDamaged',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/stoneWallDamaged_NE.png',
    model3D:
      'library/kenney/graveyardkit-3/Models/GLTF format/stoneWallDamaged.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://stoneWall',
    name: 'stoneWall',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/stoneWall_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/stoneWall.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://trunkLong',
    name: 'trunkLong',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/trunkLong_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/trunkLong.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://trunk',
    name: 'trunk',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/trunk_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/trunk.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://urn',
    name: 'urn',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/urn_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/urn.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://vampire',
    name: 'vampire',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/vampire_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/vampire.glb',
    scale: 5.201,
  },
  {
    id: 'graveyardkit-3://zombie',
    name: 'zombie',
    icon: 'assets/library/kenney/graveyardkit-3/Isometric/zombie_NE.png',
    model3D: 'library/kenney/graveyardkit-3/Models/GLTF format/zombie.glb',
    scale: 5.201,
  },
];
const hexagonkit1Components = [
  {
    id: 'hexagonkit-1://building_cabin',
    name: 'building_cabin',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_cabin_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_cabin.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_castle',
    name: 'building_castle',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_castle_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_castle.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_dock',
    name: 'building_dock',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_dock_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/building_dock.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_farm',
    name: 'building_farm',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_farm_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/building_farm.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_house',
    name: 'building_house',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_house_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_house.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_market',
    name: 'building_market',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_market_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_market.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_mill',
    name: 'building_mill',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_mill_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/building_mill.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_mine',
    name: 'building_mine',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_mine_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/building_mine.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_sheep',
    name: 'building_sheep',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_sheep_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_sheep.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_smelter',
    name: 'building_smelter',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_smelter_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_smelter.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_tower',
    name: 'building_tower',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_tower_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_tower.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_village',
    name: 'building_village',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_village_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_village.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_wall',
    name: 'building_wall',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_wall_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/building_wall.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://building_water',
    name: 'building_water',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/building_water_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/building_water.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://dirt',
    name: 'dirt',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/dirt_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/dirt.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://dirt_lumber',
    name: 'dirt_lumber',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/dirt_lumber_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/dirt_lumber.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://grass',
    name: 'grass',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/grass_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/grass.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://grass_forest',
    name: 'grass_forest',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/grass_forest_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/grass_forest.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://grass_hill',
    name: 'grass_hill',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/grass_hill_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/grass_hill.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_cornerSharp',
    name: 'path_cornerSharp',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_cornerSharp_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_cornerSharp.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_corner',
    name: 'path_corner',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_corner_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/path_corner.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_crossing',
    name: 'path_crossing',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_crossing_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/path_crossing.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_end',
    name: 'path_end',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_end_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/path_end.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionA',
    name: 'path_intersectionA',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionA_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionA.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionB',
    name: 'path_intersectionB',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionB_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionB.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionC',
    name: 'path_intersectionC',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionC_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionC.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionD',
    name: 'path_intersectionD',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionD_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionD.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionE',
    name: 'path_intersectionE',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionE_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionE.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionF',
    name: 'path_intersectionF',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionF_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionF.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionG',
    name: 'path_intersectionG',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionG_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionG.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_intersectionH',
    name: 'path_intersectionH',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_intersectionH_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/path_intersectionH.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_start',
    name: 'path_start',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_start_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/path_start.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://path_straight',
    name: 'path_straight',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/path_straight_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/path_straight.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_cornerSharp',
    name: 'river_cornerSharp',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_cornerSharp_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_cornerSharp.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_corner',
    name: 'river_corner',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_corner_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/river_corner.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_crossing',
    name: 'river_crossing',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_crossing_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_crossing.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_end',
    name: 'river_end',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_end_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/river_end.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionA',
    name: 'river_intersectionA',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionA_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionA.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionB',
    name: 'river_intersectionB',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionB_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionB.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionC',
    name: 'river_intersectionC',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionC_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionC.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionD',
    name: 'river_intersectionD',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionD_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionD.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionE',
    name: 'river_intersectionE',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionE_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionE.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionF',
    name: 'river_intersectionF',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionF_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionF.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionG',
    name: 'river_intersectionG',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionG_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionG.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_intersectionH',
    name: 'river_intersectionH',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_intersectionH_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_intersectionH.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_start',
    name: 'river_start',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_start_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/river_start.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://river_straight',
    name: 'river_straight',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/river_straight_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/river_straight.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://sand',
    name: 'sand',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/sand_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/sand.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://sand_rocks',
    name: 'sand_rocks',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/sand_rocks_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/sand_rocks.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://stone',
    name: 'stone',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/stone_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/stone.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://stone_hill',
    name: 'stone_hill',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/stone_hill_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/stone_hill.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://stone_mountain',
    name: 'stone_mountain',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/stone_mountain_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/stone_mountain.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://stone_rocks',
    name: 'stone_rocks',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/stone_rocks_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/stone_rocks.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_boat',
    name: 'unit_boat',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_boat_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/unit_boat.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_houseLarge',
    name: 'unit_houseLarge',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_houseLarge_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/unit_houseLarge.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_house',
    name: 'unit_house',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_house_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/unit_house.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_mill',
    name: 'unit_mill',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_mill_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/unit_mill.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_tower',
    name: 'unit_tower',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_tower_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/unit_tower.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_tree',
    name: 'unit_tree',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_tree_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/unit_tree.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://unit_wallTower',
    name: 'unit_wallTower',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/unit_wallTower_NE.png',
    model3D:
      'library/kenney/hexagonkit-1/Models/GLTF format/unit_wallTower.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://water',
    name: 'water',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/water_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/water.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://water_island',
    name: 'water_island',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/water_island_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/water_island.glb',
    scale: 5.104,
  },
  {
    id: 'hexagonkit-1://water_rocks',
    name: 'water_rocks',
    icon: 'assets/library/kenney/hexagonkit-1/Isometric/water_rocks_NE.png',
    model3D: 'library/kenney/hexagonkit-1/Models/GLTF format/water_rocks.glb',
    scale: 5.104,
  },
];
const holidaykit2Components = [
  {
    id: 'holidaykit-2://bench',
    name: 'bench',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/bench_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/bench.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinCorner',
    name: 'cabinCorner',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinCorner_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinCorner.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinDoor',
    name: 'cabinDoor',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinDoor_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinDoor.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinFloor',
    name: 'cabinFloor',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinFloor_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinFloor.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinRoofCenter',
    name: 'cabinRoofCenter',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinRoofCenter_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/cabinRoofCenter.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinRoofChimney',
    name: 'cabinRoofChimney',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinRoofChimney_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/cabinRoofChimney.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinRoofCorner',
    name: 'cabinRoofCorner',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinRoofCorner_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/cabinRoofCorner.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinRoofFlat',
    name: 'cabinRoofFlat',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinRoofFlat_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinRoofFlat.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinRoof',
    name: 'cabinRoof',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinRoof_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinRoof.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinSideCenter',
    name: 'cabinSideCenter',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinSideCenter_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/cabinSideCenter.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinSide',
    name: 'cabinSide',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinSide_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinSide.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinWallHalf',
    name: 'cabinWallHalf',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinWallHalf_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinWallHalf.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinWall',
    name: 'cabinWall',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinWall_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinWall.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinWindowHalf',
    name: 'cabinWindowHalf',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinWindowHalf_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/cabinWindowHalf.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinWindowLarge',
    name: 'cabinWindowLarge',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinWindowLarge_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/cabinWindowLarge.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://cabinWindow',
    name: 'cabinWindow',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/cabinWindow_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/cabinWindow.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://candyCaneMint',
    name: 'candyCaneMint',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/candyCaneMint_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/candyCaneMint.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://candyCane',
    name: 'candyCane',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/candyCane_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/candyCane.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://festivusPole',
    name: 'festivusPole',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/festivusPole_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/festivusPole.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://hanukkahDreidel',
    name: 'hanukkahDreidel',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/hanukkahDreidel_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/hanukkahDreidel.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://hanukkahMenorah',
    name: 'hanukkahMenorah',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/hanukkahMenorah_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/hanukkahMenorah.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://kwanzaaKikombe',
    name: 'kwanzaaKikombe',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/kwanzaaKikombe_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/kwanzaaKikombe.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://kwanzaaKinaraAlternative',
    name: 'kwanzaaKinaraAlternative',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/kwanzaaKinaraAlternative_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/kwanzaaKinaraAlternative.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://kwanzaaKinara',
    name: 'kwanzaaKinara',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/kwanzaaKinara_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/kwanzaaKinara.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://lightpostHanging',
    name: 'lightpostHanging',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/lightpostHanging_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/lightpostHanging.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://lightpost',
    name: 'lightpost',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/lightpost_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/lightpost.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://lightsGreen',
    name: 'lightsGreen',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/lightsGreen_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/lightsGreen.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://lightsMulti',
    name: 'lightsMulti',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/lightsMulti_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/lightsMulti.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://lightsRed',
    name: 'lightsRed',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/lightsRed_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/lightsRed.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://presentGreenLow',
    name: 'presentGreenLow',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/presentGreenLow_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/presentGreenLow.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://presentGreenRound',
    name: 'presentGreenRound',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/presentGreenRound_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/presentGreenRound.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://presentGreen',
    name: 'presentGreen',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/presentGreen_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/presentGreen.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://presentLow',
    name: 'presentLow',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/presentLow_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/presentLow.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://presentRound',
    name: 'presentRound',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/presentRound_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/presentRound.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://present',
    name: 'present',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/present_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/present.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://rockFormationLarge',
    name: 'rockFormationLarge',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/rockFormationLarge_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/rockFormationLarge.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://rockFormationMedium',
    name: 'rockFormationMedium',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/rockFormationMedium_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/rockFormationMedium.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://rockFormationSmall',
    name: 'rockFormationSmall',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/rockFormationSmall_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/rockFormationSmall.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://sled',
    name: 'sled',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/sled_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/sled.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://snowFort',
    name: 'snowFort',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/snowFort_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/snowFort.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://snowPatch',
    name: 'snowPatch',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/snowPatch_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/snowPatch.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://snowmanFancy',
    name: 'snowmanFancy',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/snowmanFancy_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/snowmanFancy.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://snowman',
    name: 'snowman',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/snowman_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/snowman.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trackCornerLarge',
    name: 'trackCornerLarge',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trackCornerLarge_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trackCornerLarge.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trackCornerSmall',
    name: 'trackCornerSmall',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trackCornerSmall_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trackCornerSmall.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trackSimpleCornerLarge',
    name: 'trackSimpleCornerLarge',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trackSimpleCornerLarge_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trackSimpleCornerLarge.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trackSimpleCornerSmall',
    name: 'trackSimpleCornerSmall',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trackSimpleCornerSmall_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trackSimpleCornerSmall.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trackSimpleStraight',
    name: 'trackSimpleStraight',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trackSimpleStraight_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trackSimpleStraight.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trackStraight',
    name: 'trackStraight',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trackStraight_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/trackStraight.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trainLocomotive',
    name: 'trainLocomotive',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trainLocomotive_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trainLocomotive.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trainTender',
    name: 'trainTender',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trainTender_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/trainTender.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trainWagonFlat',
    name: 'trainWagonFlat',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trainWagonFlat_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trainWagonFlat.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trainWagonShort',
    name: 'trainWagonShort',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trainWagonShort_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/trainWagonShort.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://trainWagon',
    name: 'trainWagon',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/trainWagon_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/trainWagon.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://treeDecorated',
    name: 'treeDecorated',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/treeDecorated_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/treeDecorated.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://treePineSnowRound',
    name: 'treePineSnowRound',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/treePineSnowRound_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/treePineSnowRound.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://treePineSnow',
    name: 'treePineSnow',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/treePineSnow_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/treePineSnow.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://treePineSnowed',
    name: 'treePineSnowed',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/treePineSnowed_NE.png',
    model3D:
      'library/kenney/holidaykit-2/Models/GLTF format/treePineSnowed.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://treePine',
    name: 'treePine',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/treePine_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/treePine.glb',
    scale: 5.105,
  },
  {
    id: 'holidaykit-2://wreath',
    name: 'wreath',
    icon: 'assets/library/kenney/holidaykit-2/Isometric/wreath_NE.png',
    model3D: 'library/kenney/holidaykit-2/Models/GLTF format/wreath.glb',
    scale: 5.105,
  },
];
const minigolfkit20Components = [
  {
    id: 'minigolf-kit-2.0://ball_blue',
    name: 'ball_blue',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/ball_blue_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/ball_blue.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://ball_green',
    name: 'ball_green',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/ball_green_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/ball_green.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://ball_red',
    name: 'ball_red',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/ball_red_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/ball_red.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://block',
    name: 'block',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/block_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/block.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://bumpDownWalls',
    name: 'bumpDownWalls',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/bumpDownWalls_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/bumpDownWalls.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://bumpDown',
    name: 'bumpDown',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/bumpDown_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/bumpDown.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://bumpWalls',
    name: 'bumpWalls',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/bumpWalls_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/bumpWalls.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://bump',
    name: 'bump',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/bump_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/bump.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://castle',
    name: 'castle',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/castle_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/castle.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://club_blue',
    name: 'club_blue',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/club_blue_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/club_blue.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://club_green',
    name: 'club_green',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/club_green_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/club_green.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://club_red',
    name: 'club_red',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/club_red_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/club_red.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://corner',
    name: 'corner',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/corner_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/corner.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://crest',
    name: 'crest',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/crest_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/crest.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://end',
    name: 'end',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/end_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/end.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://flag_blue',
    name: 'flag_blue',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/flag_blue_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/flag_blue.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://flag_green',
    name: 'flag_green',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/flag_green_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/flag_green.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://flag_red',
    name: 'flag_red',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/flag_red_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/flag_red.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://gap',
    name: 'gap',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/gap_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/gap.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://hillCorner',
    name: 'hillCorner',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/hillCorner_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/hillCorner.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://hillRound',
    name: 'hillRound',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/hillRound_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/hillRound.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://hillSquare',
    name: 'hillSquare',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/hillSquare_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/hillSquare.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://holeOpen',
    name: 'holeOpen',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/holeOpen_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/holeOpen.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://holeRound',
    name: 'holeRound',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/holeRound_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/holeRound.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://holeSquare',
    name: 'holeSquare',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/holeSquare_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/holeSquare.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://innerCorner',
    name: 'innerCorner',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/innerCorner_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/innerCorner.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://narrowBlock',
    name: 'narrowBlock',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/narrowBlock_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/narrowBlock.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://narrowRound',
    name: 'narrowRound',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/narrowRound_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/narrowRound.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://narrowSquare',
    name: 'narrowSquare',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/narrowSquare_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/narrowSquare.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://obstacleBlock',
    name: 'obstacleBlock',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/obstacleBlock_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/obstacleBlock.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://obstacleDiamond',
    name: 'obstacleDiamond',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/obstacleDiamond_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/obstacleDiamond.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://obstacleTriangle',
    name: 'obstacleTriangle',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/obstacleTriangle_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/obstacleTriangle.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://open',
    name: 'open',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/open_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/open.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://rampA',
    name: 'rampA',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/rampA_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/rampA.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://rampB',
    name: 'rampB',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/rampB_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/rampB.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://rampC',
    name: 'rampC',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/rampC_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/rampC.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://rampD',
    name: 'rampD',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/rampD_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/rampD.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://rampSharp',
    name: 'rampSharp',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/rampSharp_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/rampSharp.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://rampSquare',
    name: 'rampSquare',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/rampSquare_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/rampSquare.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://roundCornerA',
    name: 'roundCornerA',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/roundCornerA_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/roundCornerA.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://roundCornerB',
    name: 'roundCornerB',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/roundCornerB_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/roundCornerB.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://roundCornerC',
    name: 'roundCornerC',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/roundCornerC_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/roundCornerC.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://side',
    name: 'side',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/side_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/side.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://splitStart',
    name: 'splitStart',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/splitStart_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/splitStart.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://splitT',
    name: 'splitT',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/splitT_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/splitT.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://splitWallsToOpen',
    name: 'splitWallsToOpen',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/splitWallsToOpen_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/splitWallsToOpen.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://split',
    name: 'split',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/split_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/split.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://squareCornerA',
    name: 'squareCornerA',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/squareCornerA_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/squareCornerA.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://start',
    name: 'start',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/start_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/start.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://straight',
    name: 'straight',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/straight_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/straight.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://tunnelDouble',
    name: 'tunnelDouble',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/tunnelDouble_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/tunnelDouble.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://tunnelNarrow',
    name: 'tunnelNarrow',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/tunnelNarrow_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/tunnelNarrow.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://tunnelWide',
    name: 'tunnelWide',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/tunnelWide_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/tunnelWide.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://wallLeft',
    name: 'wallLeft',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/wallLeft_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/wallLeft.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://wallRight',
    name: 'wallRight',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/wallRight_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/wallRight.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://wallsToOpen',
    name: 'wallsToOpen',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/wallsToOpen_E.png',
    model3D:
      'library/kenney/minigolf-kit-2.0/Models/GLTF format/wallsToOpen.glb',
    scale: 2.080000000000001,
  },
  {
    id: 'minigolf-kit-2.0://windmill',
    name: 'windmill',
    icon: 'assets/library/kenney/minigolf-kit-2.0/Isometric/windmill_E.png',
    model3D: 'library/kenney/minigolf-kit-2.0/Models/GLTF format/windmill.glb',
    scale: 2.080000000000001,
  },
];
const natureKit21Components = [
  {
    id: 'natureKit-2.1://bed',
    name: 'bed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bed_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/bed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bed_floor',
    name: 'bed_floor',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bed_floor_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/bed_floor.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_center_stoneRound',
    name: 'bridge_center_stoneRound',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_center_stoneRound_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_center_stoneRound.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_center_stone',
    name: 'bridge_center_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_center_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_center_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_center_woodRound',
    name: 'bridge_center_woodRound',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_center_woodRound_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_center_woodRound.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_center_wood',
    name: 'bridge_center_wood',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_center_wood_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_center_wood.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_side_stoneRound',
    name: 'bridge_side_stoneRound',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_side_stoneRound_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_side_stoneRound.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_side_stone',
    name: 'bridge_side_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_side_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_side_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_side_woodRound',
    name: 'bridge_side_woodRound',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_side_woodRound_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_side_woodRound.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_side_wood',
    name: 'bridge_side_wood',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_side_wood_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_side_wood.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_stoneNarrow',
    name: 'bridge_stoneNarrow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_stoneNarrow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_stoneNarrow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_stoneRoundNarrow',
    name: 'bridge_stoneRoundNarrow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_stoneRoundNarrow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_stoneRoundNarrow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_stoneRound',
    name: 'bridge_stoneRound',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_stoneRound_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_stoneRound.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_stone',
    name: 'bridge_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_stone_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/bridge_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_woodNarrow',
    name: 'bridge_woodNarrow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_woodNarrow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_woodNarrow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_woodRoundNarrow',
    name: 'bridge_woodRoundNarrow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_woodRoundNarrow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_woodRoundNarrow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_woodRound',
    name: 'bridge_woodRound',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_woodRound_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/bridge_woodRound.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://bridge_wood',
    name: 'bridge_wood',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/bridge_wood_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/bridge_wood.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cactus_short',
    name: 'cactus_short',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cactus_short_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/cactus_short.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cactus_tall',
    name: 'cactus_tall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cactus_tall_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/cactus_tall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://campfire_bricks',
    name: 'campfire_bricks',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/campfire_bricks_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/campfire_bricks.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://campfire_logs',
    name: 'campfire_logs',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/campfire_logs_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/campfire_logs.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://campfire_planks',
    name: 'campfire_planks',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/campfire_planks_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/campfire_planks.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://campfire_stones',
    name: 'campfire_stones',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/campfire_stones_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/campfire_stones.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://canoe',
    name: 'canoe',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/canoe_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/canoe.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://canoe_paddle',
    name: 'canoe_paddle',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/canoe_paddle_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/canoe_paddle.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockCave_rock',
    name: 'cliff_blockCave_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockCave_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockCave_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockCave_stone',
    name: 'cliff_blockCave_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockCave_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockCave_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockDiagonal_rock',
    name: 'cliff_blockDiagonal_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockDiagonal_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockDiagonal_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockDiagonal_stone',
    name: 'cliff_blockDiagonal_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockDiagonal_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockDiagonal_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockHalf_rock',
    name: 'cliff_blockHalf_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockHalf_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockHalf_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockHalf_stone',
    name: 'cliff_blockHalf_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockHalf_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockHalf_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockQuarter_rock',
    name: 'cliff_blockQuarter_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockQuarter_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockQuarter_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockQuarter_stone',
    name: 'cliff_blockQuarter_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockQuarter_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockQuarter_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockSlopeHalfWalls_rock',
    name: 'cliff_blockSlopeHalfWalls_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockSlopeHalfWalls_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockSlopeHalfWalls_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockSlopeHalfWalls_stone',
    name: 'cliff_blockSlopeHalfWalls_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockSlopeHalfWalls_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockSlopeHalfWalls_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockSlopeWalls_rock',
    name: 'cliff_blockSlopeWalls_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockSlopeWalls_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockSlopeWalls_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockSlopeWalls_stone',
    name: 'cliff_blockSlopeWalls_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockSlopeWalls_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockSlopeWalls_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockSlope_rock',
    name: 'cliff_blockSlope_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockSlope_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockSlope_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_blockSlope_stone',
    name: 'cliff_blockSlope_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_blockSlope_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_blockSlope_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_block_rock',
    name: 'cliff_block_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_block_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_block_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_block_stone',
    name: 'cliff_block_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_block_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_block_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cave_rock',
    name: 'cliff_cave_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cave_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cave_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cave_stone',
    name: 'cliff_cave_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cave_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cave_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerInnerLarge_rock',
    name: 'cliff_cornerInnerLarge_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerInnerLarge_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerInnerLarge_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerInnerLarge_stone',
    name: 'cliff_cornerInnerLarge_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerInnerLarge_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerInnerLarge_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerInnerTop_rock',
    name: 'cliff_cornerInnerTop_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerInnerTop_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerInnerTop_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerInnerTop_stone',
    name: 'cliff_cornerInnerTop_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerInnerTop_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerInnerTop_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerInner_rock',
    name: 'cliff_cornerInner_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerInner_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerInner_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerInner_stone',
    name: 'cliff_cornerInner_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerInner_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerInner_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerLarge_rock',
    name: 'cliff_cornerLarge_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerLarge_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerLarge_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerLarge_stone',
    name: 'cliff_cornerLarge_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerLarge_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerLarge_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerTop_rock',
    name: 'cliff_cornerTop_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerTop_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerTop_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_cornerTop_stone',
    name: 'cliff_cornerTop_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_cornerTop_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_cornerTop_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_corner_rock',
    name: 'cliff_corner_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_corner_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_corner_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_corner_stone',
    name: 'cliff_corner_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_corner_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_corner_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_diagonal_rock',
    name: 'cliff_diagonal_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_diagonal_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_diagonal_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_diagonal_stone',
    name: 'cliff_diagonal_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_diagonal_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_diagonal_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_halfCornerInner_rock',
    name: 'cliff_halfCornerInner_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_halfCornerInner_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_halfCornerInner_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_halfCornerInner_stone',
    name: 'cliff_halfCornerInner_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_halfCornerInner_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_halfCornerInner_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_halfCorner_rock',
    name: 'cliff_halfCorner_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_halfCorner_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_halfCorner_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_halfCorner_stone',
    name: 'cliff_halfCorner_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_halfCorner_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_halfCorner_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_half_rock',
    name: 'cliff_half_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_half_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_half_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_half_stone',
    name: 'cliff_half_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_half_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_half_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_large_rock',
    name: 'cliff_large_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_large_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_large_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_large_stone',
    name: 'cliff_large_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_large_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_large_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_rock',
    name: 'cliff_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_rock_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/cliff_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_stepsCornerInner_rock',
    name: 'cliff_stepsCornerInner_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_stepsCornerInner_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_stepsCornerInner_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_stepsCornerInner_stone',
    name: 'cliff_stepsCornerInner_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_stepsCornerInner_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_stepsCornerInner_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_stepsCorner_rock',
    name: 'cliff_stepsCorner_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_stepsCorner_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_stepsCorner_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_stepsCorner_stone',
    name: 'cliff_stepsCorner_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_stepsCorner_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_stepsCorner_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_steps_rock',
    name: 'cliff_steps_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_steps_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_steps_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_steps_stone',
    name: 'cliff_steps_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_steps_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_steps_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_stone',
    name: 'cliff_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_stone_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/cliff_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_topDiagonal_rock',
    name: 'cliff_topDiagonal_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_topDiagonal_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_topDiagonal_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_topDiagonal_stone',
    name: 'cliff_topDiagonal_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_topDiagonal_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_topDiagonal_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_top_rock',
    name: 'cliff_top_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_top_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_top_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_top_stone',
    name: 'cliff_top_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_top_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_top_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_waterfallTop_rock',
    name: 'cliff_waterfallTop_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_waterfallTop_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_waterfallTop_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_waterfallTop_stone',
    name: 'cliff_waterfallTop_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_waterfallTop_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_waterfallTop_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_waterfall_rock',
    name: 'cliff_waterfall_rock',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_waterfall_rock_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_waterfall_rock.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://cliff_waterfall_stone',
    name: 'cliff_waterfall_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/cliff_waterfall_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/cliff_waterfall_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crop_carrot',
    name: 'crop_carrot',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crop_carrot_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/crop_carrot.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crop_melon',
    name: 'crop_melon',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crop_melon_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/crop_melon.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crop_pumpkin',
    name: 'crop_pumpkin',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crop_pumpkin_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/crop_pumpkin.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crop_turnip',
    name: 'crop_turnip',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crop_turnip_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/crop_turnip.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_bambooStageA',
    name: 'crops_bambooStageA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_bambooStageA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_bambooStageA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_bambooStageB',
    name: 'crops_bambooStageB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_bambooStageB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_bambooStageB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_cornStageA',
    name: 'crops_cornStageA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_cornStageA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_cornStageA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_cornStageB',
    name: 'crops_cornStageB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_cornStageB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_cornStageB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_cornStageC',
    name: 'crops_cornStageC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_cornStageC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_cornStageC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_cornStageD',
    name: 'crops_cornStageD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_cornStageD_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_cornStageD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtDoubleRowCorner',
    name: 'crops_dirtDoubleRowCorner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtDoubleRowCorner_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtDoubleRowCorner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtDoubleRowEnd',
    name: 'crops_dirtDoubleRowEnd',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtDoubleRowEnd_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtDoubleRowEnd.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtDoubleRow',
    name: 'crops_dirtDoubleRow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtDoubleRow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtDoubleRow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtRowCorner',
    name: 'crops_dirtRowCorner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtRowCorner_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtRowCorner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtRowEnd',
    name: 'crops_dirtRowEnd',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtRowEnd_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtRowEnd.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtRow',
    name: 'crops_dirtRow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtRow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtRow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_dirtSingle',
    name: 'crops_dirtSingle',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_dirtSingle_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_dirtSingle.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_leafsStageA',
    name: 'crops_leafsStageA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_leafsStageA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_leafsStageA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_leafsStageB',
    name: 'crops_leafsStageB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_leafsStageB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_leafsStageB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_wheatStageA',
    name: 'crops_wheatStageA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_wheatStageA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_wheatStageA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://crops_wheatStageB',
    name: 'crops_wheatStageB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/crops_wheatStageB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/crops_wheatStageB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_bendCenter',
    name: 'fence_bendCenter',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_bendCenter_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_bendCenter.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_bend',
    name: 'fence_bend',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_bend_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/fence_bend.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_corner',
    name: 'fence_corner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_corner_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/fence_corner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_gate',
    name: 'fence_gate',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_gate_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/fence_gate.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_planksDouble',
    name: 'fence_planksDouble',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_planksDouble_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_planksDouble.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_planks',
    name: 'fence_planks',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_planks_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/fence_planks.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_simpleCenter',
    name: 'fence_simpleCenter',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_simpleCenter_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_simpleCenter.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_simpleDiagonalCenter',
    name: 'fence_simpleDiagonalCenter',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_simpleDiagonalCenter_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_simpleDiagonalCenter.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_simpleDiagonal',
    name: 'fence_simpleDiagonal',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_simpleDiagonal_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_simpleDiagonal.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_simpleHigh',
    name: 'fence_simpleHigh',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_simpleHigh_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_simpleHigh.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_simpleLow',
    name: 'fence_simpleLow',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_simpleLow_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/fence_simpleLow.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://fence_simple',
    name: 'fence_simple',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/fence_simple_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/fence_simple.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_purpleA',
    name: 'flower_purpleA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_purpleA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/flower_purpleA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_purpleB',
    name: 'flower_purpleB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_purpleB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/flower_purpleB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_purpleC',
    name: 'flower_purpleC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_purpleC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/flower_purpleC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_redA',
    name: 'flower_redA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_redA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/flower_redA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_redB',
    name: 'flower_redB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_redB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/flower_redB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_redC',
    name: 'flower_redC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_redC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/flower_redC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_yellowA',
    name: 'flower_yellowA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_yellowA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/flower_yellowA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_yellowB',
    name: 'flower_yellowB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_yellowB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/flower_yellowB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://flower_yellowC',
    name: 'flower_yellowC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/flower_yellowC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/flower_yellowC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://grass',
    name: 'grass',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/grass_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/grass.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://grass_large',
    name: 'grass_large',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/grass_large_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/grass_large.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://grass_leafsLarge',
    name: 'grass_leafsLarge',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/grass_leafsLarge_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/grass_leafsLarge.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://grass_leafs',
    name: 'grass_leafs',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/grass_leafs_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/grass_leafs.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_grass',
    name: 'ground_grass',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_grass_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/ground_grass.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathBendBank',
    name: 'ground_pathBendBank',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathBendBank_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathBendBank.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathBend',
    name: 'ground_pathBend',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathBend_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathBend.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathCornerSmall',
    name: 'ground_pathCornerSmall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathCornerSmall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathCornerSmall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathCorner',
    name: 'ground_pathCorner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathCorner_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathCorner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathCross',
    name: 'ground_pathCross',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathCross_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathCross.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathEndClosed',
    name: 'ground_pathEndClosed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathEndClosed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathEndClosed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathEnd',
    name: 'ground_pathEnd',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathEnd_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathEnd.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathOpen',
    name: 'ground_pathOpen',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathOpen_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathOpen.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathRocks',
    name: 'ground_pathRocks',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathRocks_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathRocks.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathSideOpen',
    name: 'ground_pathSideOpen',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathSideOpen_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathSideOpen.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathSide',
    name: 'ground_pathSide',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathSide_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathSide.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathSplit',
    name: 'ground_pathSplit',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathSplit_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathSplit.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathStraight',
    name: 'ground_pathStraight',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathStraight_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathStraight.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_pathTile',
    name: 'ground_pathTile',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_pathTile_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_pathTile.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverBendBank',
    name: 'ground_riverBendBank',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverBendBank_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverBendBank.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverBend',
    name: 'ground_riverBend',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverBend_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverBend.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverCornerSmall',
    name: 'ground_riverCornerSmall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverCornerSmall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverCornerSmall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverCorner',
    name: 'ground_riverCorner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverCorner_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverCorner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverCross',
    name: 'ground_riverCross',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverCross_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverCross.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverEndClosed',
    name: 'ground_riverEndClosed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverEndClosed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverEndClosed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverEnd',
    name: 'ground_riverEnd',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverEnd_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverEnd.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverOpen',
    name: 'ground_riverOpen',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverOpen_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverOpen.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverRocks',
    name: 'ground_riverRocks',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverRocks_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverRocks.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverSideOpen',
    name: 'ground_riverSideOpen',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverSideOpen_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverSideOpen.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverSide',
    name: 'ground_riverSide',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverSide_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverSide.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverSplit',
    name: 'ground_riverSplit',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverSplit_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverSplit.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverStraight',
    name: 'ground_riverStraight',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverStraight_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverStraight.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://ground_riverTile',
    name: 'ground_riverTile',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/ground_riverTile_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/ground_riverTile.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://hanging_moss',
    name: 'hanging_moss',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/hanging_moss_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/hanging_moss.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://lily_large',
    name: 'lily_large',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/lily_large_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/lily_large.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://lily_small',
    name: 'lily_small',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/lily_small_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/lily_small.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://log',
    name: 'log',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/log_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/log.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://log_large',
    name: 'log_large',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/log_large_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/log_large.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://log_stackLarge',
    name: 'log_stackLarge',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/log_stackLarge_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/log_stackLarge.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://log_stack',
    name: 'log_stack',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/log_stack_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/log_stack.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://mushroom_redGroup',
    name: 'mushroom_redGroup',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/mushroom_redGroup_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/mushroom_redGroup.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://mushroom_redTall',
    name: 'mushroom_redTall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/mushroom_redTall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/mushroom_redTall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://mushroom_red',
    name: 'mushroom_red',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/mushroom_red_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/mushroom_red.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://mushroom_tanGroup',
    name: 'mushroom_tanGroup',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/mushroom_tanGroup_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/mushroom_tanGroup.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://mushroom_tanTall',
    name: 'mushroom_tanTall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/mushroom_tanTall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/mushroom_tanTall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://mushroom_tan',
    name: 'mushroom_tan',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/mushroom_tan_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/mushroom_tan.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_stoneCircle',
    name: 'path_stoneCircle',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_stoneCircle_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/path_stoneCircle.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_stoneCorner',
    name: 'path_stoneCorner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_stoneCorner_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/path_stoneCorner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_stoneEnd',
    name: 'path_stoneEnd',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_stoneEnd_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/path_stoneEnd.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_stone',
    name: 'path_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_stone_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/path_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_woodCorner',
    name: 'path_woodCorner',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_woodCorner_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/path_woodCorner.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_woodEnd',
    name: 'path_woodEnd',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_woodEnd_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/path_woodEnd.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://path_wood',
    name: 'path_wood',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/path_wood_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/path_wood.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_bushDetailed',
    name: 'plant_bushDetailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_bushDetailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_bushDetailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_bushLargeTriangle',
    name: 'plant_bushLargeTriangle',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_bushLargeTriangle_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_bushLargeTriangle.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_bushLarge',
    name: 'plant_bushLarge',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_bushLarge_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_bushLarge.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_bushSmall',
    name: 'plant_bushSmall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_bushSmall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_bushSmall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_bushTriangle',
    name: 'plant_bushTriangle',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_bushTriangle_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_bushTriangle.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_bush',
    name: 'plant_bush',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_bush_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/plant_bush.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_flatShort',
    name: 'plant_flatShort',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_flatShort_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_flatShort.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://plant_flatTall',
    name: 'plant_flatTall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/plant_flatTall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/plant_flatTall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://platform_beach',
    name: 'platform_beach',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/platform_beach_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/platform_beach.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://platform_grass',
    name: 'platform_grass',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/platform_grass_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/platform_grass.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://platform_stone',
    name: 'platform_stone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/platform_stone_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/platform_stone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://pot_large',
    name: 'pot_large',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/pot_large_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/pot_large.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://pot_small',
    name: 'pot_small',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/pot_small_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/pot_small.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_largeA',
    name: 'rock_largeA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_largeA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_largeA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_largeB',
    name: 'rock_largeB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_largeB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_largeB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_largeC',
    name: 'rock_largeC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_largeC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_largeC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_largeD',
    name: 'rock_largeD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_largeD_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_largeD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_largeE',
    name: 'rock_largeE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_largeE_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_largeE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_largeF',
    name: 'rock_largeF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_largeF_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_largeF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallA',
    name: 'rock_smallA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallB',
    name: 'rock_smallB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallC',
    name: 'rock_smallC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallD',
    name: 'rock_smallD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallD_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallE',
    name: 'rock_smallE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallE_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallF',
    name: 'rock_smallF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallF_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallFlatA',
    name: 'rock_smallFlatA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallFlatA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallFlatA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallFlatB',
    name: 'rock_smallFlatB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallFlatB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallFlatB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallFlatC',
    name: 'rock_smallFlatC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallFlatC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallFlatC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallG',
    name: 'rock_smallG',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallG_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallG.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallH',
    name: 'rock_smallH',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallH_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallH.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallI',
    name: 'rock_smallI',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallI_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallI.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallTopA',
    name: 'rock_smallTopA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallTopA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallTopA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_smallTopB',
    name: 'rock_smallTopB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_smallTopB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/rock_smallTopB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallA',
    name: 'rock_tallA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallB',
    name: 'rock_tallB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallC',
    name: 'rock_tallC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallD',
    name: 'rock_tallD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallD_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallE',
    name: 'rock_tallE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallE_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallF',
    name: 'rock_tallF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallF_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallG',
    name: 'rock_tallG',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallG_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallG.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallH',
    name: 'rock_tallH',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallH_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallH.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallI',
    name: 'rock_tallI',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallI_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallI.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://rock_tallJ',
    name: 'rock_tallJ',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/rock_tallJ_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/rock_tallJ.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://sign',
    name: 'sign',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/sign_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/sign.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://statue_block',
    name: 'statue_block',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/statue_block_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/statue_block.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://statue_columnDamaged',
    name: 'statue_columnDamaged',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/statue_columnDamaged_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/statue_columnDamaged.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://statue_column',
    name: 'statue_column',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/statue_column_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/statue_column.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://statue_head',
    name: 'statue_head',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/statue_head_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/statue_head.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://statue_obelisk',
    name: 'statue_obelisk',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/statue_obelisk_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/statue_obelisk.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://statue_ring',
    name: 'statue_ring',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/statue_ring_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/statue_ring.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_largeA',
    name: 'stone_largeA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_largeA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_largeA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_largeB',
    name: 'stone_largeB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_largeB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_largeB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_largeC',
    name: 'stone_largeC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_largeC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_largeC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_largeD',
    name: 'stone_largeD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_largeD_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_largeD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_largeE',
    name: 'stone_largeE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_largeE_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_largeE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_largeF',
    name: 'stone_largeF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_largeF_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_largeF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallA',
    name: 'stone_smallA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallB',
    name: 'stone_smallB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallC',
    name: 'stone_smallC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallD',
    name: 'stone_smallD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallD_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallE',
    name: 'stone_smallE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallE_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallF',
    name: 'stone_smallF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallF_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallFlatA',
    name: 'stone_smallFlatA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallFlatA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallFlatA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallFlatB',
    name: 'stone_smallFlatB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallFlatB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallFlatB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallFlatC',
    name: 'stone_smallFlatC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallFlatC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallFlatC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallG',
    name: 'stone_smallG',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallG_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallG.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallH',
    name: 'stone_smallH',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallH_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallH.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallI',
    name: 'stone_smallI',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallI_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallI.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallTopA',
    name: 'stone_smallTopA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallTopA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallTopA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_smallTopB',
    name: 'stone_smallTopB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_smallTopB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stone_smallTopB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallA',
    name: 'stone_tallA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallA_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallB',
    name: 'stone_tallB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallB_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallC',
    name: 'stone_tallC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallC_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallD',
    name: 'stone_tallD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallD_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallE',
    name: 'stone_tallE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallE_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallF',
    name: 'stone_tallF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallF_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallG',
    name: 'stone_tallG',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallG_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallG.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallH',
    name: 'stone_tallH',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallH_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallH.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallI',
    name: 'stone_tallI',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallI_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallI.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stone_tallJ',
    name: 'stone_tallJ',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stone_tallJ_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stone_tallJ.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_oldTall',
    name: 'stump_oldTall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_oldTall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stump_oldTall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_old',
    name: 'stump_old',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_old_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stump_old.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_roundDetailed',
    name: 'stump_roundDetailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_roundDetailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stump_roundDetailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_round',
    name: 'stump_round',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_round_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stump_round.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_squareDetailedWide',
    name: 'stump_squareDetailedWide',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_squareDetailedWide_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stump_squareDetailedWide.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_squareDetailed',
    name: 'stump_squareDetailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_squareDetailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/stump_squareDetailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://stump_square',
    name: 'stump_square',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/stump_square_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/stump_square.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tent_detailedClosed',
    name: 'tent_detailedClosed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tent_detailedClosed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tent_detailedClosed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tent_detailedOpen',
    name: 'tent_detailedOpen',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tent_detailedOpen_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tent_detailedOpen.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tent_smallClosed',
    name: 'tent_smallClosed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tent_smallClosed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tent_smallClosed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tent_smallOpen',
    name: 'tent_smallOpen',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tent_smallOpen_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tent_smallOpen.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_blocks',
    name: 'tree_blocks',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_blocks_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_blocks.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_blocks_dark',
    name: 'tree_blocks_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_blocks_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_blocks_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_blocks_fall',
    name: 'tree_blocks_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_blocks_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_blocks_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_cone',
    name: 'tree_cone',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_cone_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_cone.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_cone_dark',
    name: 'tree_cone_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_cone_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_cone_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_cone_fall',
    name: 'tree_cone_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_cone_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_cone_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_default',
    name: 'tree_default',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_default_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_default.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_default_dark',
    name: 'tree_default_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_default_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_default_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_default_fall',
    name: 'tree_default_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_default_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_default_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_detailed',
    name: 'tree_detailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_detailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_detailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_detailed_dark',
    name: 'tree_detailed_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_detailed_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_detailed_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_detailed_fall',
    name: 'tree_detailed_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_detailed_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_detailed_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_fat',
    name: 'tree_fat',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_fat_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_fat.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_fat_darkh',
    name: 'tree_fat_darkh',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_fat_darkh_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_fat_darkh.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_fat_fall',
    name: 'tree_fat_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_fat_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_fat_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_oak',
    name: 'tree_oak',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_oak_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_oak.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_oak_dark',
    name: 'tree_oak_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_oak_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_oak_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_oak_fall',
    name: 'tree_oak_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_oak_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_oak_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_palmBend',
    name: 'tree_palmBend',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_palmBend_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_palmBend.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_palmDetailedShort',
    name: 'tree_palmDetailedShort',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_palmDetailedShort_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_palmDetailedShort.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_palmDetailedTall',
    name: 'tree_palmDetailedTall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_palmDetailedTall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_palmDetailedTall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_palmShort',
    name: 'tree_palmShort',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_palmShort_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_palmShort.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_palmTall',
    name: 'tree_palmTall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_palmTall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_palmTall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_palm',
    name: 'tree_palm',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_palm_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_palm.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineDefaultA',
    name: 'tree_pineDefaultA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineDefaultA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineDefaultA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineDefaultB',
    name: 'tree_pineDefaultB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineDefaultB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineDefaultB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineGroundA',
    name: 'tree_pineGroundA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineGroundA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineGroundA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineGroundB',
    name: 'tree_pineGroundB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineGroundB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineGroundB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineRoundA',
    name: 'tree_pineRoundA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineRoundA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineRoundA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineRoundB',
    name: 'tree_pineRoundB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineRoundB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineRoundB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineRoundC',
    name: 'tree_pineRoundC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineRoundC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineRoundC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineRoundD',
    name: 'tree_pineRoundD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineRoundD_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineRoundD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineRoundE',
    name: 'tree_pineRoundE',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineRoundE_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineRoundE.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineRoundF',
    name: 'tree_pineRoundF',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineRoundF_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineRoundF.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineSmallA',
    name: 'tree_pineSmallA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineSmallA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineSmallA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineSmallB',
    name: 'tree_pineSmallB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineSmallB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineSmallB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineSmallC',
    name: 'tree_pineSmallC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineSmallC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineSmallC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineSmallD',
    name: 'tree_pineSmallD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineSmallD_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineSmallD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallA',
    name: 'tree_pineTallA',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallA_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallA.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallA_detailed',
    name: 'tree_pineTallA_detailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallA_detailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallA_detailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallB',
    name: 'tree_pineTallB',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallB_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallB.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallB_detailed',
    name: 'tree_pineTallB_detailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallB_detailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallB_detailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallC',
    name: 'tree_pineTallC',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallC_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallC.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallC_detailed',
    name: 'tree_pineTallC_detailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallC_detailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallC_detailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallD',
    name: 'tree_pineTallD',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallD_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallD.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_pineTallD_detailed',
    name: 'tree_pineTallD_detailed',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_pineTallD_detailed_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_pineTallD_detailed.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_plateau',
    name: 'tree_plateau',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_plateau_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_plateau.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_plateau_dark',
    name: 'tree_plateau_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_plateau_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_plateau_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_plateau_fall',
    name: 'tree_plateau_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_plateau_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_plateau_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_simple',
    name: 'tree_simple',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_simple_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_simple.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_simple_dark',
    name: 'tree_simple_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_simple_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_simple_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_simple_fall',
    name: 'tree_simple_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_simple_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_simple_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_small',
    name: 'tree_small',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_small_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_small.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_small_dark',
    name: 'tree_small_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_small_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_small_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_small_fall',
    name: 'tree_small_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_small_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_small_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_tall',
    name: 'tree_tall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_tall_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_tall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_tall_dark',
    name: 'tree_tall_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_tall_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_tall_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_tall_fall',
    name: 'tree_tall_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_tall_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_tall_fall.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_thin',
    name: 'tree_thin',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_thin_NE.png',
    model3D: 'library/kenney/natureKit-2.1/Models/GLTF format/tree_thin.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_thin_dark',
    name: 'tree_thin_dark',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_thin_dark_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_thin_dark.glb',
    scale: 2.200000000000001,
  },
  {
    id: 'natureKit-2.1://tree_thin_fall',
    name: 'tree_thin_fall',
    icon: 'assets/library/kenney/natureKit-2.1/Isometric/tree_thin_fall_NE.png',
    model3D:
      'library/kenney/natureKit-2.1/Models/GLTF format/tree_thin_fall.glb',
    scale: 2.200000000000001,
  },
];
const platformerkit2Components = [
  {
    id: 'platformerkit-2://arrow',
    name: 'arrow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/arrow_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/arrow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://arrows',
    name: 'arrows',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/arrows_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/arrows.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://barrel',
    name: 'barrel',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/barrel_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/barrel.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCliffCorner',
    name: 'blockCliffCorner',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCliffCorner_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockCliffCorner.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCliff',
    name: 'blockCliff',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCliff_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockCliff.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCornerLarge',
    name: 'blockCornerLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCornerLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockCornerLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCornerSmall',
    name: 'blockCornerSmall',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCornerSmall_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockCornerSmall.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCurveHalf',
    name: 'blockCurveHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCurveHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockCurveHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCurveLow',
    name: 'blockCurveLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCurveLow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockCurveLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockCurve',
    name: 'blockCurve',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockCurve_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockCurve.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockDirtHalf',
    name: 'blockDirtHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockDirtHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockDirtHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockDirtRampHalf',
    name: 'blockDirtRampHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockDirtRampHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockDirtRampHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockDirtRamp',
    name: 'blockDirtRamp',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockDirtRamp_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockDirtRamp.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockDirt',
    name: 'blockDirt',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockDirt_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockDirt.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockEnd',
    name: 'blockEnd',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockEnd_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockEnd.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockHalf',
    name: 'blockHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockHalf_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockHexagonLow',
    name: 'blockHexagonLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockHexagonLow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockHexagonLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockHexagon',
    name: 'blockHexagon',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockHexagon_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockHexagon.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockLarge',
    name: 'blockLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockLarge_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockLevel',
    name: 'blockLevel',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockLevel_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockLevel.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockLong',
    name: 'blockLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockLong_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockMovingLarge',
    name: 'blockMovingLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockMovingLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockMovingLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockMovingRed',
    name: 'blockMovingRed',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockMovingRed_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockMovingRed.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockMoving',
    name: 'blockMoving',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockMoving_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockMoving.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockQuarter',
    name: 'blockQuarter',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockQuarter_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockQuarter.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockRoundedLarge',
    name: 'blockRoundedLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockRoundedLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockRoundedLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockRoundedLong',
    name: 'blockRoundedLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockRoundedLong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockRoundedLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockRoundedLowLong',
    name: 'blockRoundedLowLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockRoundedLowLong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockRoundedLowLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockRoundedLow',
    name: 'blockRoundedLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockRoundedLow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockRoundedLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockRounded',
    name: 'blockRounded',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockRounded_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockRounded.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSlopeHalf',
    name: 'blockSlopeHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSlopeHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSlopeHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSlope',
    name: 'blockSlope',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSlope_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockSlope.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCliffCorner',
    name: 'blockSnowCliffCorner',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCliffCorner_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCliffCorner.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCliff',
    name: 'blockSnowCliff',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCliff_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCliff.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCornerLarge',
    name: 'blockSnowCornerLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCornerLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCornerLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCornerSmall',
    name: 'blockSnowCornerSmall',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCornerSmall_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCornerSmall.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCurveHalf',
    name: 'blockSnowCurveHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCurveHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCurveHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCurveLow',
    name: 'blockSnowCurveLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCurveLow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCurveLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowCurve',
    name: 'blockSnowCurve',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowCurve_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowCurve.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowEnd',
    name: 'blockSnowEnd',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowEnd_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowEnd.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowHalf',
    name: 'blockSnowHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowHexagonLow',
    name: 'blockSnowHexagonLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowHexagonLow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowHexagonLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowHexagon',
    name: 'blockSnowHexagon',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowHexagon_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowHexagon.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowLarge',
    name: 'blockSnowLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowLevel',
    name: 'blockSnowLevel',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowLevel_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowLevel.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowLong',
    name: 'blockSnowLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowLong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowQuarter',
    name: 'blockSnowQuarter',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowQuarter_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowQuarter.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowRoundedLarge',
    name: 'blockSnowRoundedLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowRoundedLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowRoundedLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowRoundedLong',
    name: 'blockSnowRoundedLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowRoundedLong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowRoundedLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowRoundedLowLong',
    name: 'blockSnowRoundedLowLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowRoundedLowLong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowRoundedLowLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowRoundedLow',
    name: 'blockSnowRoundedLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowRoundedLow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowRoundedLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowRounded',
    name: 'blockSnowRounded',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowRounded_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowRounded.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowSlopeHalf',
    name: 'blockSnowSlopeHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowSlopeHalf_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowSlopeHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnowSlope',
    name: 'blockSnowSlope',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnowSlope_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/blockSnowSlope.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://blockSnow',
    name: 'blockSnow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/blockSnow_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/blockSnow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://block',
    name: 'block',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/block_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/block.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://bridgeHalf',
    name: 'bridgeHalf',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/bridgeHalf_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/bridgeHalf.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://bridgeRamp',
    name: 'bridgeRamp',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/bridgeRamp_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/bridgeRamp.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://bridge',
    name: 'bridge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/bridge_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/bridge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://buttonRound',
    name: 'buttonRound',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/buttonRound_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/buttonRound.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://buttonSquare',
    name: 'buttonSquare',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/buttonSquare_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/buttonSquare.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://chest',
    name: 'chest',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/chest_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/chest.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://coinBronze',
    name: 'coinBronze',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/coinBronze_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/coinBronze.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://coinGold',
    name: 'coinGold',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/coinGold_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/coinGold.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://coinSilver',
    name: 'coinSilver',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/coinSilver_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/coinSilver.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://crateItemStrong',
    name: 'crateItemStrong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/crateItemStrong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/crateItemStrong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://crateItem',
    name: 'crateItem',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/crateItem_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/crateItem.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://crateStrong',
    name: 'crateStrong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/crateStrong_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/crateStrong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://crate',
    name: 'crate',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/crate_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/crate.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://doorClosed',
    name: 'doorClosed',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/doorClosed_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/doorClosed.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://doorOpen',
    name: 'doorOpen',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/doorOpen_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/doorOpen.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceBroken',
    name: 'fenceBroken',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceBroken_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/fenceBroken.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceCornerCurved',
    name: 'fenceCornerCurved',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceCornerCurved_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/fenceCornerCurved.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceCorner',
    name: 'fenceCorner',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceCorner_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/fenceCorner.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceLowBroken',
    name: 'fenceLowBroken',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceLowBroken_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/fenceLowBroken.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceLowCornerCurved',
    name: 'fenceLowCornerCurved',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceLowCornerCurved_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/fenceLowCornerCurved.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceLowCorner',
    name: 'fenceLowCorner',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceLowCorner_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/fenceLowCorner.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fenceLow',
    name: 'fenceLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fenceLow_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/fenceLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://fence',
    name: 'fence',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/fence_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/fence.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://flag',
    name: 'flag',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/flag_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/flag.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://flowersLow',
    name: 'flowersLow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/flowersLow_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/flowersLow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://flowers',
    name: 'flowers',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/flowers_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/flowers.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://heart',
    name: 'heart',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/heart_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/heart.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://hedgeCorner',
    name: 'hedgeCorner',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/hedgeCorner_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/hedgeCorner.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://hedge',
    name: 'hedge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/hedge_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/hedge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://jewel',
    name: 'jewel',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/jewel_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/jewel.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://key',
    name: 'key',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/key_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/key.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://ladderBroken',
    name: 'ladderBroken',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/ladderBroken_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/ladderBroken.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://ladderLong',
    name: 'ladderLong',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/ladderLong_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/ladderLong.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://ladder',
    name: 'ladder',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/ladder_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/ladder.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://lever',
    name: 'lever',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/lever_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/lever.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://mushrooms',
    name: 'mushrooms',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/mushrooms_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/mushrooms.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://plant',
    name: 'plant',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/plant_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/plant.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://platform',
    name: 'platform',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/platform_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/platform.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://rocks',
    name: 'rocks',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/rocks_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/rocks.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://saw',
    name: 'saw',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/saw_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/saw.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://sign',
    name: 'sign',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/sign_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/sign.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://spikesHidden',
    name: 'spikesHidden',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/spikesHidden_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/spikesHidden.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://spikesLarge',
    name: 'spikesLarge',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/spikesLarge_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/spikesLarge.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://spikes',
    name: 'spikes',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/spikes_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/spikes.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://treePineSnow',
    name: 'treePineSnow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/treePineSnow_NE.png',
    model3D:
      'library/kenney/platformerkit-2/Models/GLTF format/treePineSnow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://treePine',
    name: 'treePine',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/treePine_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/treePine.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://treeSnow',
    name: 'treeSnow',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/treeSnow_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/treeSnow.glb',
    scale: 2.320000000000001,
  },
  {
    id: 'platformerkit-2://tree',
    name: 'tree',
    icon: 'assets/library/kenney/platformerkit-2/Isometric/tree_NE.png',
    model3D: 'library/kenney/platformerkit-2/Models/GLTF format/tree.glb',
    scale: 2.320000000000001,
  },
];
const racingkit2Components = [
  {
    id: 'racingkit2://raceCarGreen',
    name: 'raceCarGreen',
    icon: 'assets/library/kenney/racingkit2/Isometric/raceCarGreen_E.png',
    model3D: 'library/kenney/racingkit2/Models/GLTF format/raceCarGreen.glb',
    scale: 2.4400000000000013,
  },
  {
    id: 'racingkit2://raceCarOrange',
    name: 'raceCarOrange',
    icon: 'assets/library/kenney/racingkit2/Isometric/raceCarOrange_E.png',
    model3D: 'library/kenney/racingkit2/Models/GLTF format/raceCarOrange.glb',
    scale: 2.4400000000000013,
  },
  {
    id: 'racingkit2://raceCarRed',
    name: 'raceCarRed',
    icon: 'assets/library/kenney/racingkit2/Isometric/raceCarRed_E.png',
    model3D: 'library/kenney/racingkit2/Models/GLTF format/raceCarRed.glb',
    scale: 2.4400000000000013,
  },
  {
    id: 'racingkit2://raceCarWhite',
    name: 'raceCarWhite',
    icon: 'assets/library/kenney/racingkit2/Isometric/raceCarWhite_E.png',
    model3D: 'library/kenney/racingkit2/Models/GLTF format/raceCarWhite.glb',
    scale: 2.4400000000000013,
  },
];
const retroUrbanKitComponents = [
  {
    id: 'retroUrbanKit://balconyLadder_bottom',
    name: 'balconyLadder_bottom',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/balconyLadder_bottom_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/balconyLadder_bottom.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://balconyLadder_top',
    name: 'balconyLadder_top',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/balconyLadder_top_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/balconyLadder_top.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://balcony_typeA',
    name: 'balcony_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/balcony_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/balcony_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailAwning_small',
    name: 'detailAwning_small',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailAwning_small_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailAwning_small.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailAwning_wide',
    name: 'detailAwning_wide',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailAwning_wide_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailAwning_wide.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBarrierStrong_damaged',
    name: 'detailBarrierStrong_damaged',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBarrierStrong_damaged_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBarrierStrong_damaged.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBarrierStrong_typeA',
    name: 'detailBarrierStrong_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBarrierStrong_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBarrierStrong_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBarrierStrong_typeB',
    name: 'detailBarrierStrong_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBarrierStrong_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBarrierStrong_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBarrier_typeA',
    name: 'detailBarrier_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBarrier_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBarrier_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBarrier_typeB',
    name: 'detailBarrier_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBarrier_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBarrier_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBeam',
    name: 'detailBeam',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBeam_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/detailBeam.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBricks_typeA',
    name: 'detailBricks_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBricks_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBricks_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailBricks_typeB',
    name: 'detailBricks_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailBricks_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailBricks_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailCables_typeA',
    name: 'detailCables_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailCables_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailCables_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailCables_typeB',
    name: 'detailCables_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailCables_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailCables_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailDumpster_closed',
    name: 'detailDumpster_closed',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailDumpster_closed_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailDumpster_closed.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailDumpster_open',
    name: 'detailDumpster_open',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailDumpster_open_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailDumpster_open.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailLight_double',
    name: 'detailLight_double',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailLight_double_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailLight_double.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailLight_single',
    name: 'detailLight_single',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailLight_single_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailLight_single.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://detailLight_traffic',
    name: 'detailLight_traffic',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/detailLight_traffic_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/detailLight_traffic.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://door_typeA',
    name: 'door_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/door_typeA_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/door_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://door_typeB',
    name: 'door_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/door_typeB_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/door_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://grass',
    name: 'grass',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/grass_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/grass.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_center',
    name: 'roadAsphalt_center',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_center_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_center.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_cornerInner',
    name: 'roadAsphalt_cornerInner',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_cornerInner_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_cornerInner.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_cornerOuter',
    name: 'roadAsphalt_cornerOuter',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_cornerOuter_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_cornerOuter.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_corner',
    name: 'roadAsphalt_corner',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_corner_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_corner.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_damaged',
    name: 'roadAsphalt_damaged',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_damaged_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_damaged.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_pavement',
    name: 'roadAsphalt_pavement',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_pavement_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_pavement.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_side',
    name: 'roadAsphalt_side',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_side_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_side.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadAsphalt_straight',
    name: 'roadAsphalt_straight',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadAsphalt_straight_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadAsphalt_straight.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_center',
    name: 'roadDirt_center',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_center_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_center.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_cornerInner',
    name: 'roadDirt_cornerInner',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_cornerInner_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_cornerInner.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_cornerOuter',
    name: 'roadDirt_cornerOuter',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_cornerOuter_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_cornerOuter.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_corner',
    name: 'roadDirt_corner',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_corner_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_corner.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_damaged',
    name: 'roadDirt_damaged',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_damaged_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_damaged.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_pavement',
    name: 'roadDirt_pavement',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_pavement_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_pavement.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_side',
    name: 'roadDirt_side',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_side_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_side.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_straight',
    name: 'roadDirt_straight',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_straight_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_straight.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roadDirt_tile',
    name: 'roadDirt_tile',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roadDirt_tile_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roadDirt_tile.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roofMetal_poles',
    name: 'roofMetal_poles',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roofMetal_poles_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roofMetal_poles.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roofMetal_typeA',
    name: 'roofMetal_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roofMetal_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roofMetal_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://roofMetal_typeB',
    name: 'roofMetal_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/roofMetal_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/roofMetal_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://scaffolding_poles',
    name: 'scaffolding_poles',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/scaffolding_poles_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/scaffolding_poles.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://scaffolding_structure',
    name: 'scaffolding_structure',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/scaffolding_structure_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/scaffolding_structure.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://treePine_large',
    name: 'treePine_large',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/treePine_large_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/treePine_large.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://treePine_small',
    name: 'treePine_small',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/treePine_small_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/treePine_small.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://tree_large',
    name: 'tree_large',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/tree_large_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/tree_large.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://tree_shrub',
    name: 'tree_shrub',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/tree_shrub_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/tree_shrub.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://tree_small',
    name: 'tree_small',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/tree_small_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/tree_small.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://truck_flat',
    name: 'truck_flat',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/truck_flat_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/truck_flat.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://truck_green',
    name: 'truck_green',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/truck_green_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/truck_green.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://truck_grey',
    name: 'truck_grey',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/truck_grey_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/truck_grey.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA',
    name: 'wallA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_cornerPainted',
    name: 'wallA_cornerPainted',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_cornerPainted_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_cornerPainted.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_corner',
    name: 'wallA_corner',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_corner_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_corner.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_detailPainted',
    name: 'wallA_detailPainted',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_detailPainted_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_detailPainted.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_detail',
    name: 'wallA_detail',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_detail_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_detail.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_door',
    name: 'wallA_door',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_door_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_door.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_flatGarage',
    name: 'wallA_flatGarage',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_flatGarage_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_flatGarage.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_flatPainted',
    name: 'wallA_flatPainted',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_flatPainted_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_flatPainted.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_flatWindow',
    name: 'wallA_flatWindow',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_flatWindow_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_flatWindow.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_flat',
    name: 'wallA_flat',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_flat_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_flat.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_garage',
    name: 'wallA_garage',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_garage_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_garage.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_lowPainted',
    name: 'wallA_lowPainted',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_lowPainted_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_lowPainted.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_low',
    name: 'wallA_low',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_low_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_low.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_open',
    name: 'wallA_open',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_open_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_open.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_painted',
    name: 'wallA_painted',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_painted_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_painted.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_roofDetailed',
    name: 'wallA_roofDetailed',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_roofDetailed_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_roofDetailed.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_roofSlantDetailed',
    name: 'wallA_roofSlantDetailed',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_roofSlantDetailed_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_roofSlantDetailed.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_roofSlant',
    name: 'wallA_roofSlant',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_roofSlant_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallA_roofSlant.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_roof',
    name: 'wallA_roof',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_roof_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_roof.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallA_window',
    name: 'wallA_window',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallA_window_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallA_window.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB',
    name: 'wallB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_door',
    name: 'wallB_door',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_door_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB_door.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_flatGarage',
    name: 'wallB_flatGarage',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_flatGarage_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallB_flatGarage.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_flatWindow',
    name: 'wallB_flatWindow',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_flatWindow_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallB_flatWindow.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_flat',
    name: 'wallB_flat',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_flat_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB_flat.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_garage',
    name: 'wallB_garage',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_garage_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB_garage.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_open',
    name: 'wallB_open',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_open_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB_open.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_roofDetailed',
    name: 'wallB_roofDetailed',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_roofDetailed_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallB_roofDetailed.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_roofSlantDetailed',
    name: 'wallB_roofSlantDetailed',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_roofSlantDetailed_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallB_roofSlantDetailed.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_roofSlant',
    name: 'wallB_roofSlant',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_roofSlant_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallB_roofSlant.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_roof',
    name: 'wallB_roof',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_roof_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB_roof.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallB_window',
    name: 'wallB_window',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallB_window_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallB_window.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallBroken_typeA',
    name: 'wallBroken_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallBroken_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallBroken_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallBroken_typeB',
    name: 'wallBroken_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallBroken_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallBroken_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallC_flatLow',
    name: 'wallC_flatLow',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallC_flatLow_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallC_flatLow.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallC_flat',
    name: 'wallC_flat',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallC_flat_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallC_flat.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallFence',
    name: 'wallFence',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallFence_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wallFence.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallSteps_typeA',
    name: 'wallSteps_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallSteps_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallSteps_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wallSteps_typeB',
    name: 'wallSteps_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wallSteps_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/wallSteps_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wall_typeA',
    name: 'wall_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wall_typeA_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wall_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://wall_typeB',
    name: 'wall_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/wall_typeB_NE.png',
    model3D: 'library/kenney/retroUrbanKit/Models/GLTF format/wall_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://windowSmall_typeA',
    name: 'windowSmall_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/windowSmall_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/windowSmall_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://windowSmall_typeB',
    name: 'windowSmall_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/windowSmall_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/windowSmall_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://windowWide_typeA',
    name: 'windowWide_typeA',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/windowWide_typeA_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/windowWide_typeA.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://windowWide_typeB',
    name: 'windowWide_typeB',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/windowWide_typeB_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/windowWide_typeB.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://windowWide_typeC',
    name: 'windowWide_typeC',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/windowWide_typeC_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/windowWide_typeC.glb',
    scale: 2.5600000000000014,
  },
  {
    id: 'retroUrbanKit://windowWide_typeD',
    name: 'windowWide_typeD',
    icon: 'assets/library/kenney/retroUrbanKit/Isometric/windowWide_typeD_NE.png',
    model3D:
      'library/kenney/retroUrbanKit/Models/GLTF format/windowWide_typeD.glb',
    scale: 2.5600000000000014,
  },
];
const spacekit2Components = [
  {
    id: 'spacekit-2://alien',
    name: 'alien',
    icon: 'assets/library/kenney/spacekit-2/Isometric/alien_E.png',
    model3D: 'library/kenney/spacekit-2/Models/GLTF format/alien.glb',
    scale: 2.6800000000000015,
  },
  {
    id: 'spacekit-2://astronautA',
    name: 'astronautA',
    icon: 'assets/library/kenney/spacekit-2/Isometric/astronautA_E.png',
    model3D: 'library/kenney/spacekit-2/Models/GLTF format/astronautA.glb',
    scale: 2.6800000000000015,
  },
  {
    id: 'spacekit-2://astronautB',
    name: 'astronautB',
    icon: 'assets/library/kenney/spacekit-2/Isometric/astronautB_E.png',
    model3D: 'library/kenney/spacekit-2/Models/GLTF format/astronautB.glb',
    scale: 2.6800000000000015,
  },
];
const survivalkit10Components = [
  {
    id: 'survival-kit-1.0://bedrollFrame',
    name: 'bedrollFrame',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollFrame_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/bedrollFrame.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://bedrollPacked',
    name: 'bedrollPacked',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollPacked_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/bedrollPacked.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://bedroll',
    name: 'bedroll',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedroll_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/bedroll.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://campfire',
    name: 'campfire',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/campfire_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/campfire.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://chest',
    name: 'chest',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/chest_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/chest.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://fenceFortified',
    name: 'fenceFortified',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fenceFortified_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/fenceFortified.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://fence',
    name: 'fence',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fence_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/fence.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://floor',
    name: 'floor',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/floor_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/floor.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://grassLarge',
    name: 'grassLarge',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grassLarge_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/grassLarge.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://grass',
    name: 'grass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grass_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/grass.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://resourceStone',
    name: 'resourceStone',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceStone_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/resourceStone.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://resourceWood',
    name: 'resourceWood',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceWood_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/resourceWood.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://rockA',
    name: 'rockA',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockA_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockA.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://rockB',
    name: 'rockB',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockB_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockB.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://rockC',
    name: 'rockC',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockC_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockC.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://rockFlatGrass',
    name: 'rockFlatGrass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlatGrass_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/rockFlatGrass.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://rockFlat',
    name: 'rockFlat',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlat_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockFlat.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://signpost',
    name: 'signpost',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/signpost_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/signpost.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://structureBase',
    name: 'structureBase',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureBase_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureBase.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://structureCloth',
    name: 'structureCloth',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureCloth_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureCloth.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://structureRoof',
    name: 'structureRoof',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureRoof_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureRoof.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://structure',
    name: 'structure',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structure_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/structure.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://tentClosed',
    name: 'tentClosed',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentClosed_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/tentClosed.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://tentHalf',
    name: 'tentHalf',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentHalf_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tentHalf.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://tent',
    name: 'tent',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tent_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tent.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://toolAxe',
    name: 'toolAxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolAxe_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/toolAxe.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://toolHoe',
    name: 'toolHoe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolHoe_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/toolHoe.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://toolPickaxe',
    name: 'toolPickaxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolPickaxe_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/toolPickaxe.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://treeFall',
    name: 'treeFall',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/treeFall_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/treeFall.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://tree',
    name: 'tree',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tree_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tree.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://workbenchAnvil',
    name: 'workbenchAnvil',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchAnvil_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/workbenchAnvil.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://workbenchGrind',
    name: 'workbenchGrind',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchGrind_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/workbenchGrind.glb',
    scale: 2.8000000000000016,
  },
  {
    id: 'survival-kit-1.0://workbench',
    name: 'workbench',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbench_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/workbench.glb',
    scale: 2.8000000000000016,
  },
];
const towerdefensekit1Components = [
  {
    id: 'tower-defense-kit-1://detail_crystalLarge',
    name: 'detail_crystalLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_crystalLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_crystalLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_crystal',
    name: 'detail_crystal',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_crystal_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_crystal.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_dirtLarge',
    name: 'detail_dirtLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_dirtLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_dirtLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_dirt',
    name: 'detail_dirt',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_dirt_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_dirt.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_rocksLarge',
    name: 'detail_rocksLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_rocksLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_rocksLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_rocks',
    name: 'detail_rocks',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_rocks_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_rocks.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_treeLarge',
    name: 'detail_treeLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_treeLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_treeLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://detail_tree',
    name: 'detail_tree',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/detail_tree_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/detail_tree.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoGreenWeapon',
    name: 'enemy_ufoGreenWeapon',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoGreenWeapon_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoGreenWeapon.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoGreen',
    name: 'enemy_ufoGreen',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoGreen_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoGreen.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoPurpleWeapon',
    name: 'enemy_ufoPurpleWeapon',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoPurpleWeapon_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoPurpleWeapon.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoPurple',
    name: 'enemy_ufoPurple',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoPurple_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoPurple.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoRedWeapon',
    name: 'enemy_ufoRedWeapon',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoRedWeapon_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoRedWeapon.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoRed',
    name: 'enemy_ufoRed',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoRed_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoRed.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoYellowWeapon',
    name: 'enemy_ufoYellowWeapon',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoYellowWeapon_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoYellowWeapon.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://enemy_ufoYellow',
    name: 'enemy_ufoYellow',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/enemy_ufoYellow_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/enemy_ufoYellow.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_crystalLarge',
    name: 'snow_detail_crystalLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_crystalLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_crystalLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_crystal',
    name: 'snow_detail_crystal',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_crystal_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_crystal.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_dirtLarge',
    name: 'snow_detail_dirtLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_dirtLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_dirtLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_dirt',
    name: 'snow_detail_dirt',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_dirt_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_dirt.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_rocksLarge',
    name: 'snow_detail_rocksLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_rocksLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_rocksLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_rocks',
    name: 'snow_detail_rocks',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_rocks_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_rocks.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_treeLarge',
    name: 'snow_detail_treeLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_treeLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_treeLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_detail_tree',
    name: 'snow_detail_tree',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_detail_tree_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_detail_tree.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile',
    name: 'snow_tile',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_bump',
    name: 'snow_tile_bump',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_bump_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_bump.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_cornerInner',
    name: 'snow_tile_cornerInner',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_cornerInner_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_cornerInner.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_cornerLarge',
    name: 'snow_tile_cornerLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_cornerLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_cornerLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_cornerOuter',
    name: 'snow_tile_cornerOuter',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_cornerOuter_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_cornerOuter.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_cornerRound',
    name: 'snow_tile_cornerRound',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_cornerRound_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_cornerRound.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_cornerSquare',
    name: 'snow_tile_cornerSquare',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_cornerSquare_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_cornerSquare.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_crossing',
    name: 'snow_tile_crossing',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_crossing_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_crossing.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_crystal',
    name: 'snow_tile_crystal',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_crystal_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_crystal.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_endRoundSpawn',
    name: 'snow_tile_endRoundSpawn',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_endRoundSpawn_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_endRoundSpawn.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_endRound',
    name: 'snow_tile_endRound',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_endRound_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_endRound.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_end',
    name: 'snow_tile_end',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_end_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_end.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_hill',
    name: 'snow_tile_hill',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_hill_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_hill.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverBridge',
    name: 'snow_tile_riverBridge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverBridge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverBridge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverCorner',
    name: 'snow_tile_riverCorner',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverCorner_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverCorner.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverFall',
    name: 'snow_tile_riverFall',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverFall_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverFall.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverSlopeLarge',
    name: 'snow_tile_riverSlopeLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverSlopeLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverSlopeLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverSlope',
    name: 'snow_tile_riverSlope',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverSlope_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverSlope.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverStraight',
    name: 'snow_tile_riverStraight',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverStraight_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverStraight.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_riverTransition',
    name: 'snow_tile_riverTransition',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_riverTransition_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_riverTransition.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_rock',
    name: 'snow_tile_rock',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_rock_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_rock.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_slope',
    name: 'snow_tile_slope',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_slope_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_slope.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_spawnRound',
    name: 'snow_tile_spawnRound',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_spawnRound_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_spawnRound.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_spawn',
    name: 'snow_tile_spawn',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_spawn_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_spawn.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_split',
    name: 'snow_tile_split',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_split_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_split.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_straightHillLarge',
    name: 'snow_tile_straightHillLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_straightHillLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_straightHillLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_straightHill',
    name: 'snow_tile_straightHill',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_straightHill_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_straightHill.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_straight',
    name: 'snow_tile_straight',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_straight_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_straight.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_transition',
    name: 'snow_tile_transition',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_transition_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_transition.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_treeDouble',
    name: 'snow_tile_treeDouble',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_treeDouble_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_treeDouble.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_treeQuad',
    name: 'snow_tile_treeQuad',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_treeQuad_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_treeQuad.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_tree',
    name: 'snow_tile_tree',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_tree_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_tree.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_wideCorner',
    name: 'snow_tile_wideCorner',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_wideCorner_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_wideCorner.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_wideSplit',
    name: 'snow_tile_wideSplit',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_wideSplit_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_wideSplit.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_wideStraight',
    name: 'snow_tile_wideStraight',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_wideStraight_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_wideStraight.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_tile_wideTransition',
    name: 'snow_tile_wideTransition',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_tile_wideTransition_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_tile_wideTransition.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_woodStructure',
    name: 'snow_woodStructure',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_woodStructure_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_woodStructure.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://snow_woodStructure_high',
    name: 'snow_woodStructure_high',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/snow_woodStructure_high_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/snow_woodStructure_high.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile',
    name: 'tile',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_E.png',
    model3D: 'library/kenney/tower-defense-kit-1/Models/GLTF format/tile.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_bump',
    name: 'tile_bump',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_bump_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_bump.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_cornerInner',
    name: 'tile_cornerInner',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_cornerInner_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_cornerInner.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_cornerLarge',
    name: 'tile_cornerLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_cornerLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_cornerLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_cornerOuter',
    name: 'tile_cornerOuter',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_cornerOuter_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_cornerOuter.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_cornerRound',
    name: 'tile_cornerRound',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_cornerRound_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_cornerRound.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_cornerSquare',
    name: 'tile_cornerSquare',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_cornerSquare_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_cornerSquare.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_crossing',
    name: 'tile_crossing',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_crossing_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_crossing.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_crystal',
    name: 'tile_crystal',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_crystal_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_crystal.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_dirtHigh',
    name: 'tile_dirtHigh',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_dirtHigh_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_dirtHigh.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_dirt',
    name: 'tile_dirt',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_dirt_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_dirt.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_endRoundSpawn',
    name: 'tile_endRoundSpawn',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_endRoundSpawn_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_endRoundSpawn.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_endRound',
    name: 'tile_endRound',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_endRound_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_endRound.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_endSpawn',
    name: 'tile_endSpawn',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_endSpawn_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_endSpawn.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_end',
    name: 'tile_end',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_end_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_end.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_hill',
    name: 'tile_hill',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_hill_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_hill.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverBridge',
    name: 'tile_riverBridge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverBridge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverBridge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverCorner',
    name: 'tile_riverCorner',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverCorner_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverCorner.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverFall',
    name: 'tile_riverFall',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverFall_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverFall.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverSlopeLarge',
    name: 'tile_riverSlopeLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverSlopeLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverSlopeLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverSlope',
    name: 'tile_riverSlope',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverSlope_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverSlope.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverStraight',
    name: 'tile_riverStraight',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverStraight_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverStraight.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_riverTransition',
    name: 'tile_riverTransition',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_riverTransition_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_riverTransition.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_rock',
    name: 'tile_rock',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_rock_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_rock.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_slope',
    name: 'tile_slope',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_slope_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_slope.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_spawnRound',
    name: 'tile_spawnRound',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_spawnRound_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_spawnRound.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_spawn',
    name: 'tile_spawn',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_spawn_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_spawn.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_split',
    name: 'tile_split',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_split_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_split.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_straightHillLarge',
    name: 'tile_straightHillLarge',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_straightHillLarge_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_straightHillLarge.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_straightHill',
    name: 'tile_straightHill',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_straightHill_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_straightHill.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_straight',
    name: 'tile_straight',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_straight_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_straight.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_transition',
    name: 'tile_transition',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_transition_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_transition.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_treeDouble',
    name: 'tile_treeDouble',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_treeDouble_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_treeDouble.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_treeQuad',
    name: 'tile_treeQuad',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_treeQuad_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_treeQuad.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_tree',
    name: 'tile_tree',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_tree_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_tree.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_wideCorner',
    name: 'tile_wideCorner',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_wideCorner_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_wideCorner.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_wideSplit',
    name: 'tile_wideSplit',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_wideSplit_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_wideSplit.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_wideStraight',
    name: 'tile_wideStraight',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_wideStraight_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_wideStraight.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://tile_wideTransition',
    name: 'tile_wideTransition',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/tile_wideTransition_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/tile_wideTransition.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_base',
    name: 'towerRound_base',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_base_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_base.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_bottomA',
    name: 'towerRound_bottomA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_bottomA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_bottomA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_bottomB',
    name: 'towerRound_bottomB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_bottomB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_bottomB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_bottomC',
    name: 'towerRound_bottomC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_bottomC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_bottomC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_crystals',
    name: 'towerRound_crystals',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_crystals_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_crystals.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_middleA',
    name: 'towerRound_middleA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_middleA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_middleA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_middleB',
    name: 'towerRound_middleB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_middleB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_middleB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_middleC',
    name: 'towerRound_middleC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_middleC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_middleC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_roofA',
    name: 'towerRound_roofA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_roofA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_roofA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_roofB',
    name: 'towerRound_roofB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_roofB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_roofB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_roofC',
    name: 'towerRound_roofC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_roofC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_roofC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_sampleA',
    name: 'towerRound_sampleA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_sampleA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_sampleA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_sampleB',
    name: 'towerRound_sampleB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_sampleB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_sampleB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_sampleC',
    name: 'towerRound_sampleC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_sampleC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_sampleC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_sampleD',
    name: 'towerRound_sampleD',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_sampleD_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_sampleD.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_sampleE',
    name: 'towerRound_sampleE',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_sampleE_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_sampleE.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_sampleF',
    name: 'towerRound_sampleF',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_sampleF_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_sampleF.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_topA',
    name: 'towerRound_topA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_topA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_topA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_topB',
    name: 'towerRound_topB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_topB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_topB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerRound_topC',
    name: 'towerRound_topC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerRound_topC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerRound_topC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_bottomA',
    name: 'towerSquare_bottomA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_bottomA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_bottomA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_bottomB',
    name: 'towerSquare_bottomB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_bottomB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_bottomB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_bottomC',
    name: 'towerSquare_bottomC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_bottomC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_bottomC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_middleA',
    name: 'towerSquare_middleA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_middleA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_middleA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_middleB',
    name: 'towerSquare_middleB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_middleB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_middleB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_middleC',
    name: 'towerSquare_middleC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_middleC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_middleC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_roofA',
    name: 'towerSquare_roofA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_roofA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_roofA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_roofB',
    name: 'towerSquare_roofB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_roofB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_roofB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_roofC',
    name: 'towerSquare_roofC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_roofC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_roofC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_sampleA',
    name: 'towerSquare_sampleA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_sampleA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_sampleA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_sampleB',
    name: 'towerSquare_sampleB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_sampleB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_sampleB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_sampleC',
    name: 'towerSquare_sampleC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_sampleC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_sampleC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_sampleD',
    name: 'towerSquare_sampleD',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_sampleD_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_sampleD.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_sampleE',
    name: 'towerSquare_sampleE',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_sampleE_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_sampleE.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_sampleF',
    name: 'towerSquare_sampleF',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_sampleF_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_sampleF.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_topA',
    name: 'towerSquare_topA',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_topA_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_topA.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_topB',
    name: 'towerSquare_topB',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_topB_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_topB.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://towerSquare_topC',
    name: 'towerSquare_topC',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/towerSquare_topC_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/towerSquare_topC.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://weapon_ballista',
    name: 'weapon_ballista',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/weapon_ballista_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/weapon_ballista.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://weapon_blaster',
    name: 'weapon_blaster',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/weapon_blaster_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/weapon_blaster.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://weapon_cannon',
    name: 'weapon_cannon',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/weapon_cannon_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/weapon_cannon.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://weapon_catapult',
    name: 'weapon_catapult',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/weapon_catapult_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/weapon_catapult.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://woodStructure',
    name: 'woodStructure',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/woodStructure_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/woodStructure.glb',
    scale: 2.9200000000000017,
  },
  {
    id: 'tower-defense-kit-1://woodStructure_high',
    name: 'woodStructure_high',
    icon: 'assets/library/kenney/tower-defense-kit-1/Isometric/woodStructure_high_E.png',
    model3D:
      'library/kenney/tower-defense-kit-1/Models/GLTF format/woodStructure_high.glb',
    scale: 2.9200000000000017,
  },
];

export const kenneyLibrary: Library[] = [
  { name: 'kenney/blasterkit', components: blasterkitComponents },
  { name: 'kenney/carkit-1.4', components: carkit14Components },
  { name: 'kenney/city-kit-urban-1', components: citykiturban1Components },
  { name: 'kenney/citykitroads', components: citykitroadsComponents },
  {
    name: 'kenney/fantasy-town-kit-1.0',
    components: fantasytownkit10Components,
  },
  { name: 'kenney/graveyardkit-3', components: graveyardkit3Components },
  { name: 'kenney/hexagonkit-1', components: hexagonkit1Components },
  { name: 'kenney/holidaykit-2', components: holidaykit2Components },
  // { name: 'kenney/minigolf-kit-2.0', components: minigolfkit20Components },
  // { name: 'kenney/natureKit-2.1', components: natureKit21Components },
  // { name: 'kenney/platformerkit-2', components: platformerkit2Components },
  // { name: 'kenney/racingkit2', components: racingkit2Components },
  // { name: 'kenney/retroUrbanKit', components: retroUrbanKitComponents },
  // { name: 'kenney/spacekit-2', components: spacekit2Components },
  // { name: 'kenney/survival-kit-1.0', components: survivalkit10Components },
  // {
  //   name: 'kenney/tower-defense-kit-1',
  //   components: towerdefensekit1Components,
  // },
];
