"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[22781],{84498:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>u,data:()=>b});var o=n(86904);const a=(0,o.Lk)("h1",{id:"enocean-ptm-216z",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#enocean-ptm-216z"},[(0,o.Lk)("span",null,"EnOcean PTM 216Z")])],-1),r=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1),d=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"PTM 216Z")],-1),s=(0,o.Lk)("td",null,"Vendor",-1),i=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Pushbutton transmitter module")],-1),l=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"action, linkquality")],-1),c=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PTM-216Z.png",alt:"EnOcean PTM 216Z"})])],-1),p=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><p>Binding may work between this module and the actuator, depending if the actuator supports the Zigbee Green Power standard &amp; if the actuators user interface supports &quot;Finding &amp; binding&quot; or &quot;EZ-mode&quot;. For more information, contact the supplier of the actuator.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>For model built after 2020, pairing may be done via NFC or the physical buttons.</p><p><strong>NFC:</strong></p><p>The easiest way is to use a compatible smartphone (iOS, android) with NFC capabily.</p><p>The required tool “EnOcean Tool” is available from the <a href="https://play.google.com/store/apps/details?id=de.enocean.easytool&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Play Store</a> and from the <a href="https://apps.apple.com/de/app/enocean-tool/id1497283202" target="_blank" rel="noopener noreferrer">Apple Store</a>.</p><p>For the first configuration, the QR-Code behind the PTM 216Z shall be scanned in order to get the built-in NFC pin to unlock the device. Then, the user may define a specific one if required. More details are available in the documentation <a href="https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/PTM-216Z-User-Manual-1.pdf" target="_blank" rel="noopener noreferrer">EnOcean PTM 216Z manual chapter 4 (NFC interface)</a>.</p><p><strong>Physical buttons:</strong></p><p>This device has 4 buttons:</p><table><thead><tr><th>Number</th><th>Button</th><th>Position</th></tr></thead><tbody><tr><td>1</td><td>A0</td><td>top left</td></tr><tr><td>2</td><td>A1</td><td>bottom left</td></tr><tr><td>3</td><td>B0</td><td>top right</td></tr><tr><td>4</td><td>B1</td><td>bottom right</td></tr></tbody></table><p>In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.</p><p>To pair it hold the corresponding button for that channel for 7 seconds or more.</p><table><thead><tr><th>Button</th><th>Channel</th></tr></thead><tbody><tr><td>A0</td><td>15</td></tr><tr><td>A1</td><td>20</td></tr><tr><td>B0</td><td>11</td></tr><tr><td>B1</td><td>25</td></tr></tbody></table><p>Once the device is paired you need to confirm the channel. To do this press A1 and B0 together. Important: don&#39;t press any other buttons between this and the pairing.</p><p>In case you want to pair it to a different channel you have to factory reset the device. This can be done by pressing all buttons (A0, A1, B0 and B1) simultaneously for at least 7 seconds.</p><p>This device can work on any channel, not only 11, 15, 20 or 25. For this, please refer to the <a href="https://www.enocean.com/wp-content/uploads/downloads-produkte/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/PTM-216Z-User-Manual-2.pdf" target="_blank" rel="noopener noreferrer">EnOcean PTM 216Z manual chapter 3.6.3</a>.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>press_2</code>, <code>press_1_and_2</code>, <code>press_3</code>, <code>press_1_and_3</code>, <code>press_3_and_4</code>, <code>press_1_and_2_and_3</code>, <code>press_4</code>, <code>press_1_and_4</code>, <code>press_2_and_4</code>, <code>press_1_and_2_and_4</code>, <code>press_3_and_4</code>, <code>press_1_and_3_and_4</code>, <code>press_2_and_3_and_4</code>, <code>press_all</code>, <code>press_energy_bar</code>, <code>release</code>, <code>short_press_2_of_2</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),h={},u=(0,n(19469).A)(h,[["render",function(e,t){const n=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[a,(0,o.Lk)("table",null,[r,(0,o.Lk)("tbody",null,[d,(0,o.Lk)("tr",null,[s,(0,o.Lk)("td",null,[(0,o.bF)(n,{to:"/supported-devices/#v=EnOcean"},{default:(0,o.k6)((()=>[(0,o.eW)("EnOcean")])),_:1})])]),i,l,c])]),p])}]]),b=JSON.parse('{"path":"/devices/PTM_216Z.html","title":"EnOcean PTM 216Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EnOcean PTM 216Z control via MQTT","description":"Integrate your EnOcean PTM 216Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724531855000},"filePathRelative":"devices/PTM_216Z.md"}')}}]);