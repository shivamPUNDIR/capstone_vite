// export let graph = [
//   [1], // 0
//   [0, 2, 16], // 1
//   [1, 3], // 2
//   [2, 4], // 3
//   [3, 5], // 4
//   [4, 6], // 5
//   [5, 7], // 6
//   [6, 8], // 7
//   [7, 9, 23], // 8
//   [8, 10, 40], //9
//   [9, 11], //10
//   [10, 12], //11
//   [11, 13], //12
//   [12, 14], //13
//   [13, 15], //14
//   [14, 24], //15,
//   [1, 17], //16 to image 1 diversion
//   [16, 18], //17
//   [17, 19], //18
//   [18, 20], //19
//   [19, 21], //20
//   [20, 22], //21
//   [21, 23], //22
//   [22, 8], //23
//   [15, 25], //24
//   [24, 26], //25
//   [25, 27, 30, 42], //26 junction lib
//   [25, 28], //27
//   [27, 29], //28
//   [28], //29
//   [26, 31], //30
//   [30, 32], //31,
//   [31, 33], //32
//   [32, 34], //33
//   [33, 35], //34
//   [34, 36], //35
//   [35, 37], //36
//   [36, 38], //37
//   [37, 39], //38
//   [38, 40], //39
//   [39, 41], //40
//   [40, 9], //41
//   [26, 43], //42
//   [42, 44, 46], //43
//   [43, 45], //44
//   [44], //45
//   [43, 47], //46
//   [46], //47
// ];
// //                  0       1      2       3       4       5      6       7       8       9    10


// export let hotspot_data = [
//   //0st image hotspot
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 170,
//       name: "1-1",
//       lat: 30.352631,
//       lng: 76.371803,
//     },
//   ],
//   //1nd image hotspot
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 0,
//       name: "2-1",
//       lat: 30.352631,
//       lng: 76.371813,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 170,
//       name: "2-2",
//       lat: 30.352631,
//       lng: 76.371813,
//     },
//     {
//       type: "custom",
//       pitch: -5,
//       yaw: 195,
//       name: "2-2",
//       lat: 30.352631,
//       lng: 76.371813,
//     },
//   ],
//   //2rd image hotspot
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "3-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "3-2",
//     },
//   ],
//   //3th image
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "3-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "3-2",
//     },
//   ],
//   //4th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "4-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "4-2",
//     },
//   ],
//   //5th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //6th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //7th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //8th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 280,
//       name: "5-2",
//     },
//   ],
//   //9th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//       reverse: false,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//       reverse: false,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -50,
//       name: "5-2",
//       reverse: false,
//     },
//   ],
//   //10th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //11th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //12th
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //13
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //14
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //15
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//       reverse: false,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 210,
//       name: "5-2",
//     },
//   ],
//   //16 linked to image 1
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 195,
//       name: "5-2",
//     },
//   ],
//   //17
//   [
//     {
//       type: "custom",
//       pitch: -20,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -20,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //18
//   [
//     {
//       type: "custom",
//       pitch: -20,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //19
//   [
//     {
//       type: "custom",
//       pitch: -20,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 150,
//       name: "5-2",
//     },
//   ],
//   //20
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //21
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 10,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 150,
//       name: "5-2",
//     },
//   ],
//   //22
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 140,
//       name: "5-2",
//     },
//   ],
//   //23

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//   ],
//   //24

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 175,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 5,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //25

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 175,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -2,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //26

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -100,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 98,
//       name: "5-2",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-2",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -10,
//       name: "5-1",
//     },
//   ],
//   //27

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 200,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -15,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //28

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 170,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 15,
//       name: "5-2",
//       reverse: true,
//     },
//   ],
//   //29

