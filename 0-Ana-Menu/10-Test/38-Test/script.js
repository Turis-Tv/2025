const { useState } = React;

function App() {var _countries$find;
  const [countries] = useState([
  { code: 'DZ', name: 'Algeria' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'EG', name: 'Egypt' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'JO', name: 'Jordan' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LY', name: 'Libya' },
  { code: 'MA', name: 'Morocco' },
  { code: 'OM', name: 'Oman' },
  { code: 'PS', name: 'Palestine' },
  { code: 'QA', name: 'Qatar' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SD', name: 'Sudan' },
  { code: 'SY', name: 'Syria' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'YE', name: 'Yemen' }]);


  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentChannel, setCurrentChannel] = useState(null);
  const [showMatches, setShowMatches] = useState(false);

  const channelsData = {
    'DZ': [
    { id: 1, name: 'ENTV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCcf5rldeyN5s2_0d9RIgR-w' }],

    'BH': [
    { id: 1, name: 'Bahrain TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCmLwGCK3fAbaJtchEhqLNhQ' }],

    'EG': [
    { id: 1, name: 'Nile TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCQH2IDkg2ZUqMk7Pph5XYFA' }],

    'IQ': [
    { id: 1, name: 'Al Iraqiya', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UC2nxL2fs5WRt7p6D3lZ_pYw' }],

    'JO': [
    { id: 1, name: 'Jordan TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UC1j5BY6m1YXaqk6DHEUzyFQ' }],

    'KW': [
    { id: 1, name: 'Kuwait TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCMgd2TKWGQxexOUDPrvEJQQ' }],

    'LB': [
    { id: 1, name: 'LBC', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UC4t-MTZYN8pJ3jAC4snxJ7Q' }],

    'LY': [
    { id: 1, name: 'Libya Al-Ahrar', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UC_m9-uwfrjA3m6KTFAa4f4A' }],

    'MA': [
    { id: 1, name: '2M TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCWOSQ4S5L3Wl5ZZ9c29ZyLg' }],

    'OM': [
    { id: 1, name: 'Oman TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UC8nOtZnvq2j8gpt3OVOFJHw' }],

    'PS': [
    { id: 1, name: 'Palestine TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCQXwhbC6OfRZsGeXZH9gqlA' }],

    'QA': [
    { id: 1, name: 'Al Jazeera', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCfiwzLy-8yKzIbsmZTzxDgw' }],

    'SA': [
    { id: 1, name: 'Saudi TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCkBbQ6bV0HLWbGHKcflIN8Q' }],

    'SD': [
    { id: 1, name: 'Sudan TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCQqknpe5Mtn3u6zQUGJtMWA' }],

    'SY': [
    { id: 1, name: 'Syrian TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UC66X_FvOfJaLHJAnhHOhbQw' }],

    'TN': [
    { id: 1, name: 'Tunisia TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCpTzls-g8cUGD5b1C1VHZaw' }],

    'AE': [
    { id: 1, name: 'Dubai TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCOcNYdf74S8pmkflE-NEvZQ' }],

    'YE': [
    { id: 1, name: 'Yemen TV', logo: 'https://via.placeholder.com/100', url: 'https://www.youtube.com/embed/live_stream?channel=UCVR0VQw_3VzHHGSYGHmsiRg' }] };



  const channels = selectedCountry ? channelsData[selectedCountry] : [];

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("header", { className: "header" }, /*#__PURE__*/
    React.createElement("h1", null, "Hayder TV"), /*#__PURE__*/
    React.createElement("button", { onClick: () => setShowMatches(true) }, "\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u064A\u0648\u0645")),

    showMatches ? /*#__PURE__*/
    React.createElement("iframe", {
      src: "https://shootz.yalla-shoot-tv.live/home18/",
      title: "\u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u064A\u0648\u0645",
      frameBorder: "0",
      allowFullScreen: true,
      style: { width: '100%', height: '100vh' } }) : /*#__PURE__*/


    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("h2", null, "\u0627\u0644\u0628\u0644\u062F\u0627\u0646"), /*#__PURE__*/
    React.createElement("div", { className: "country-list" },
    countries.map((country) => /*#__PURE__*/
    React.createElement("div", { key: country.code, className: "country-card", onClick: () => setSelectedCountry(country.code) }, /*#__PURE__*/
    React.createElement("h3", null, country.name))))),




    selectedCountry && /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("h2", null, "\u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u062A\u0644\u0641\u0632\u064A\u0648\u0646\u064A\u0629 \u0641\u064A ", (_countries$find = countries.find(country => country.code === selectedCountry)) === null || _countries$find === void 0 ? void 0 : _countries$find.name), /*#__PURE__*/
    React.createElement("div", { className: "channel-list" },
    channels.map((channel) => /*#__PURE__*/
    React.createElement("div", { key: channel.id, className: "channel-card", onClick: () => setCurrentChannel(channel) }, /*#__PURE__*/
    React.createElement("img", { src: channel.logo, alt: channel.name }), /*#__PURE__*/
    React.createElement("h3", null, channel.name))))),





    currentChannel && /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("h2", null, currentChannel.name), /*#__PURE__*/
    React.createElement("div", { className: "video-container" }, /*#__PURE__*/
    React.createElement("iframe", {
      src: currentChannel.url,
      title: currentChannel.name,
      frameBorder: "0",
      allowFullScreen: true,
      style: { width: '100%', height: '500px' } }))))));








}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));