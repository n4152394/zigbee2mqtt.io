"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[36501],{22442:(o,t,e)=>{e.r(t),e.d(t,{comp:()=>p,data:()=>g});var u=e(86904);const i=(0,u.Lk)("h1",{id:"tuya-tyzs1l",tabindex:"-1"},[(0,u.Lk)("a",{class:"header-anchor",href:"#tuya-tyzs1l"},[(0,u.Lk)("span",null,"Tuya TYZS1L")])],-1),l=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("th"),(0,u.Lk)("th")])],-1),a=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Model"),(0,u.Lk)("td",null,"TYZS1L")],-1),s=(0,u.Lk)("td",null,"Vendor",-1),n=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Description"),(0,u.Lk)("td",null,"Led strip controller HSB")],-1),c=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Exposes"),(0,u.Lk)("td",null,"light (state, color_hs), linkquality")],-1),d=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Picture"),(0,u.Lk)("td",null,[(0,u.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TYZS1L.png",alt:"Tuya TYZS1L"})])],-1),r=(0,u.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h3><p>This device has various limitations:</p><ul><li>Changing brightness is not supported</li><li>On/off and color transition is not supported</li><li>Color can only be set via hue/saturation, example payload <code>{&quot;color&quot;:{&quot;h&quot;: 360, &quot;s&quot;: 100}}</code>.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5),q=(0,u.Fv)('<ul><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),h={},p=(0,e(19469).A)(h,[["render",function(o,t){const e=(0,u.g2)("RouteLink");return(0,u.uX)(),(0,u.CE)("div",null,[i,(0,u.Lk)("table",null,[l,(0,u.Lk)("tbody",null,[a,(0,u.Lk)("tr",null,[s,(0,u.Lk)("td",null,[(0,u.bF)(e,{to:"/supported-devices/#v=Tuya"},{default:(0,u.k6)((()=>[(0,u.eW)("Tuya")])),_:1})])]),n,c,d])]),r,(0,u.Lk)("p",null,[(0,u.Lk)("em",null,[(0,u.bF)(e,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,u.k6)((()=>[(0,u.eW)("How to use device type specific configuration")])),_:1})])]),q])}]]),g=JSON.parse('{"path":"/devices/TYZS1L.html","title":"Tuya TYZS1L control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TYZS1L control via MQTT","description":"Integrate your Tuya TYZS1L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-07-20T23:08:11.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Limitations","slug":"limitations","link":"#limitations","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724531855000},"filePathRelative":"devices/TYZS1L.md"}')}}]);