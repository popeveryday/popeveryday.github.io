'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ee759858abb4d2629989e5603d9c84d5",
"/": "ee759858abb4d2629989e5603d9c84d5",
"main.dart.js": "eb0bca900f6b60c9c22053c4f3482a86",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e86a7598a1ee8a25a76bf08dc1a19e3d",
"assets/AssetManifest.json": "5f557529b79b23c5ea5f3c651ef85f3a",
"assets/NOTICES": "93a8cf96845dac83115ec78ec0f938fb",
"assets/FontManifest.json": "ced1dabdcc0062c3220eeb9fcbf8ec29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/calc2/calc2ttdone.png": "d56fff7db503b6c617b0628baca42c9e",
"assets/assets/images/calc2/calc2done.png": "884cfbffb0f014cbbbd634aba61ec005",
"assets/assets/images/calc2/calc2ttclear.png": "81329557232fa5a0fa24b431a1d31bed",
"assets/assets/images/calc2/calc2ttcomma.png": "1cc1c72fb270e92f1f4433b3bbc5b2f6",
"assets/assets/images/calc2/clear2.png": "5d810bd62e67be40cec8c1c0fafb53d0",
"assets/assets/images/calc2/calc29.png": "49973f29938861b575001294281bbb7d",
"assets/assets/images/calc2/calc28.png": "c650df7c873ac39db2f38de07c09511d",
"assets/assets/images/calc2/checked.png": "93de6f6a108db81dcc3f25467534b2ba",
"assets/assets/images/calc2/calc2input.png": "3dd902d11982204ed51464eab7344e37",
"assets/assets/images/calc2/calc2tt8.png": "0637670987b79d69ac9b989ec88d10ff",
"assets/assets/images/calc2/calc2tt9.png": "f1a6e123d28c17810615fec5e58ad740",
"assets/assets/images/calc2/calc26.png": "04f330ed4c8c5e03b1310312f98545a5",
"assets/assets/images/calc2/calc2tt4.png": "492500562c854d2d09b94105ab97dcd7",
"assets/assets/images/calc2/calc2tt5.png": "9306ef109fd8df0e903980b3ed9c3494",
"assets/assets/images/calc2/calc27.png": "150df3405aade23ae1262622ac81b373",
"assets/assets/images/calc2/calc25.png": "c9a629d99dd9838a5be6810133b6cfa2",
"assets/assets/images/calc2/calc2tt7.png": "6da7b6265bc097c311aeca70e551ee3e",
"assets/assets/images/calc2/calc2tt6.png": "748fc0fb838f68f240a43e2ffdf186d8",
"assets/assets/images/calc2/calc24.png": "3f972146158819a673e6b8f0038e18a5",
"assets/assets/images/calc2/calc20.png": "33395d776758b1990c4fe9a6ed573fed",
"assets/assets/images/calc2/calc2tt2.png": "82fb15190f980f5196920d7177c80669",
"assets/assets/images/calc2/calc2tt3.png": "dc218f1895856cd05c781a60ee7bfaa8",
"assets/assets/images/calc2/calc21.png": "e1937586f9be50daa7fbea7083981423",
"assets/assets/images/calc2/calc23.png": "efba8a6ce5e8eb9c0d1ff6f0103ab3c0",
"assets/assets/images/calc2/calc2comma.png": "7d64585beffecbe74577e5612b64be3b",
"assets/assets/images/calc2/calc2tt1.png": "09694fc61d6f248be5962907d46aed35",
"assets/assets/images/calc2/calc2tt0.png": "847c0c7f3578c9674f69d4c02e5bd326",
"assets/assets/images/calc2/calc22.png": "4ea0051d9a207854b183a5c16ecc4f14",
"assets/assets/images/calc2/calc2clear.png": "19e08283975cf8e40fde6862fccb0a16",
"assets/assets/images/home/bg-blur2.jpg": "2b76358c3479d95932d453a9be3cf3fb",
"assets/assets/images/home/notice_board.png": "f3f1b306e6226c2cd687c40408f98766",
"assets/assets/images/home/house_training.png": "29fd865cf8034fe1195f88566a3d4ef0",
"assets/assets/images/home/bg-blur3.jpg": "14596214e0abfc4eeb0ecd250915b55c",
"assets/assets/images/home/title_soroban.png": "540b0e316f6ae8f91d5964a6598de8a7",
"assets/assets/images/home/title_homework.png": "40cddbe9ef162e964d03670533f0efcf",
"assets/assets/images/home/tittle_archievement.png": "bf1cebec30308094ec158724ca2d98a8",
"assets/assets/images/home/btn_store.png": "4cd1f9339a4a93ad3781673272eced27",
"assets/assets/images/home/btn_up.png": "be7101f808c0f87736938874d7198e46",
"assets/assets/images/home/house_archievement.png": "ad5369bde47b59e72a794573d9f06f8c",
"assets/assets/images/home/btn_treasure.png": "483fbeafe663abb1554a7adb88da2ee4",
"assets/assets/images/home/bg-blur.jpg": "a7ab086a989e1df19ef776ef4fd2ddd3",
"assets/assets/images/home/house_soroban.png": "ccb39fbd15c7e5a59afb8cbcddeb0131",
"assets/assets/images/home/house_lesson.png": "65ab3385f935cde3eabe59b513909baf",
"assets/assets/images/home/bg3.jpg": "0246136f328ad8d767ecdd6f51971ff9",
"assets/assets/images/home/btn_setup.png": "4be3ae865a49b604ebdc08c7bc1e5996",
"assets/assets/images/home/title_lesson.png": "9ad745012239296954ac336b71cbbf4f",
"assets/assets/images/home/btn_avatar.png": "4cf5ca00c8a3d6447f8d90b7934de5ce",
"assets/assets/images/home/bg2.jpg": "06a2227bc4622e461ffe003a09f63ddd",
"assets/assets/images/home/title_training.png": "e3115b64d4f85a10381b860f52697204",
"assets/assets/images/home/btn_notice.png": "0d23e00e4e382660e1bdcc1522e53b47",
"assets/assets/images/home/house_homework.png": "a1783e6f26a731f0f6077e9931fe015e",
"assets/assets/images/home/btn_start.png": "aa5e5113fd29b29bc65013372434dba1",
"assets/assets/images/home/bg.jpg": "826f258852c30ac2deaaf91e0562fd22",
"assets/assets/images/soroban/seed-purple.png": "b8bf18527fc344733509a069aa9a36eb",
"assets/assets/images/soroban/time-bar.png": "1738509a12b502ec4537987c12675c23",
"assets/assets/images/soroban/board4dcm.png": "4413487cd190bf3df931e6bde9557cab",
"assets/assets/images/soroban/board6.png": "d07954892c50de04da5e07dd86b16be1",
"assets/assets/images/soroban/board6dcm.png": "1fa7a3814f47da123ed709d86af5308b",
"assets/assets/images/soroban/board4.png": "11e7b006f9c7647e375b4662a9e0d135",
"assets/assets/images/soroban/board-full.png": "4ba42d69ac0cd39a55bcbbc179a5c200",
"assets/assets/images/soroban/seed-orange.png": "184c3494f70536464635bdfab720ed8d",
"assets/assets/images/soroban/seed-blue.png": "6eae969fed886b929453d2d94b851203",
"assets/assets/images/soroban/board8.png": "a49b3e4b0ea583491ae87b0767e3b1e2",
"assets/assets/images/soroban/board.png": "c6f70c38ee31fa2bac513a8d795e8afe",
"assets/assets/images/soroban/seed-yellow.png": "958d8b4d20d3bed414b36070b3910265",
"assets/assets/images/soroban/thanh-so.png": "75a6aedbd6845c859d99138590f442c6",
"assets/assets/images/soroban/seed-green.png": "fbbc89f27acaefae1bd3fd807975cdf9",
"assets/assets/images/genhw/btn_down.png": "5842442b5639e1d41e788cee7b29a9f4",
"assets/assets/images/genhw/btn_real.png": "9c8dff04a86779f6d5565aba10791ce8",
"assets/assets/images/genhw/btn_1D_on.png": "de1f42f29baad06a402a3e0dfce5df9e",
"assets/assets/images/genhw/btn_real_on.png": "90204aedc453fec8dd10392d6f69fed1",
"assets/assets/images/genhw/btn_1D.png": "4cc9235a72b9b8238a952efec8f94ecb",
"assets/assets/images/genhw/time_bar_switch.png": "53abfeea54247b1743050c0b529983a8",
"assets/assets/images/genhw/num_unselected.png": "5467e4831f2d2e1b068bb8f4c5645e0e",
"assets/assets/images/genhw/btn_up_on.png": "cb1db0c99bde0ff8d5e068b63e05280f",
"assets/assets/images/genhw/btn_up.png": "60b82dcc592a7e031513232bfca07745",
"assets/assets/images/genhw/btn_2D_on.png": "4b99773f4fb0737b7e23b0f068a666ce",
"assets/assets/images/genhw/btn_N3_on.png": "537ca6230fc5e891578434f4a42fcc73",
"assets/assets/images/genhw/btn_N1_on.png": "1f426c133c62c5961af3efdd7edcde06",
"assets/assets/images/genhw/num_selected.png": "76fad8757c9722a1f93453289dbb63c2",
"assets/assets/images/genhw/time_bar.png": "b7077cdc81a290a327950ab261331d32",
"assets/assets/images/genhw/btn_virtual.png": "d94097da3876996a7b2256262112995f",
"assets/assets/images/genhw/btn_N3.png": "a85789472174cc4e7767aa168c9924a0",
"assets/assets/images/genhw/popup.png": "c13c09712c1fa8d378210d0260da598f",
"assets/assets/images/genhw/btn_N2.png": "7f9105f0d5ce2271cc884bda341575ce",
"assets/assets/images/genhw/btn_N0.png": "8597dacea3625dee487878329385d1db",
"assets/assets/images/genhw/time_bar_on.png": "4ad0ffd4acea4193794d6550435ebb99",
"assets/assets/images/genhw/btn_N1.png": "d71eae7f1631e45eeef5a411801bed9e",
"assets/assets/images/genhw/btn_N4_on.png": "95f8427e5316243bc208bad81f9762df",
"assets/assets/images/genhw/btn_N4.png": "9204cd46c59982723d78a356dad92c6d",
"assets/assets/images/genhw/num_child.png": "fa5ff978f1f393242610768e9ec28a91",
"assets/assets/images/genhw/btn_down_on.png": "afe4756a1da40bd8d095e6f6c8f6ef6e",
"assets/assets/images/genhw/btn_virtual_on.png": "e30cc8bcb6aef943ac6df94891ddf091",
"assets/assets/images/genhw/btn_N2_on.png": "3dc468a15440be1391818b79aa6a3ac2",
"assets/assets/images/genhw/btn_hear_on.png": "f9b656307fed81863f8edcefd00435f7",
"assets/assets/images/genhw/btn_2D.png": "e3adccca17c0eacc17feaa19f688396a",
"assets/assets/images/genhw/btn_N0_on.png": "3c2e5b7f5c943436042f56d669e021d5",
"assets/assets/images/genhw/btn_start.png": "d528e95e5f71a92de64e7412d5c05e65",
"assets/assets/images/genhw/bg.png": "b0473ab837214aef03cb791f82212f71",
"assets/assets/images/genhw/btn_hear.png": "cda4cfd1dee530e3092b3ff64f6386dc",
"assets/assets/images/genhw2/btn_pink.png": "e99dfc0caa276a58ccbeaf4d58b67135",
"assets/assets/images/genhw2/tit_multiple.png": "efbf99af9cf0188d0b1914154fad6dd7",
"assets/assets/images/genhw2/ico_multiple.png": "4ecfeed2137baa702c22a738337be4fb",
"assets/assets/images/genhw2/next-03.png": "2072d529a00e073c3da35c5985feebb8",
"assets/assets/images/genhw2/next-02.png": "94cd4ee58b7a558c84e8100f9a2cc1b8",
"assets/assets/images/genhw2/bg_devide.png": "a065f5dde4cb3b7854be6d4c1ff9c27c",
"assets/assets/images/genhw2/next-01.png": "21bfb905689ec255668b053f8392c46f",
"assets/assets/images/genhw2/ico_divide.png": "8aeed1efeb99411f9f0c9a6d5636b00d",
"assets/assets/images/genhw2/switch_on.png": "6a587df4a6a84b9ecd59dd1264ea8eba",
"assets/assets/images/genhw2/switch_off.png": "d124448252a892f57fdd6219911b592a",
"assets/assets/images/genhw2/btn_gray.png": "e936e4eb47a9d71f26fb74ac96f84471",
"assets/assets/images/genhw2/bg3.jpg": "89dd37e760ad37deff90762667d18e3c",
"assets/assets/images/genhw2/bg2.png": "4b4b06d465e044f6efd81ef615c253bb",
"assets/assets/images/genhw2/bg.png": "cb3242cd2959e0787a092c1ec5806df2",
"assets/assets/images/genhw2/tit_divide.png": "887c2a52ff75f9db9b4a66b7b4e0ffd1",
"assets/assets/images/game/testbg2.jpg": "950b6b30714e82ffd2d0f30edf113fac",
"assets/assets/images/game/nut-back.png": "7c91ad660e20efe35b505ea735d03c21",
"assets/assets/images/game/testbg3.jpg": "e336b53dd0143614330ee39efeb4d463",
"assets/assets/images/game/gamebg3.jpg": "13df66b5aa535a78d9731be7867432ee",
"assets/assets/images/game/testbg-blur.jpg": "5a650ef231d13f4d378c1b5ba74b0c70",
"assets/assets/images/game/gamebg2.jpg": "4e6d40ff67ccf66cbc8cd41ac36ef28c",
"assets/assets/images/game/testbg-blur2.jpg": "dbbccb6caf8703d8bf8811e8c84cae9b",
"assets/assets/images/game/nut-reset.png": "1ca270e43a703c2cd3ddee49260975e6",
"assets/assets/images/game/testbg-blur3.jpg": "0dafbe910d288b38959b36083ea7fb65",
"assets/assets/images/game/gamebg-blur3.jpg": "7cde0179dd0a7c5eaaabf96fa62dd907",
"assets/assets/images/game/gamebg-blur2.jpg": "d47e3c3a05065260712132f98f3463bc",
"assets/assets/images/game/gamebg-blur.jpg": "a808f51f8b379c0dacd0202ead567307",
"assets/assets/images/game/testbg.jpg": "eaa8b8acff469774e79c801bc72f40d1",
"assets/assets/images/game/gamebg.jpg": "1bc80235fe8feccae539df794fe99a16",
"assets/assets/images/calc/ttclear.png": "64f1f7522b817e52fe97217d2893cd09",
"assets/assets/images/calc/8.png": "f893ce0c8fa23787c8a1a490017dbb90",
"assets/assets/images/calc/9.png": "b20ab99ffea49794687e8d0924d0199c",
"assets/assets/images/calc/tt3.png": "4f4dcee27d30c2e2672d111ac226a7c8",
"assets/assets/images/calc/clear.png": "0706a7190610e0361ae3f09876fab553",
"assets/assets/images/calc/tt2.png": "f8cf6ec42c0139e7e8be5cbf3f0b631e",
"assets/assets/images/calc/tt0.png": "44d2cd24fc17087aeb3b1bcbf684cbb1",
"assets/assets/images/calc/tt1.png": "2578986a5ed740bf4fb2d945d31f8cb2",
"assets/assets/images/calc/tt5.png": "e1ca1b3f6272c34cefcedbae98373d9e",
"assets/assets/images/calc/tt4.png": "991e113a3cf408d4a597c921698e91f9",
"assets/assets/images/calc/tt6.png": "a2a2f003dd497b7fd72f4498a826d14b",
"assets/assets/images/calc/tt7.png": "400ecb8911d52931b10605b685ccd8f4",
"assets/assets/images/calc/tt9.png": "6ba5e4ed5fa1eae13c32297bdb5d79ae",
"assets/assets/images/calc/done.png": "78d3e394fa8017e0d8a7bef001a6d2ca",
"assets/assets/images/calc/tt8.png": "dc0723ffc8853366c45a40e9b6777836",
"assets/assets/images/calc/4.png": "d065866f7292e8181f5be42f64fc1c81",
"assets/assets/images/calc/5.png": "558a4630d16eca799d7cbc33048d78da",
"assets/assets/images/calc/ttdone.png": "4800a393cfbda90817a202b1e0515b56",
"assets/assets/images/calc/calcbg.png": "2071c47842577a41396c7c1e31d9840f",
"assets/assets/images/calc/7.png": "bc312e81d9ebe1c6606330c1b16ff67f",
"assets/assets/images/calc/6.png": "4c46224e14424f33083be7e2ec083bd2",
"assets/assets/images/calc/2.png": "2abc820689a1dc4a5c94d05fb1037249",
"assets/assets/images/calc/3.png": "e059b0a5ea8119b925a4bfe76c400acf",
"assets/assets/images/calc/1.png": "16a43ff897e14a4e01ad392d198e6e69",
"assets/assets/images/calc/0.png": "2dbda45c399cac8a87f680a3e9128260",
"assets/assets/images/dialog/btn_pink.png": "fca913d41d63fcb5798c0776a04bd0a2",
"assets/assets/images/dialog/line2.png": "a70d739a174470b65ca0da92de2c6291",
"assets/assets/images/dialog/bot.png": "d2ed746af968bfe9489c35d7f1b46642",
"assets/assets/images/dialog/bot2.png": "026615a5dddf6d730b6ace1ebe832039",
"assets/assets/images/dialog/btn_gray.png": "15584a2b335ad184860aed6f2502cff6",
"assets/assets/images/dialog/top.png": "d8933e3f90ecdbb02cba915ff548b8a2",
"assets/assets/images/dialog/top2.png": "7a5c52963e97a386e14912296590ed96",
"assets/assets/images/dialog/line.png": "fd5fbaa61d0e2e9d47947b5918f83a9c",
"assets/assets/images/btn_back.png": "728dcbfa72d4a59b25991442477ec6de",
"assets/assets/images/trainrsbox/khung_nen.png": "7b169124fc21b1b1f709e70a3b3d0bfe",
"assets/assets/images/starbx/btn_blue.png": "708e04a18a5eebfd4a03a2ebdcd91171",
"assets/assets/images/starbx/btn_pink.png": "fca913d41d63fcb5798c0776a04bd0a2",
"assets/assets/images/starbx/btn_gray.png": "15584a2b335ad184860aed6f2502cff6",
"assets/assets/images/starbx/star_on2.png": "a94ce3853cb89a5415ea00e628760f9a",
"assets/assets/images/starbx/star_on3.png": "bb192a7b766cd133cffa948756d5c002",
"assets/assets/images/starbx/star_on1.png": "96f2b4a9e748eaed5970c203e1ec5189",
"assets/assets/images/starbx/star1.png": "8691c50a1744decc3e035b1f59f1b1c9",
"assets/assets/images/starbx/star3.png": "3fd64d59bcc6b2cbee9bf28df576a679",
"assets/assets/images/starbx/star2.png": "ff29b05df9970359bbebc1993597492d",
"assets/assets/images/starbx/bg.png": "9ede3df518bcd924b6a35ef1ddd25ff2",
"assets/assets/images/btn_exit.png": "f47f1d9213337255ac17bee428486ca3",
"assets/assets/videos/saoloop.mp4": "bd739178d6aabd5c1f1ea2efe35ee61f",
"assets/assets/audio/sfx/congra.mp3": "d92bfcdbb17ed22bdaa2403fef3074e3",
"assets/assets/audio/sfx/VLOSE.mp3": "78d90623b75da3be08cf5aa2b8791735",
"assets/assets/audio/sfx/btntap.mp3": "1c9615c3157d9d33de136973867351eb",
"assets/assets/audio/sfx/click.mp3": "33c2102dcd0420f4a1e5831308e84a94",
"assets/assets/audio/sfx/popup.mp3": "bcd4d7bf33123ea1b60e19cfd4bad4ea",
"assets/assets/audio/sfx/sting.mp3": "a875a939ff65dbae529cc6536ad5ef65",
"assets/assets/audio/sfx/success.mp3": "9d36f937feff8033d05cb0cccc7fc76b",
"assets/assets/audio/sfx/beep.mp3": "256e1c186f368caa184b5119ca438d61",
"assets/assets/audio/sfx/wrong.mp3": "74a22c2ff50657a9c6d80c4ccb033dd0",
"assets/assets/audio/sfx/VWIN.mp3": "33106687c8fee090ee99b39b47fe7003",
"assets/assets/audio/number/82.mp3": "b0a7784368463c4e0cf488620fd0b0b8",
"assets/assets/audio/number/96.mp3": "ef467f94f58d0009ecd62be057c99b78",
"assets/assets/audio/number/69.mp3": "5eb84377b7277392aab7460d0ee26b83",
"assets/assets/audio/number/41.mp3": "dc25ecd0e114162952ce29063bac85c5",
"assets/assets/audio/number/55.mp3": "07eaef33e8f58a09a275fea8a63ad38e",
"assets/assets/audio/number/7.mp3": "b32064d74a72886fe420c823f5f4910f",
"assets/assets/audio/number/54.mp3": "facb1dcf34dff371aef03d1c41cc1221",
"assets/assets/audio/number/6.mp3": "eee6d7fa7af6b50b6d0ef9745fc18cf2",
"assets/assets/audio/number/40.mp3": "f395188f5dfdf99a63c2902bd9bb35f1",
"assets/assets/audio/number/800.mp3": "76d612edceee58f619debfe51b279c1e",
"assets/assets/audio/number/68.mp3": "ac7fbd6cd1b0d49689050c875bd981ba",
"assets/assets/audio/number/97.mp3": "e43c849edbd281f707b0fc1e296cd2cf",
"assets/assets/audio/number/83.mp3": "cbe9133c45bffcdcffed6947def44a4b",
"assets/assets/audio/number/95.mp3": "267cf973065afd18ce3fce3e80cf14e2",
"assets/assets/audio/number/81.mp3": "175d09c228d6060cf56b33c23b434079",
"assets/assets/audio/number/4.mp3": "1e21c63fbddc0a948649de01e52270c9",
"assets/assets/audio/number/56.mp3": "4e4cf8627db841ada451ee0016bbdc0e",
"assets/assets/audio/number/42.mp3": "af0da887815c206ff79ee965d8a0806c",
"assets/assets/audio/number/43.mp3": "ac74f066371cb2d4f65301ff5b8bf5d1",
"assets/assets/audio/number/5.mp3": "e613886fdc84da7e8fba46e77f27655d",
"assets/assets/audio/number/57.mp3": "2f3e5ef3e6f5b081069979c82a069849",
"assets/assets/audio/number/80.mp3": "27921f3df9b2572d2786e8d225cdd58b",
"assets/assets/audio/number/94.mp3": "e8413213a777413b00e05c028e63df15",
"assets/assets/audio/number/3000.mp3": "27d1356dc1373192203db7fa28963d8c",
"assets/assets/audio/number/90.mp3": "b34f7391e0dbc2d831d72d893a9ed86a",
"assets/assets/audio/number/84.mp3": "c69dbd89b27068a104a1be11fe12184b",
"assets/assets/audio/number/53.mp3": "9f065404c88cc91231db13679799b05a",
"assets/assets/audio/number/1.mp3": "e14b49a463281a626968899d19a3e63d",
"assets/assets/audio/number/47.mp3": "8685ae75c6198adf09029823090ee836",
"assets/assets/audio/number/46.mp3": "a7ace532540eef52413ae0a18af94225",
"assets/assets/audio/number/52.mp3": "5ec12b09e83ad1ba8590fff08946eb97",
"assets/assets/audio/number/0.mp3": "394d28baecbb4f79f8009b813b41a147",
"assets/assets/audio/number/85.mp3": "0a8fe25032d6c9fba5b0af9846eb35d3",
"assets/assets/audio/number/91.mp3": "12bb2ed78c7bbb64f4993a21d4a7275c",
"assets/assets/audio/number/1000.mp3": "e43d81062592deeaddbbfd146d9632dc",
"assets/assets/audio/number/87.mp3": "0f25c78eb8afc31adc17b9726643fea4",
"assets/assets/audio/number/93.mp3": "01f5cbdea33c931fa874a7082ffb0e3b",
"assets/assets/audio/number/44.mp3": "6e5520def8e80d237a9af27d3cbe9bfa",
"assets/assets/audio/number/2.mp3": "189ce8fbbce673e3defc94f5874c19ea",
"assets/assets/audio/number/50.mp3": "dbe9a66752e493316c3796b88c202cf8",
"assets/assets/audio/number/78.mp3": "e7bc2f844f0fe87fc21b78b51db38ace",
"assets/assets/audio/number/79.mp3": "27e194c676295aeb1a9fcdd77e3296dd",
"assets/assets/audio/number/3.mp3": "b98215a2c0c83c3af145b777956c0442",
"assets/assets/audio/number/51.mp3": "21d9de0af2b5ab259e22b53dfed31ff3",
"assets/assets/audio/number/45.mp3": "5a4231b5ad653a477701ccf95f5301a3",
"assets/assets/audio/number/92.mp3": "a6f32db9033681a4b750664980d843d3",
"assets/assets/audio/number/86.mp3": "f56d143e08462e4a8585b8d1bdeee2c4",
"assets/assets/audio/number/5000.mp3": "4a5a1d3c461a085a7e3042441e6a4157",
"assets/assets/audio/number/22.mp3": "46c8d426964e432d538da0d1c48b9b10",
"assets/assets/audio/number/9000.mp3": "f44131b2d71ef8cdbc2d63d75328a28f",
"assets/assets/audio/number/36.mp3": "d3861bae5651f9e6f59a328e0da388cd",
"assets/assets/audio/number/37.mp3": "7059817688623e2fcb5f3de65fc19e9a",
"assets/assets/audio/number/23.mp3": "d0b33c3ddad8975459a09691bd2a9c48",
"assets/assets/audio/number/35.mp3": "412d665dcde211d89e0908df3f833817",
"assets/assets/audio/number/21.mp3": "838d7fd96d0c5579131ec02adcb37feb",
"assets/assets/audio/number/20.mp3": "8567d7ed3866c8c44a905fe0970f977d",
"assets/assets/audio/number/34.mp3": "fe68fa84fd8a6bbb391ddd68c2cc3fca",
"assets/assets/audio/number/900.mp3": "a50a946add3dbbc0ee5dbf6a0d896f99",
"assets/assets/audio/number/30.mp3": "55fed2962ae4c7e95383c1ff2a6066c6",
"assets/assets/audio/number/24.mp3": "74ff4e7f9bebb714e5d9b5fdca71af8e",
"assets/assets/audio/number/18.mp3": "325c9871d74da9f1d845d4a7911a897d",
"assets/assets/audio/number/19.mp3": "ef5e0af740669f41a8efc795d5858a1f",
"assets/assets/audio/number/25.mp3": "ae3a58600ad74ed053f9d469fa97f4d2",
"assets/assets/audio/number/31.mp3": "543ce90eb5a29c96195dfe55477f6d13",
"assets/assets/audio/number/27.mp3": "c549faf0a3a66e20b9bae930bb9a99d2",
"assets/assets/audio/number/33.mp3": "69c097c8af5de0e25e9066a5d2b57a90",
"assets/assets/audio/number/7000.mp3": "0b7a6aa7cd5220b3568e924e43c53135",
"assets/assets/audio/number/32.mp3": "ccd33ec663b8c769b83b9551b41f5c1a",
"assets/assets/audio/number/26.mp3": "77b3043dc1dc07337339d23828b6cb66",
"assets/assets/audio/number/2000.mp3": "6383c2ad73ff3c2db3011854c0c2d240",
"assets/assets/audio/number/300.mp3": "b0d07a04d67b1a52b748016c392e82cc",
"assets/assets/audio/number/17.mp3": "74223bd128040818159286d8c8a57f8b",
"assets/assets/audio/number/16.mp3": "d90f4125f86770f39d5b47be297eb3d2",
"assets/assets/audio/number/28.mp3": "fdc05a9b7830f45ac464b12d6dde185c",
"assets/assets/audio/number/14.mp3": "cb297098310ba4ba88d701d49f25f960",
"assets/assets/audio/number/15.mp3": "fb4b060f30445280c64dbe580824fe2f",
"assets/assets/audio/number/29.mp3": "7eb17befce54cbc8e705ce45ac3cf7f3",
"assets/assets/audio/number/100.mp3": "94a4694fcf611d312840a7b5e6f7ea94",
"assets/assets/audio/number/500.mp3": "1659ac0e4a724d509fe83449a7522785",
"assets/assets/audio/number/11.mp3": "6ab9680428a308056e6e422fae1cfec8",
"assets/assets/audio/number/39.mp3": "d9ca8ae368b2261c6fc2a720ef4fe418",
"assets/assets/audio/number/38.mp3": "2ecde367ce80f258e314f6ca97a3d9f1",
"assets/assets/audio/number/10.mp3": "415c7bada4ef91a04b2c36fcbffb1b3b",
"assets/assets/audio/number/12.mp3": "b5b4a186b3623316ecde3f8c9cfbe7d8",
"assets/assets/audio/number/13.mp3": "f81ad53c3a98ef9560226d1f80d4213f",
"assets/assets/audio/number/700.mp3": "0f451a716d54f47dcbd1b27e640eca6c",
"assets/assets/audio/number/48.mp3": "5693e01d9502b95b13e000bf962c1e1b",
"assets/assets/audio/number/60.mp3": "edf2556c2789da821a394d0f899a7294",
"assets/assets/audio/number/74.mp3": "788953c0055f11bb7ad315a0cbe8261d",
"assets/assets/audio/number/75.mp3": "d3a645a30d8b600ccca274c8dc72f033",
"assets/assets/audio/number/61.mp3": "c8c97ea3bdff3f3ff0b64ff3594aa29b",
"assets/assets/audio/number/49.mp3": "ed8e0673e8b1f416c0256d38c391ea29",
"assets/assets/audio/number/200.mp3": "7d14a54ac27ca26431141c40caf90632",
"assets/assets/audio/number/88.mp3": "1be09cd5cc7d77dd86beaa67e561e1ba",
"assets/assets/audio/number/77.mp3": "9ffa96febcb0727875a9bdf40b302c6e",
"assets/assets/audio/number/63.mp3": "77a8e66c0f9155b0a703877c645b112b",
"assets/assets/audio/number/62.mp3": "cfa652856aa6262b03ebf2aa75eca6f3",
"assets/assets/audio/number/76.mp3": "0f41034e5fd20c6bc048f133cd3bccff",
"assets/assets/audio/number/89.mp3": "23ae8e0b6576a088f6c7fa9c444fe097",
"assets/assets/audio/number/4000.mp3": "55f23bc97309a4e70838a700e2a409ca",
"assets/assets/audio/number/8000.mp3": "bf31c4a563187453aeaa572778c36870",
"assets/assets/audio/number/99.mp3": "e7637cef0370862e932ee3acebc620f4",
"assets/assets/audio/number/72.mp3": "f07579f89f93637666a352f61b359193",
"assets/assets/audio/number/66.mp3": "cf100cda88110a199f6e8e6a945672a4",
"assets/assets/audio/number/8.mp3": "c0f15499cae96b29eedc7fc8a89397e2",
"assets/assets/audio/number/9.mp3": "f551aab673f7b4aada449d3c2c3fe095",
"assets/assets/audio/number/67.mp3": "74b62336a12c529bfe64463fedf950d9",
"assets/assets/audio/number/73.mp3": "fe5f8e13e0bd3dc9b3345d873dc6e7ee",
"assets/assets/audio/number/600.mp3": "17241b6655db80385d4668a7db31bb47",
"assets/assets/audio/number/98.mp3": "9b4f5a45f137fc176cb32e1b2f5cc0e6",
"assets/assets/audio/number/6000.mp3": "110ec9499b97a87949ecc04012ce3a39",
"assets/assets/audio/number/400.mp3": "ba2d93e8f6bc0c355342250aafd76c0f",
"assets/assets/audio/number/65.mp3": "359c85012b65368dbf444eb3a650a6c9",
"assets/assets/audio/number/71.mp3": "9fb220874f2aa8a2bbca1b0a11267f92",
"assets/assets/audio/number/59.mp3": "91dc8ec62c992358870539e8f08aecbc",
"assets/assets/audio/number/58.mp3": "40cccf10e512ecad2751e0791098afff",
"assets/assets/audio/number/70.mp3": "70acc4db376edd8ecf1c8528cf192801",
"assets/assets/audio/number/64.mp3": "434d70379aedc63e614ebd603c1b4055",
"assets/assets/audio/voice/O1.mp3": "a43bd85c8145cb745062d46948280b14",
"assets/assets/audio/voice/V22.mp3": "5e030e243472a7e277b08e9ba60516d9",
"assets/assets/audio/voice/V23.mp3": "bb9f48620ea6b881b04be818d9ec8055",
"assets/assets/audio/voice/O21.mp3": "6ac39eab046d8f91956e32b76686fe5a",
"assets/assets/audio/voice/V2.mp3": "8fc8e627834c9189400347060612226f",
"assets/assets/audio/voice/O2.mp3": "e7320f22c328d45919815055f47b83ec",
"assets/assets/audio/voice/V21.mp3": "c5b94637b153a52c76c014621f669661",
"assets/assets/audio/voice/V20.mp3": "24745e386fe6dc072321e4f0b0e05122",
"assets/assets/audio/voice/O3.mp3": "ccd8563f4a6345205add91529c8473b1",
"assets/assets/audio/voice/V1.mp3": "3dd1de67a6ed8bc73a7666c8537e64c6",
"assets/assets/audio/voice/V18.mp3": "9193fce56d680bce71cf942bfffaaffd",
"assets/assets/audio/voice/V19.mp3": "d96b0e1157875c7ace73559b8c723f7c",
"assets/assets/audio/voice/V32.mp3": "235d39d35ee59d5a04b116325af1ad38",
"assets/assets/audio/voice/V147.mp3": "8ca9fcc7cf1cdcebb9276138e4605288",
"assets/assets/audio/voice/V196.mp3": "7eb15be3bb6cda4f6377981106004357",
"assets/assets/audio/voice/V197.mp3": "51e47f8213ec7711bea8fcce9241ed20",
"assets/assets/audio/voice/V199.mp3": "3be1f0f9301f619b29c88b8a74180d49",
"assets/assets/audio/voice/V210.mp3": "1e259cc0e01030f87139f40992989df4",
"assets/assets/audio/voice/V198.mp3": "7b7346c8fe2da5340532105dd1f5a81d",
"assets/assets/audio/voice/V202.mp3": "1a140e27a3f48dc3032fab4838cfda30",
"assets/assets/audio/voice/V203.mp3": "5d59390ac9bf5788225d305e933b0c8a",
"assets/assets/audio/voice/V188.mp3": "fd16fbdaf76400f41b967366cce688fe",
"assets/assets/audio/voice/V201.mp3": "39c2f0842d3184cc2e231ba7ffe69112",
"assets/assets/audio/voice/V200.mp3": "441225e80d21d17c860b6d8184840eb8",
"assets/assets/audio/voice/V17.mp3": "c90bbd1ab8c58bbd0996d97c7dcdac92",
"assets/assets/audio/voice/V16.mp3": "e25c5cd9ef511cc46db3617bb8339832",
"assets/assets/json/images/4.png": "f96762253bb730bf0f3d8d1ee4278a4f",
"assets/assets/json/images/5.png": "6b00006d998fc708f02aa7ea2eebd2f6",
"assets/assets/json/images/6.png": "82aab378526f131dda195cef01a66354",
"assets/assets/json/stars.json": "4f3f5f8eb7a56bb156983dc5cdf12a86",
"assets/assets/json/Khoi456.json": "35139bc0f76f076175d1e6da988f6c61",
"assets/assets/fonts/iCielCrocante.ttf": "94f06942746502d94a8bd3c543eb13e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
