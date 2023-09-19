var t=require("fs"),e=require("http-errors"),r=require("fs/promises"),n=require("path"),i=require("isomorphic-unfetch");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s,u,a,E,I,_=/*#__PURE__*/o(t),c=/*#__PURE__*/o(e),f=/*#__PURE__*/o(r),l=/*#__PURE__*/o(n),A=/*#__PURE__*/o(i);exports.Status=void 0,(s=exports.Status||(exports.Status={}))[s.OK=200]="OK",s[s.BAD_REQUEST=400]="BAD_REQUEST",s[s.UNAUTHORIZED=401]="UNAUTHORIZED",s[s.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",s[s.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",s[s.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",s[s.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",s[s.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",s[s.NOT_ENOUGH_TOKENS=424]="NOT_ENOUGH_TOKENS",exports.GenerationStyle=void 0,(u=exports.GenerationStyle||(exports.GenerationStyle={}))[u.ANIME=21]="ANIME",u[u.PORTRAIT=26]="PORTRAIT",u[u.IMAGINE_V1=27]="IMAGINE_V1",u[u.IMAGINE_V3=28]="IMAGINE_V3",u[u.REALISTIC=29]="REALISTIC",u[u.IMAGINE_V4=30]="IMAGINE_V4",u[u.IMAGINE_V4_CREATIVE=31]="IMAGINE_V4_CREATIVE",u[u.IMAGINE_V4_1=32]="IMAGINE_V4_1",u[u.IMAGINE_V5=33]="IMAGINE_V5",u[u.DELIBERATE=100]="DELIBERATE",u[u.MAGIC_MIX=101]="MAGIC_MIX",u[u.DISNEY=102]="DISNEY",u[u.ABYSS_ORANGE_MIX=103]="ABYSS_ORANGE_MIX",u[u.LYRIEL=104]="LYRIEL",u[u.RPG_4=105]="RPG_4",u[u.REALISTIC_VISION=110]="REALISTIC_VISION",u[u.DREAM_SHAPER=111]="DREAM_SHAPER",u[u.REV_ANIMATED=112]="REV_ANIMATED",u[u.TOON_YOU=113]="TOON_YOU",u[u.UNREAL_ENGINE_5=114]="UNREAL_ENGINE_5",u[u.EPIC_REALISM=115]="EPIC_REALISM",u[u.MEINA_MIX=116]="MEINA_MIX",u[u.XX_MIX_9_REALISTIC=117]="XX_MIX_9_REALISTIC",u[u.THREE_D_RENDERING=118]="THREE_D_RENDERING",u[u.ABSOLUTE_REALITY_V1_6=119]="ABSOLUTE_REALITY_V1_6",exports.VariationStyle=void 0,(a=exports.VariationStyle||(exports.VariationStyle={}))[a.ANIME=21]="ANIME",a[a.PORTRAIT=26]="PORTRAIT",a[a.IMAGINE_V1=27]="IMAGINE_V1",a[a.IMAGINE_V3=28]="IMAGINE_V3",a[a.REALISTIC=29]="REALISTIC",a[a.IMAGINE_V4=30]="IMAGINE_V4",a[a.IMAGINE_V4_CREATIVE=31]="IMAGINE_V4_CREATIVE",a[a.IMAGINE_V4_1=32]="IMAGINE_V4_1",a[a.IMAGINE_V5=33]="IMAGINE_V5",a[a.DELIBERATE=100]="DELIBERATE",a[a.MAGIC_MIX=101]="MAGIC_MIX",a[a.DISNEY=102]="DISNEY",a[a.ABYSS_ORANGE_MIX=103]="ABYSS_ORANGE_MIX",a[a.LYRIEL=104]="LYRIEL",a[a.RPG_4=105]="RPG_4",a[a.REALISTIC_VISION=110]="REALISTIC_VISION",a[a.DREAM_SHAPER=111]="DREAM_SHAPER",a[a.REV_ANIMATED=112]="REV_ANIMATED",a[a.TOON_YOU=113]="TOON_YOU",a[a.UNREAL_ENGINE_5=114]="UNREAL_ENGINE_5",a[a.EPIC_REALISM=115]="EPIC_REALISM",a[a.MEINA_MIX=116]="MEINA_MIX",a[a.XX_MIX_9_REALISTIC=117]="XX_MIX_9_REALISTIC",a[a.THREE_D_RENDERING=118]="THREE_D_RENDERING",a[a.ABSOLUTE_REALITY_V1_6=119]="ABSOLUTE_REALITY_V1_6",exports.RemixStyle=void 0,(E=exports.RemixStyle||(exports.RemixStyle={}))[E.ANIME=21]="ANIME",E[E.IMAGINE_V1=22]="IMAGINE_V1",E[E.REALISTIC=29]="REALISTIC",exports.InpaintStyle=void 0,(I=exports.InpaintStyle||(exports.InpaintStyle={}))[I.REALISM=1]="REALISM";var R=function(t){var e=function(){return Buffer.from(t).toString("base64")};return{base64:e,asImageSrc:function(){return"data:image/png;base64,"+e()},buffer:function(){return t},blob:function(){return new Blob([t],{type:"image/png"})},asFile:function(e){return _.default.writeFileSync(e,Buffer.from(t)),new File([t],e,{type:"image/png"})}}},p=function(t){return c.default(422,t)},N=function(t){return c.default(404,t)},v=function(t,e){return c.default(t,e)},h=function(t,e){return{status:function(){return e},data:function(){return null},getOrThrow:function(){throw v(e,"Response data is not available in the response object. Status Response: "+e)},getOrElse:function(t){return t},errorOrThrow:function(){return t}}},S=function(t){return{status:function(){return exports.Status.OK},data:function(){return t},getOrThrow:function(){return t},getOrElse:function(e){return t},errorOrThrow:function(){throw v(exports.Status.OK,"Response data is not available in the response object. Status Response: "+exports.Status.OK)}}},m=/*#__PURE__*/function(){function t(){this.data=void 0,this.data=new FormData}var e=t.prototype;return e.integer=function(t,e,r){var n;if(null==(e=null!=(n=e)?n:r))return this;if(!Number.isInteger(e))throw p(t+" must be an integer");return this.data.append(t,e.toString()),this},e.float=function(t,e,r){var n;if(null==(e=null!=(n=e)?n:r))return this;if(Number.isNaN(e))throw p(t+" must be a number");return this.data.append(t,e.toString()),this},e.string=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e),this},e.blob=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e),this},e.boolean=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e.toString()),this},e.build=function(){return this.data},t}(),g=function(t){return function(e,r){return Promise.resolve(function(t,e,r){void 0===r&&(r={});try{var n=(new m).string("prompt",e).string("aspect_ratio",r.aspectRatio).integer("style_id",r.style,exports.GenerationStyle.IMAGINE_V1).string("negative_prompt",r.negativePrompt).float("cfg",r.cfg).integer("seed",r.seed).integer("steps",r.steps).integer("high_res_results",r.highResolution?1:null).build();return Promise.resolve(t.fetch("v1/imagine/api/generations",n)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=R(t);return S(e)})}var n=function(){if(t.status!==exports.Status.OK)return Promise.resolve(t.data.json()).then(function(r){var n=h(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})}catch(t){return Promise.reject(t)}}(t,e,r))}};function T(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}var d,M,O=function(t){try{return Promise.resolve(T(function(){var e,r=function(){if("string"==typeof t){var r=t.startsWith("http")||t.startsWith("https")?Promise.resolve(function(t){try{return Promise.resolve(T(function(){return Promise.resolve(A.default(t)).then(function(e){if(!e.ok)throw v(e.status,"Failed to fetch image "+t+": "+e.statusText);return Promise.resolve(e.blob())})},function(e){throw N("Error fetching image "+t+": "+e.message)}))}catch(t){return Promise.reject(t)}}(t)).then(function(t){e=t}):Promise.resolve(function(t){try{return Promise.resolve(T(function(){return l.default.isAbsolute(t)||(t=l.default.relative(process.cwd(),t)),Promise.resolve(f.default.readFile(t)).then(function(t){var e=new Uint8Array(t).buffer;return new Blob([e],{type:"image/jpeg"})})},function(e){throw N("Error reading local file "+t+": "+e.message)}))}catch(t){return Promise.reject(t)}}(t)).then(function(t){e=t});if(r&&r.then)return r.then(function(){})}else e=t}();return r&&r.then?r.then(function(){return e}):e},function(t){throw v(t.status,t.message)}))}catch(t){return Promise.reject(t)}},P=function(t){return function(e,r,n,i){return Promise.resolve(function(t,e,r,n,i){void 0===i&&(i={});try{var o=(new m).string("prompt",e),s=o.blob;return Promise.resolve(O(r)).then(function(e){var r=s.call(o,"image",e),u=r.blob;return Promise.resolve(O(n)).then(function(e){var n=u.call(r,"mask",e).integer("style_id",exports.InpaintStyle.REALISM).float("cfg",i.cfg).string("neg_prompt",i.negativePrompt).float("inpaint_strength",i.inPaintStrength).build();return Promise.resolve(t.fetch("v1/imagine/api/edits/inpaint",n)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=R(t);return S(e)})}var n=function(){if(t.status!==exports.Status.OK)return Promise.resolve(t.data.json()).then(function(r){var n=h(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})})}catch(t){return Promise.reject(t)}}(t,e,r,n,i))}},G=function(t){return function(e,r,n){return Promise.resolve(function(t,e,r,n){void 0===n&&(n={});try{var i=(new m).string("prompt",e),o=i.blob;return Promise.resolve(O(r)).then(function(e){var r=o.call(i,"image",e).integer("style_id",n.style,exports.RemixStyle.IMAGINE_V1).integer("seed",n.seed).integer("steps",n.steps).integer("strength",n.strength).string("control",n.control).float("cfg",n.cfg).string("negative_prompt",n.negativePrompt).build();return Promise.resolve(t.fetch("v1/imagine/api/edits/remix",r)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=R(t);return S(e)})}var n=function(){if(t.status!==exports.Status.OK)return Promise.resolve(t.data.json()).then(function(r){var n=h(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})}catch(t){return Promise.reject(t)}}(t,e,r,n))}},V=function(t){return function(e){return Promise.resolve(function(t,e){try{var r=(new m).integer("model_version",1),n=r.blob;return Promise.resolve(O(e)).then(function(e){var i=n.call(r,"image",e).build();return Promise.resolve(t.fetch("v1/imagine/api/upscale",i)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=R(t);return S(e)})}var n=function(){if(t.status!==exports.Status.OK)return Promise.resolve(t.data.json()).then(function(r){var n=h(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})}catch(t){return Promise.reject(t)}}(t,e))}},L=function(t){return function(e,r,n){return Promise.resolve(function(t,e,r,n){void 0===n&&(n={});try{var i=(new m).string("prompt",e),o=i.blob;return Promise.resolve(O(r)).then(function(e){var r,s=o.call(i,"image",e).integer("style_id",null!=(r=n.style)?r:exports.VariationStyle.IMAGINE_V1).integer("seed",n.seed).integer("steps",n.steps).integer("strength",n.strength).float("cfg",n.cfg).string("negative_prompt",n.negativePrompt).build();return Promise.resolve(t.fetch("v1/imagine/api/generations/variations",s)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=R(t);return S(e)})}var n=function(){if(t.status!==exports.Status.OK)return Promise.resolve(t.data.json()).then(function(r){var n=h(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})}catch(t){return Promise.reject(t)}}(t,e,r,n))}};exports.GenerationAspectRatio=void 0,(d=exports.GenerationAspectRatio||(exports.GenerationAspectRatio={})).ONE_BY_ONE="1:1",d.FOUR_BY_THREE="4:3",d.THREE_BY_FOUR="3:4",d.THREE_BY_TWO="3:2",d.TWO_BY_THREE="2:3",d.SIXTEEN_BY_NINE="16:9",d.NINE_BY_SIXTEEN="9:16",d.FIVE_BY_FOUR="5:4",d.FOUR_BY_FIVE="4:5",d.EIGHT_BY_TEN="8:10",d.THREE_BY_ONE="3:1",exports.RemixControl=void 0,(M=exports.RemixControl||(exports.RemixControl={})).OPENPOSE="openpose",M.SCRIBBLE="scribble",M.CANNY="canny",M.LINEART="lineart",M.DEPTH="depth";var y=function(t,e){var r,n=null!=(r=null==e?void 0:e.client)?r:function(t,e){return{fetch:function(t,r){try{return Promise.resolve(A.default("https://api.vyro.ai/"+t,{method:"POST",body:r,headers:{Authorization:"Bearer "+e}})).then(function(t){return{status:t.status,data:t}})}catch(t){return Promise.reject(t)}}}}(0,t);return{generations:g(n),variations:L(n),remix:G(n),upscale:V(n),inpaint:P(n)}};exports.client=y,exports.default=y;
