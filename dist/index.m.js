import t from"fs";import e from"http-errors";import r from"fs/promises";import n from"path";import i from"isomorphic-unfetch";var o,u,s,a,E;!function(t){t[t.OK=200]="OK",t[t.BAD_REQUEST=400]="BAD_REQUEST",t[t.UNAUTHORIZED=401]="UNAUTHORIZED",t[t.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",t[t.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",t[t.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",t[t.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",t[t.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",t[t.NOT_ENOUGH_TOKENS=424]="NOT_ENOUGH_TOKENS"}(o||(o={})),function(t){t[t.ANIME=21]="ANIME",t[t.PORTRAIT=26]="PORTRAIT",t[t.IMAGINE_V1=27]="IMAGINE_V1",t[t.IMAGINE_V3=28]="IMAGINE_V3",t[t.REALISTIC=29]="REALISTIC",t[t.IMAGINE_V4=30]="IMAGINE_V4",t[t.IMAGINE_V4_CREATIVE=31]="IMAGINE_V4_CREATIVE",t[t.IMAGINE_V4_1=32]="IMAGINE_V4_1",t[t.IMAGINE_V5=33]="IMAGINE_V5",t[t.DELIBERATE=100]="DELIBERATE",t[t.MAGIC_MIX=101]="MAGIC_MIX",t[t.DISNEY=102]="DISNEY",t[t.ABYSS_ORANGE_MIX=103]="ABYSS_ORANGE_MIX",t[t.LYRIEL=104]="LYRIEL",t[t.RPG_4=105]="RPG_4",t[t.REALISTIC_VISION=110]="REALISTIC_VISION",t[t.DREAM_SHAPER=111]="DREAM_SHAPER",t[t.REV_ANIMATED=112]="REV_ANIMATED",t[t.TOON_YOU=113]="TOON_YOU",t[t.UNREAL_ENGINE_5=114]="UNREAL_ENGINE_5",t[t.EPIC_REALISM=115]="EPIC_REALISM",t[t.MEINA_MIX=116]="MEINA_MIX",t[t.XX_MIX_9_REALISTIC=117]="XX_MIX_9_REALISTIC",t[t.THREE_D_RENDERING=118]="THREE_D_RENDERING",t[t.ABSOLUTE_REALITY_V1_6=119]="ABSOLUTE_REALITY_V1_6"}(u||(u={})),function(t){t[t.ANIME=21]="ANIME",t[t.PORTRAIT=26]="PORTRAIT",t[t.IMAGINE_V1=27]="IMAGINE_V1",t[t.IMAGINE_V3=28]="IMAGINE_V3",t[t.REALISTIC=29]="REALISTIC",t[t.IMAGINE_V4=30]="IMAGINE_V4",t[t.IMAGINE_V4_CREATIVE=31]="IMAGINE_V4_CREATIVE",t[t.IMAGINE_V4_1=32]="IMAGINE_V4_1",t[t.IMAGINE_V5=33]="IMAGINE_V5",t[t.DELIBERATE=100]="DELIBERATE",t[t.MAGIC_MIX=101]="MAGIC_MIX",t[t.DISNEY=102]="DISNEY",t[t.ABYSS_ORANGE_MIX=103]="ABYSS_ORANGE_MIX",t[t.LYRIEL=104]="LYRIEL",t[t.RPG_4=105]="RPG_4",t[t.REALISTIC_VISION=110]="REALISTIC_VISION",t[t.DREAM_SHAPER=111]="DREAM_SHAPER",t[t.REV_ANIMATED=112]="REV_ANIMATED",t[t.TOON_YOU=113]="TOON_YOU",t[t.UNREAL_ENGINE_5=114]="UNREAL_ENGINE_5",t[t.EPIC_REALISM=115]="EPIC_REALISM",t[t.MEINA_MIX=116]="MEINA_MIX",t[t.XX_MIX_9_REALISTIC=117]="XX_MIX_9_REALISTIC",t[t.THREE_D_RENDERING=118]="THREE_D_RENDERING",t[t.ABSOLUTE_REALITY_V1_6=119]="ABSOLUTE_REALITY_V1_6"}(s||(s={})),function(t){t[t.ANIME=21]="ANIME",t[t.IMAGINE_V1=22]="IMAGINE_V1",t[t.REALISTIC=29]="REALISTIC"}(a||(a={})),function(t){t[t.REALISM=1]="REALISM"}(E||(E={}));var I=function(e){var r=function(){return Buffer.from(e).toString("base64")};return{base64:r,asImageSrc:function(){return"data:image/png;base64,"+r()},buffer:function(){return e},blob:function(){return new Blob([e],{type:"image/png"})},asFile:function(r){return t.writeFileSync(r,Buffer.from(e)),new File([e],r,{type:"image/png"})}}},_=function(t){return e(422,t)},c=function(t){return e(404,t)},f=function(t,r){return e(t,r)},A=function(t,e){return{status:function(){return e},data:function(){return null},getOrThrow:function(){throw f(e,"Response data is not available in the response object. Status Response: "+e)},getOrElse:function(t){return t},errorOrThrow:function(){return t}}},l=function(t){return{status:function(){return o.OK},data:function(){return t},getOrThrow:function(){return t},getOrElse:function(e){return t},errorOrThrow:function(){throw f(o.OK,"Response data is not available in the response object. Status Response: "+o.OK)}}},R=/*#__PURE__*/function(){function t(){this.data=void 0,this.data=new FormData}var e=t.prototype;return e.integer=function(t,e,r){var n;if(null==(e=null!=(n=e)?n:r))return this;if(!Number.isInteger(e))throw _(t+" must be an integer");return this.data.append(t,e.toString()),this},e.float=function(t,e,r){var n;if(null==(e=null!=(n=e)?n:r))return this;if(Number.isNaN(e))throw _(t+" must be a number");return this.data.append(t,e.toString()),this},e.string=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e),this},e.blob=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e),this},e.boolean=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e.toString()),this},e.build=function(){return this.data},t}(),N=function(t){return function(e,r){return Promise.resolve(function(t,e,r){void 0===r&&(r={});try{var n=(new R).string("prompt",e).string("aspect_ratio",r.aspectRatio).integer("style_id",r.style,u.IMAGINE_V1).string("negative_prompt",r.negativePrompt).float("cfg",r.cfg).integer("seed",r.seed).integer("steps",r.steps).integer("high_res_results",r.highResolution?1:null).build();return Promise.resolve(t.fetch("v1/imagine/api/generations",n)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=I(t);return l(e)})}var n=function(){if(t.status!==o.OK)return Promise.resolve(t.data.json()).then(function(r){var n=A(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})}catch(t){return Promise.reject(t)}}(t,e,r))}};function h(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}var v,m,g=function(t){try{return Promise.resolve(h(function(){var e,o=function(){if("string"==typeof t){var o=t.startsWith("http")||t.startsWith("https")?Promise.resolve(function(t){try{return Promise.resolve(h(function(){return Promise.resolve(i(t)).then(function(e){if(!e.ok)throw f(e.status,"Failed to fetch image "+t+": "+e.statusText);return Promise.resolve(e.blob())})},function(e){throw c("Error fetching image "+t+": "+e.message)}))}catch(t){return Promise.reject(t)}}(t)).then(function(t){e=t}):Promise.resolve(function(t){try{return Promise.resolve(h(function(){return n.isAbsolute(t)||(t=n.relative(process.cwd(),t)),Promise.resolve(r.readFile(t)).then(function(t){var e=new Uint8Array(t).buffer;return new Blob([e],{type:"image/jpeg"})})},function(e){throw c("Error reading local file "+t+": "+e.message)}))}catch(t){return Promise.reject(t)}}(t)).then(function(t){e=t});if(o&&o.then)return o.then(function(){})}else e=t}();return o&&o.then?o.then(function(){return e}):e},function(t){throw f(t.status,t.message)}))}catch(t){return Promise.reject(t)}},T=function(t){return function(e,r,n,i){return Promise.resolve(function(t,e,r,n,i){void 0===i&&(i={});try{var u=(new R).string("prompt",e),s=u.blob;return Promise.resolve(g(r)).then(function(e){var r=s.call(u,"image",e),a=r.blob;return Promise.resolve(g(n)).then(function(e){var n=a.call(r,"mask",e).integer("style_id",E.REALISM).float("cfg",i.cfg).string("neg_prompt",i.negativePrompt).float("inpaint_strength",i.inPaintStrength).build();return Promise.resolve(t.fetch("v1/imagine/api/edits/inpaint",n)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=I(t);return l(e)})}var n=function(){if(t.status!==o.OK)return Promise.resolve(t.data.json()).then(function(r){var n=A(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})})}catch(t){return Promise.reject(t)}}(t,e,r,n,i))}},p=function(t){return function(e,r,n){return Promise.resolve(function(t,e,r,n){void 0===n&&(n={});try{var i=(new R).string("prompt",e),u=i.blob;return Promise.resolve(g(r)).then(function(e){var r=u.call(i,"image",e).integer("style_id",n.style,a.IMAGINE_V1).integer("seed",n.seed).integer("steps",n.steps).integer("strength",n.strength).string("control",n.control).float("cfg",n.cfg).string("negative_prompt",n.negativePrompt).build();return Promise.resolve(t.fetch("v1/imagine/api/edits/remix",r)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=I(t);return l(e)})}var n=function(){if(t.status!==o.OK)return Promise.resolve(t.data.json()).then(function(r){var n=A(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})}catch(t){return Promise.reject(t)}}(t,e,r,n))}},M=function(t){return function(e){return Promise.resolve(function(t,e){try{var r=(new R).integer("model_version",1),n=r.blob;return Promise.resolve(g(e)).then(function(e){var i=n.call(r,"image",e).build();return Promise.resolve(t.fetch("v1/imagine/api/upscale",i)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=I(t);return l(e)})}var n=function(){if(t.status!==o.OK)return Promise.resolve(t.data.json()).then(function(r){var n=A(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})}catch(t){return Promise.reject(t)}}(t,e))}},S=function(t){return function(e,r,n){return Promise.resolve(function(t,e,r,n){void 0===n&&(n={});try{var i=(new R).string("prompt",e),u=i.blob;return Promise.resolve(g(r)).then(function(e){var r,a=u.call(i,"image",e).integer("style_id",null!=(r=n.style)?r:s.IMAGINE_V1).integer("seed",n.seed).integer("steps",n.steps).integer("strength",n.strength).float("cfg",n.cfg).string("negative_prompt",n.negativePrompt).build();return Promise.resolve(t.fetch("v1/imagine/api/generations/variations",a)).then(function(t){var e;function r(r){return e?r:Promise.resolve(t.data.arrayBuffer()).then(function(t){var e=I(t);return l(e)})}var n=function(){if(t.status!==o.OK)return Promise.resolve(t.data.json()).then(function(r){var n=A(r,t.status);return e=1,n})}();return n&&n.then?n.then(r):r(n)})})}catch(t){return Promise.reject(t)}}(t,e,r,n))}};!function(t){t.ONE_BY_ONE="1:1",t.FOUR_BY_THREE="4:3",t.THREE_BY_FOUR="3:4",t.THREE_BY_TWO="3:2",t.TWO_BY_THREE="2:3",t.SIXTEEN_BY_NINE="16:9",t.NINE_BY_SIXTEEN="9:16",t.FIVE_BY_FOUR="5:4",t.FOUR_BY_FIVE="4:5",t.EIGHT_BY_TEN="8:10",t.THREE_BY_ONE="3:1"}(v||(v={})),function(t){t.OPENPOSE="openpose",t.SCRIBBLE="scribble",t.CANNY="canny",t.LINEART="lineart",t.DEPTH="depth"}(m||(m={}));var O=function(t,e){var r,n=null!=(r=null==e?void 0:e.client)?r:function(t,e){return{fetch:function(t,r){try{return Promise.resolve(i("https://api.vyro.ai/"+t,{method:"POST",body:r,headers:{Authorization:"Bearer "+e}})).then(function(t){return{status:t.status,data:t}})}catch(t){return Promise.reject(t)}}}}(0,t);return{generations:N(n),variations:S(n),remix:p(n),upscale:M(n),inpaint:T(n)}};export{v as GenerationAspectRatio,u as GenerationStyle,E as InpaintStyle,m as RemixControl,a as RemixStyle,o as Status,s as VariationStyle,O as client,O as default};
