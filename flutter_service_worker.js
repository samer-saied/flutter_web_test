'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cbd4d9ae7cca004c2651b9604ce82d6d",
"splash/img/light-2x.png": "2eaf62973edad768db0ca5bba8f7ce7f",
"splash/img/dark-1x.gif": "663fa9f805d6fba5e6682d3202dbaf9a",
"splash/img/dark-4x.png": "c1e458e4072375f11d878087d93c485f",
"splash/img/light-3x.png": "fdcdfcc528c4a38db7cef8664d7ccb7f",
"splash/img/dark-3x.png": "fdcdfcc528c4a38db7cef8664d7ccb7f",
"splash/img/light-4x.png": "c1e458e4072375f11d878087d93c485f",
"splash/img/light-1x.gif": "663fa9f805d6fba5e6682d3202dbaf9a",
"splash/img/dark-2x.png": "2eaf62973edad768db0ca5bba8f7ce7f",
"splash/img/light-2x.gif": "bf79051f79aee7157795c5f4ca4c635e",
"splash/img/dark-1x.png": "43f5248063283c70021c71fac1793332",
"splash/img/dark-4x.gif": "887409bdaa80bce3417d7f0d1fe86614",
"splash/img/light-3x.gif": "8677d00f7454feb11b2fc6653026a30a",
"splash/img/dark-3x.gif": "8677d00f7454feb11b2fc6653026a30a",
"splash/img/light-4x.gif": "887409bdaa80bce3417d7f0d1fe86614",
"splash/img/light-1x.png": "43f5248063283c70021c71fac1793332",
"splash/img/dark-2x.gif": "bf79051f79aee7157795c5f4ca4c635e",
"index.html": "df6f0f60013726c021a4586e1f55da7b",
"/": "df6f0f60013726c021a4586e1f55da7b",
"main.dart.js": "25b7ebd24dfb57b7df7546e937519365",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58f6d7700630c1c1958f3e75ee3f5bb5",
".git/config": "cdc9321067b798c1f4cdf7230309972e",
".git/objects/92/46dc044893fb3a13881c2867fc3e0344fde28d": "4b8abd68f797a76e7c3974679e9b9665",
".git/objects/0c/55899fb9c65a2d37145f1cece8c0ffaceae819": "48d7343ede11c74707e5a41014ec4e35",
".git/objects/3b/a6189e76378700da5a8b9b250045bcc4b82b64": "7f32b41e4ab52493695aaba5b1021271",
".git/objects/9e/1b05eec576c20d1820ed0a92f8dd96a17ef4a2": "a97d028de9c2c1586c8d08b466dbf188",
".git/objects/9e/268fd6ce6a09745a4d8d11aa756ff0f4cd6d88": "dc8c7642a0a94bb4242e179609015834",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/b32f0b104153d388dad6bb898e24466dbf7f2b": "d655e340f47874433dda68d156941ebb",
".git/objects/56/06e797baa2432cf49458ed9f5ffc67fd1a768d": "e5bcb06fe4197d22864b7927b1162c4c",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/60/dac58434160ca57d5f17a89296b358d3d9ba12": "618ccd4115f4a3717970637175276a6c",
".git/objects/05/872a1c31b6726e6e8f838dace379f493bb3768": "781c82d5699037a30d95671906d06796",
".git/objects/a4/e783d3822822c6c30d972ebffab20973b3f4f8": "4f6611863904a806483cc7966af3ee5c",
".git/objects/b5/8aaaefee7e4bcb8bc79dfc1924a41230b1deb4": "3ce51b5922b1eb0c1f2128783564a726",
".git/objects/b5/00e910d8f6ff8b1ee1a143af3ae35712548b0a": "3519a358c973c01022ef49e408b38af3",
".git/objects/d9/fef0eae3dfb8f0f77ae738c4582baec33156d0": "9097baf81c41b896cef7c3bb61cc525e",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/cd38a717237a13f60e05aa713fad0ad27d907b": "7d3b68031bc874f363f77ca716c9fbfc",
".git/objects/d0/986dd6db0973739efc123277f73a3bed438c53": "aede27a4e30c701b3df77463f347e784",
".git/objects/be/65753d8aaf5d48e2eb0a48200f2a1e204390d7": "1ff641926a64d18baf760c8d559b09ed",
".git/objects/b3/0931e86717c752c155ae6455a127ca0db02b3b": "49bf2301403a8e4c26af7796b79a0ecd",
".git/objects/b4/0f2ec0f76dfadc20ec0665dac15a3fb328b66b": "70bb1afeb877e6f28d03c1eb4ef86dbf",
".git/objects/a5/90ae8ac77b603239a80aed43d1df86f3cbebbb": "eb8e6845285d8a0e1ad651d0cc533463",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4ab77a28d37910565eb54b6f5065bbfb45d993": "528e1897222ebb608a208585a1ba3c2b",
".git/objects/e2/2ee3dfce73741571f2e1b19d13e4de81c88350": "c3c2b7ea68300b1c28f7648d400e23be",
".git/objects/f3/a11f20ac21ac3bf3b3a5078d6e0b8e8d1dde04": "87c63f61676ef5112aa650c9220bed0c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/86000030165c3e6d5cae4f5b0a416f7115502d": "1a5d061f0d8f55f384f0172c1a64444c",
".git/objects/fd/29644900e96a52323edaee040a7f43404f9021": "9512116ce1dc84daa312d940aded395c",
".git/objects/fe/0e990cebc9f3a161fb96be1c9570cadf892589": "8b7c33e7533e9fcb7e43b57717bd7d7d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/2e5af55858355d8b10d7eba92866a5e36fbe16": "1d0f2170cd3001747d89d5fe01fc43c0",
".git/objects/7c/9d18912a5b07a6257ddd7c607296ba1656bb4c": "c313031cb798f0b7fe5c759126632acb",
".git/objects/42/c64df6e08455a5eae262a83393c009c1c33e43": "870e4ffa23ff3d48049283c5f0b7d67c",
".git/objects/89/324a4765eae27b2a86f39f5dcc831fec74b8c5": "e20d046bc0f6f31e27d0ef427edcd037",
".git/objects/7b/506363c78465a383a9a4534f60c6eaed96a178": "05e8976f5802d45ce53f0219cee6a35d",
".git/objects/8f/531ed7542496132543b6113299c961f9c1af29": "01bfa31e4f5f2d30fb537527e2001778",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1d986d4e6c342054fecc758ff08fe775e7f113": "d2c03bfd167011bcf5a6481ae94eb103",
".git/objects/10/852e957846fe63ce2087f4f00613687fd8d496": "3d44e84e130fe808e696b600ef2b2e44",
".git/objects/19/38aaa0cc411f5dc13e906c9dfca419ddd401dc": "379703b752ff1c0180dfaedfa989005e",
".git/objects/4c/8ab230341a2f6a2e9d5dd5c5600893e6ed6d97": "7ab3f7da8c77b6931a9647b2dc292267",
".git/objects/86/38d8f32638ea79e3e153f858338c5cf61465bb": "076106976aa0a3e7adf7b8b714ee5c53",
".git/objects/2a/cf61429391f7f093ac2603317f0224682566da": "6dd92f6250a18f1c54c9ebf3401b906a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/91266f5a703753ce821ef6f9f09dbd9bc5ba91": "e8f3f1e0aa0297cfd835fc3711c4234b",
".git/objects/36/6eef3d5f795aa58c0bebb378cb2b8108cd7b72": "27d08f8c0f8ac949a937e216137555fe",
".git/objects/5c/e3bcebeb1c7f5b84dc44bb4e68f5d92fa816af": "ad3e668cf77b37c1ab1643b8000f92e1",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/09/dece59012f0bfcb8792fa0b54408434f6926ea": "35d7d3ea1ea39779013f92eaf0ff35b5",
".git/objects/96/73abc2b9806bece13edab8456a6eaeeb393db7": "c0b912dce442279b7cf26832067c80c9",
".git/objects/54/d6271a3912a74e40834b0c88619bd397dc8165": "50879a158ecb572438b0f5e59841f40a",
".git/objects/5e/ac3f56afa64b20155a1de78e200fba65ccb070": "06a89efc6b0734da6f90fd034b1bcd23",
".git/objects/5e/c1fcb5d2b507479d3b6c4a2b3fb49bff19e91e": "95e3470931d5483dfb2e5816a349af41",
".git/objects/5b/bf0e9154c5ae40a8f581ca5fae27ba0d0233b6": "04c0e77cc4282f6d35bdf7aeaa674b0c",
".git/objects/6d/89337aa0ba03aec0cafec8e84007d4c9b6fbdf": "e3c97d0e5d4a85cc16f2f5c065c05930",
".git/objects/06/8c3a1362430eb4d6490d9c4d40ec5e6ae07653": "b2c11148280fdc43beee23f4457d9a67",
".git/objects/06/2aeee1a47a859536af190ff2fead10ddacb19a": "d8ef53acb4d54017998269aa98b20e03",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/d4/1a50e029a84ca1ffc0fd7873d80d1c33b8bf0a": "bb7f96dddba2947994db051cbddc3ee6",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/e4ac1ba3ee6aba2218e4637ba0eeb40addff8e": "f74233c87b084fda7274b03cd9935a39",
".git/objects/b6/b038d8b1f382a744c989c89ed48417b2e3673d": "5c234a404fa5ef7971ebcb3aaac4076f",
".git/objects/aa/db510182ff1a2855cedf7c733926c666544e1e": "7a00eeea98061438f8f95006513d6874",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/2ee63a6b4b740c7fb51d39e24ad0d3ac6ecd9c": "144de556459d37a12b9c9585968cbf3a",
".git/objects/a8/7f52089c0b45e6d1fa683eb8a659f3d53c9a9e": "002dcd31886b8328c3c184d64f445252",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/cf75e86f75bab37f64b2618453b77f44df8e67": "dff7596f36ae25db58ac1f6385131b11",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/f9/9ec0b05feee46eba6c9c9316198b30d50e32fe": "287bae0ac299e6803f1e11da304a1265",
".git/objects/f0/e8c869163d56292d4c1092dd102f8096871b7a": "10d0a6c83431c4b349dc92d479b10bae",
".git/objects/fa/51750cc1ac747b2df8dc73977a903d6569f935": "b653958ced5d3e8f667709eaea130242",
".git/objects/f8/aec0830863816c4c9202badc198ec2427bdf20": "d2d0eedf51a4a02eb9a78db94ac93122",
".git/objects/e0/3f72b7251e0193c390622ae65a57a5920f319d": "c9143eaa88e3ac7e13158820da25e4a5",
".git/objects/46/7d6acdf3737e63a9329793ce7829fa9b42fc33": "2ae11e9f8129009922de6c2b28e9bf59",
".git/objects/2d/113fbb841355505e2321578ea3a3802b8fa7f5": "ac3f1d6fb7d9b1bcff8cd2a46b5a2df6",
".git/objects/77/ec9c80a08bc21bf9d79496d1f62fb6e7cc34bf": "2acd81e665cf622a0d27241adfe3ed8a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/9e36eeae467f14105784a51c69565a6b257840": "800fb56aa6d2e42d0ee86588d81514bb",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/8766f70049db44f4b55a3d43355c1861510efc": "a4dbbd57d207c945cb27dde0e8c0db80",
".git/objects/15/66eee37d3b5fba82ddcb91f24621177301a9f2": "4a0e4fe1e0afd249957e0e2dd75e6e6f",
".git/objects/12/99fcf80a4f6884fa7d60736aa21329f1d852b3": "5b568355de2c068b706488f35aa25d53",
".git/objects/71/08aa094581a75da7ad1127ec9287cb6b2da83b": "79f24f3c4c2481e7cfbd68f486076b12",
".git/objects/71/cd85c1a56a8d8ef05ad5bd7d78ef783be9e9c2": "2d75ffbf299019362635f7839d375954",
".git/objects/76/5ab38882ece19b2c34dcc8f7a6940ee48bda14": "5bec009e6cb862f992e43b27b84ee726",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/8b/3fcb4b2579c09de6d619ad7adb195bc41e4a24": "27e1535d3257ff76a8da1cf86012910c",
".git/objects/8b/cab7aaf7434bf3fac4a744a39c7b38198865a3": "c88c3b9668169276c4d7247937a9508b",
".git/objects/8e/dd509f8084f0ba5606d3b369e1f1dc04e407a8": "46b8e8d62f2ba1d6b261af146a38422d",
".git/objects/8e/874fed60964242052903ca7db382c25bd8b97a": "b40beb52c10d48e7965fba1e4b921f96",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "349a91613eb53e2b51eda8d45fcd23b6",
".git/logs/refs/heads/main": "349a91613eb53e2b51eda8d45fcd23b6",
".git/logs/refs/remotes/origin/main": "19bd0cddb1c1de94aefe7c2a8bee9aa6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a76d1b0c573d32e35715f8dbdbb6318d",
".git/refs/remotes/origin/main": "a76d1b0c573d32e35715f8dbdbb6318d",
".git/index": "3853957e82100f8a37e83e9400184a59",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "a6dc46186eb09e53bf3d8db2170aea25",
"assets/NOTICES": "b78965d503e3f8bb7a371fcef37907c0",
"assets/FontManifest.json": "499b4cc1acbc750d923e09c3227eaf15",
"assets/AssetManifest.bin.json": "7e80881cc5fbb978523bce3b072ed523",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c42d0805f90e55482d260f4e359903e6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5714e9a7728663b989107c2e9eb5c7a2",
"assets/fonts/MaterialIcons-Regular.otf": "f0b95caddcc6b6649b088d53005aaeb3",
"assets/assets/logo/logo-animate.gif": "17b2369149968dd9ef5c79ef53b4db71",
"assets/assets/logo/logo.png": "278eee439b2e6e40979a4abca2462900",
"assets/assets/fonts/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/Almarai-ExtraBold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/assets/fonts/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/fonts/Almarai-Light.ttf": "5b0dec05feae02fef51afd517af94d4c",
"assets/assets/games/PUBG_logo_PNG1.png": "6fac7fc8f6095f53594c1f69783ad4ce",
"assets/assets/games/newGame.png": "948491bb016eaa2b2a7b1d36c85a2f5d",
"assets/assets/games/roblox.png": "857d287953b532c7a65ffaeab72de050",
"assets/assets/games/PUBG.png": "43010e61e8cb547fc2da2747548779f1",
"assets/assets/games/pubg-mobile.png": "b83b1257f5149c9a042807e698db368c",
"assets/assets/banner/catergory1.png": "3c8165dee6dde9891e8f8800d32e90ed",
"assets/assets/banner/Group3.png": "7a6860bae7ef7153ee5f14d1951d13c0",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