//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -165,
//       name: "5-1",
//       reverse: true,
//     },
//   ],
//   //30
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -65,
//       name: "5-1",
//       plus: 30,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 90,
//       name: "5-2",
//     },
//   ],
//   //31
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -80,
//       name: "5-1",
//       plus: 30,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 90,
//       name: "5-2",
//     },
//   ],
//   //32
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -80,
//       name: "5-1",
//       plus: 30,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 90,
//       name: "5-2",
//     },
//   ],
//   //33
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -5,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -190,
//       name: "5-2",
//     },
//   ],
//   //34
//   [
//     {
//       type: "custom",
//       pitch: -20,
//       yaw: 100,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -100,
//       name: "5-2",
//     },
//   ],
//   //35
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -100,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 100,
//       name: "5-1",
//     },
//   ],
//   //36
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -100,
//       name: "5-1",
//       // reverse: true
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//     },
//   ],
//   //37
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 10,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//     },
//   ],
//   //38
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -10,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//     },
//   ],
//   //39
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -10,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//     },
//   ],
//   //40
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 100,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -100,
//       name: "5-1",
//     },
//   ],
//   //41
//   [
//     {
//       type: "custom",
//       pitch: -30,
//       yaw: 0,
//       name: "5-1",
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 240,
//       name: "5-1",
//     },
//   ],
//   //42
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 200,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 0,
//       name: "5-1",
//     },
//   ],
//   //43
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 200,
//       name: "5-1",
//       reverse: true,
//     },
//     //cos
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 80,
//       name: "5-1",
//     },
//     //frwd
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -10,
//       name: "5-1",
//     },
//   ],
//   //44 cos -1
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 200,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: -20,
//       name: "5-1",
//     },
//   ],
//   //45 cos -2
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 80,
//       name: "5-1",
//       name: "5-1",
//     },
//   ],
//   //46
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 0,
//       name: "5-1",
//     },
//   ],
//   [
//     {
//       type: "custom",
//       pitch: -10,
//       yaw: 180,
//       name: "5-1",
//       reverse: true,
//     },
//   ],
// ];

export let graph = [
  [1], // 0
  [0, 2, 16], // 1
  [1, 3], // 2
  [2, 4], // 3
  [3, 5], // 4
  [4, 6], // 5
  [5, 7], // 6
  [6, 8], // 7
  [7, 9, 23], // 8
  [8, 10, 40], //9
  [9, 11], //10
  [10, 12], //11
  [11, 13], //12
  [12, 14], //13
  [13, 15], //14
  [14, 24], //15,
  [1, 17], //16 to image 1 diversion
  [16, 18], //17
  [17, 19], //18
  [18, 20], //19
  [19, 21], //20
  [20, 22], //21
  [21, 23], //22
  [22, 8], //23
  [15, 25], //24
  [24, 26], //25
  [25, 27, 30, 42], //26 junction lib
  [25, 28], //27
  [27, 29], //28
  [28], //29
  [26, 31], //30
  [30, 32], //31,
  [31, 33], //32
  [32, 34], //33
  [33, 35], //34
  [34, 36], //35
  [35, 37], //36
  [36, 38], //37
  [37, 39], //38
  [38, 40], //39
  [39, 41], //40
  [40, 9], //41
  [26, 43], //42
  [42, 44, 46], //43
  [43, 45], //44
  [44], //45
  [43, 47], //46
  [46], //47
];
//                  0       1      2       3       4       5      6       7       8       9    10


export let hotspot_data = [
  //0st image hotspot
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 170,
      name: "1-1",
      lat: 30.352631,
      lng: 76.371803,
    },
  ],
  //1nd image hotspot
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 0,
      name: "2-1",
      lat: 30.352631,
      lng: 76.371803,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 170,
      name: "2-2",
      lat: 30.352631,
      lng: 76.371803,
    },
    {
      type: "custom",
      pitch: -5,
      yaw: 195,
      name: "2-2",
      lat: 30.352631,
      lng: 76.371803,
    },
  ],


  //2rd image hotspot
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "3-1",
      lat: 30.352631,
      lng: 76.371803,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "3-2",
      lat: 30.352631,
      lng: 76.371803,
    },
  ],
  //3th image
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "3-1",
      lat: 30.352631,
      lng: 76.371803,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "3-2",
      lat: 30.352631,
      lng: 76.371803,
    },
  ],
  //4th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "4-1",
      lat: 30.351955,
      lng: 76.370811,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "4-2",
      lat: 30.351955,
      lng: 76.370811,
    },
  ],
  //5th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.351955,
      lng: 76.370811,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.351955,
      lng: 76.370811,
    },
  ],
  //6th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.351955,
      lng: 76.370811,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.351955,
      lng: 76.370811,
    },
  ],
  //7th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.351955,
      lng: 76.370811,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.351955,
      lng: 76.370811,
    },
  ],
  //8th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.351955,
      lng: 76.370811,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.351955,
      lng: 76.370811,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 280,
      name: "5-2",
      lat: 30.351955,
      lng: 76.370811,
    },
  ],
  //9th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      reverse: false,
      lat: 30.35195,
      lng: 76.370407,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      reverse: false,
      lat: 30.35195,
      lng: 76.370407,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -50,
      name: "5-2",
      reverse: false,
      lat: 30.35195,
      lng: 76.370407,
    },
  ],
  //10th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.351534,
      lng: 76.369308,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-2",
      reverse: true,
      lat: 30.351534,
      lng: 76.369308,
    },
  ],
  //11th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.351439,
      lng: 76.367867,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-2",
      reverse: true,
      lat: 30.351439,
      lng: 76.367867,
    },
  ],
  //12th
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.351439,
      lng: 76.367867,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-2",
      reverse: true,
      lat: 30.351439,
      lng: 76.367867,
    },
  ],
  //13
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.351564,
      lng: 76.36644,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-2",
      reverse: true,
      lat: 30.351564,
      lng: 76.36644,
    },
  ],
  //14
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.351553,
      lng: 76.366386,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-2",
      reverse: true,
      lat: 30.351553,
      lng: 76.366386,
    },
  ],
  //15
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      reverse: false,
      lat: 30.351944,
      lng: 76.365494,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 210,
      name: "5-2",
      lat: 30.351944,
      lng: 76.365494,
    },
  ],
  //16 linked to image 1
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 195,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //17
  [
    {
      type: "custom",
      pitch: -20,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -20,
      yaw: 180,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //18
  [
    {
      type: "custom",
      pitch: -20,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //19
  [
    {
      type: "custom",
      pitch: -20,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 150,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //20
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //21
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 10,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 150,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //22
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 140,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //23

  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.352539,
      lng: 76.371353,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.352539,
      lng: 76.371353,
    },
  ],
  //24

  [
    {
      type: "custom",
      pitch: -10,
      yaw: 175,
      name: "5-1",
      reverse: true,
      lat: 30.352039,
      lng: 76.365707,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 5,
      name: "5-2",
      reverse: true,
      lat: 30.352039,
      lng: 76.365707,
    },
  ],
  //25

  [
    {
      type: "custom",
      pitch: -10,
      yaw: 175,
      name: "5-1",
      reverse: true,
      lat: 30.352772,
      lng: 76.364716,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -2,
      name: "5-2",
      reverse: true,
      lat: 30.352772,
      lng: 76.364716,
    },
  ],
  //26

  [
    {
      type: "custom",
      pitch: -10,
      yaw: -100,
      name: "5-1",
      lat: 30.353508,
      lng: 76.363159,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 98,
      name: "5-2",
      lat: 30.353508,
      lng: 76.363159,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-2",
      lat: 30.353508,
      lng: 76.363159,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -10,
      name: "5-1",
      lat: 30.353508,
      lng: 76.363159,
    },
  ],
  //27

  [
    {
      type: "custom",
      pitch: -10,
      yaw: 200,
      name: "5-1",
      reverse: true,
      lat: 30.354488,
      lng: 76.365189,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -15,
      name: "5-2",
      reverse: true,
      lat: 30.354488,
      lng: 76.365189,
    },
  ],
  //28

  [
    {
      type: "custom",
      pitch: -10,
      yaw: 170,
      name: "5-1",
      reverse: true,
      lat: 30.355429,
      lng: 76.364624,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 15,
      name: "5-2",
      reverse: true,
      lat: 30.355429,
      lng: 76.364624,
    },
  ],
  //29

  [
    {
      type: "custom",
      pitch: -10,
      yaw: -165,
      name: "5-1",
      reverse: true,
      lat: 30.356825,
      lng: 76.36396,
    },
  ],
  //30
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -65,
      name: "5-1",
      plus: 30,
      lat: 30.354067,
      lng: 76.366051,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 90,
      name: "5-2",
      lat: 30.354067,
      lng: 76.366051,
    },
  ],
  //31
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -80,
      name: "5-1",
      plus: 30,
      lat: 30.354677,
      lng: 76.365219,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 90,
      name: "5-2",
      lat: 30.354677,
      lng: 76.365219,
    },
  ],
  //32
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -80,
      name: "5-1",
      plus: 30,
      lat: 30.353891,
      lng: 76.367371,
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 90,
      name: "5-2",
      lat: 30.353891,
      lng: 76.367371,
    },
  ],
  //33
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -5,
      name: "5-1",
      lat: 30.354048,
      lng: 76.369148
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -190,
      name: "5-2",
      lat: 30.354048,
      lng: 76.369148
    },
  ],
  //34
  [
    {
      type: "custom",
      pitch: -20,
      yaw: 100,
      name: "5-1",
      lat: 30.354048,
      lng: 76.369148
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -100,
      name: "5-2",
      lat: 30.354048,
      lng: 76.369148
    },
  ],
  //35
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -100,
      name: "5-1",
      lat: 30.354675,
      lng: 76.369926
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 100,
      name: "5-1",
      lat: 30.354675,
      lng: 76.369926
    },
  ],
  //36
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -100,
      name: "5-1",
      lat: 30.353706,
      lng: 76.36998
      // reverse: true
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      lat: 30.353706,
      lng: 76.36998
    },
  ],
  //37
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 10,
      name: "5-1",
      lat: 30.353828,
      lng: 76.369492
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      lat: 30.353828,
      lng: 76.369492
    },
  ],
  //38
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -10,
      name: "5-1",
      lat: 30.353939,
      lng: 76.369888
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      lat: 30.353939,
      lng: 76.369888
    },
  ],
  //39
  [
    {
      type: "custom",
      pitch: -10,
      yaw: -10,
      name: "5-1",
      lat: 30.353027,
      lng: 76.370308
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      lat: 30.353027,
      lng: 76.370308
    },
  ],
  //40
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 100,
      name: "5-1",
      lat: 30.353027,
      lng: 76.370308
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -100,
      name: "5-1",
      lat: 30.353027,
      lng: 76.370308
    },
  ],
  //41
  [
    {
      type: "custom",
      pitch: -30,
      yaw: 0,
      name: "5-1",
      lat: 30.352413,
      lng: 76.3703
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 240,
      name: "5-1",
      lat: 30.352413,
      lng: 76.3703
    },
  ],
  //42
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 200,
      name: "5-1",
      reverse: true,
      lat: 30.353472,
      lng: 76.363091
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 0,
      name: "5-1",
      lat: 30.353472,
      lng: 76.363091
    },
  ],
  //43
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 200,
      name: "5-1",
      reverse: true,
      lat: 30.353483,
      lng: 76.362961
    },
    //cos
    {
      type: "custom",
      pitch: -10,
      yaw: 80,
      name: "5-1",
      lat: 30.353483,
      lng: 76.362961
    },
    //frwd
    {
      type: "custom",
      pitch: -10,
      yaw: -10,
      name: "5-1",
      lat: 30.353483,
      lng: 76.362961
    },
  ],
  //44 cos -1
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 200,
      name: "5-1",
      reverse: true,
      lat: 30.353794,
      lng: 76.362534
    },
    {
      type: "custom",
      pitch: -10,
      yaw: -20,
      name: "5-1",
      lat: 30.353794,
      lng: 76.362534
    },
  ],
  //45 cos -2
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 80,
      name: "5-1",
      name: "5-1",
      lat: 30.353794,
      lng: 76.362534
    },
  ],
  //46
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.353579,
      lng: 76.36013
    },
    {
      type: "custom",
      pitch: -10,
      yaw: 0,
      name: "5-1",
      lat: 30.353579,
      lng: 76.36013
    },
  ],
  //47
  [
    {
      type: "custom",
      pitch: -10,
      yaw: 180,
      name: "5-1",
      reverse: true,
      lat: 30.353367,
      lng: 76.362907
    },
  ],
];

