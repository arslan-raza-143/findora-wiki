(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[235],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7527:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3},s="Run a Findora TestNet Node",d={unversionedId:"general/run-a-test-node",id:"general/run-a-test-node",isDocsHomePage:!1,title:"Run a Findora TestNet Node",description:"Whether you're interested in contributing to Findora, building apps, or joining the validator pool, you'll want the ability to run your own full node.",source:"@site/docs/general/run-a-test-node.md",sourceDirName:"general",slug:"/general/run-a-test-node",permalink:"/findora-wiki/docs/general/run-a-test-node",editUrl:"https://github.com/FindoraNetwork/findora-wiki/edit/main/docs/general/run-a-test-node.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run a Findora Full Node",permalink:"/findora-wiki/docs/general/run-a-validator-node"},next:{title:"Create a Page",permalink:"/findora-wiki/docs/tutorial-basics/create-a-page"}},u=[{value:"System requirements",id:"system-requirements",children:[]},{value:"Public Ip ports requirements",id:"public-ip-ports-requirements",children:[]},{value:"Comparison of network parameters in different environments",id:"comparison-of-network-parameters-in-different-environments",children:[]},{value:"application install",id:"application-install",children:[]},{value:"config bin to env",id:"config-bin-to-env",children:[]},{value:"create config and set config",id:"create-config-and-set-config",children:[]},{value:"request network params and write  node config",id:"request-network-params-and-write--node-config",children:[]},{value:"start validator",id:"start-validator",children:[]},{value:"query all account",id:"query-all-account",children:[]},{value:"query all validator",id:"query-all-validator",children:[]},{value:"account u1  delegate  1000000 to validator v1",id:"account-u1--delegate--1000000-to-validator-v1",children:[]},{value:"undelegate  u1 undelegate",id:"undelegate--u1-undelegate",children:[]},{value:"Each additional issuance doubles the FRA supply",id:"each-additional-issuance-doubles-the-fra-supply",children:[]},{value:"fns is official offer staking terminal tools",id:"fns-is-official-offer-staking-terminal-tools",children:[]},{value:"stake operator",id:"stake-operator",children:[]},{value:"append staking amount",id:"append-staking-amount",children:[]},{value:"unstake",id:"unstake",children:[]},{value:"send transfer",id:"send-transfer",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Update",id:"update",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"run-a-findora-testnet-node"},"Run a Findora TestNet Node"),(0,l.kt)("p",null,"Whether you're interested in contributing to Findora, building apps, or joining the validator pool, you'll want the ability to run your own full node."),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Build a full node in your server and connect to the Findora Alpha/Mainnet network.\nAlpha network is for the integration and test only."),(0,l.kt)("p",null,"The test network can define assets and publish unlimited assets"),(0,l.kt)("h3",{id:"system-requirements"},"System requirements"),(0,l.kt)("h4",{id:"os"},"OS"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Linux(Ubuntu)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Macos"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","window os")),(0,l.kt)("h3",{id:"public-ip-ports-requirements"},"Public Ip ports requirements"),(0,l.kt)("p",null,"+","[Optional]"," 8667, query server(data cache from ledger)",(0,l.kt)("br",{parentName:"p"}),"\n","+","[Optional]"," 8668, ledger server(data direct from ledger)",(0,l.kt)("br",{parentName:"p"}),"\n","+","[Optional]"," 8669, transaction submission service",(0,l.kt)("br",{parentName:"p"}),"\n","+","[Optional]"," 26657, tendermint rpc service\n+26656, qtendermint p2p network service "),(0,l.kt)("h3",{id:"comparison-of-network-parameters-in-different-environments"},"Comparison of network parameters in different environments"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For the convenience of the test network, some parameters are different from the main network")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Testnet"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Mainnet"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"import block interval"),(0,l.kt)("td",{parentName:"tr",align:"center"},"6s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"16s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Unlock period"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5 * 5s"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3600 ",(0,l.kt)("em",{parentName:"td"}," 24 ")," 21s")))),(0,l.kt)("h1",{id:"test-network"},"Test network"),(0,l.kt)("h3",{id:"application-install"},"application install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/stt.linux\n\n### remove suffix\n\nmv tendermint.linux tendermint\nmv abci_validator_node.linux abci_validator_node\nmv fns.linux fns\nmv stt.linux stt\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\nchmod a+rwx  stt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o tendermint https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.macos\n\ncurl -o abci_validator_node https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.macos\n\ncurl -o fns https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.macos\n\ncurl -o stt https://github.com/FindoraNetwork/iii/releases/download/fnstest/stt.macos\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\nchmod a+rwx  stt\n")),(0,l.kt)("p",null,"The these applications above are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tendermint application "),(0,l.kt)("li",{parentName:"ul"},"findora application "),(0,l.kt)("li",{parentName:"ul"},"fns staking terminal tool ")),(0,l.kt)("h3",{id:"config-bin-to-env"},"config bin to env"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.zshrc\nsource ~/.zshrc\n')),(0,l.kt)("h3",{id:"create-config-and-set-config"},"create config and set config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# clear old data\n rm -rf /tmp/findora ~/.tendermint\n# init tendermint\ntendermint init\n")),(0,l.kt)("p",null,"after init successfully,run "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ls  ~/.tendermint/config \n")),(0,l.kt)("p",null,"Three files are displayed\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"config.toml  genesis.json  node_key.json  priv_validator_key.json\n")),(0,l.kt)("h3",{id:"request-network-params-and-write--node-config"},"request network params and write  node config"),(0,l.kt)("h4",{id:"install-jq"},"install jq"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install jq\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo brew install jq\n")),(0,l.kt)("h4",{id:"write-genesis-config"},"write genesis config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl https://dev-qa01.dev.findora.org:26657/genesis | jq -c  | perl -pi -e \'s/^{"jsonrpc":"2.0","id":-1,"result":{"genesis"://\' | perl -pi -e \'s/}}$//\'  | jq > ~/.tendermint/config/genesis.json\n')),(0,l.kt)("h4",{id:"write-tendermint-config-and-set-proposal-block-interval-5s-for-test-network"},"write tendermint config and set proposal block interval 5s for test network"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"perl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"5s\"#' ~/.tendermint/config/config.toml\n\n")),(0,l.kt)("h4",{id:"write-peer-address-and-network"},"write peer address and network"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'perl -pi -e \'s#(persistent_peers = )".*"#$1"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@dev-qa01-us-west-2-sentry-000-public.dev.findora.org:26656,d0c6e3e1589695ae6d650b288caf2efe9a998a50\\@dev-qa01-us-west-2-sentry-001-public.dev.findora.org:26656"#\' ~/.tendermint/config/config.toml\n')),(0,l.kt)("h2",null," run node"),(0,l.kt)("h3",{id:"start-validator"},"start validator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"TD_NODE_SELF_ADDR=$(cat ~/.tendermint/config/priv_validator_key.json | grep 'address' | grep -o '[^\"]\\{20,\\}') \\\nLEDGER_DIR=/tmp/findora \\\nENABLE_LEDGER_SERVICE=true \\\nENABLE_QUERY_SERVICE=true \\\nabci_validator_node >/tmp/log 2>&1 &\n")),(0,l.kt)("h4",{id:"check-server-port"},"check server port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -ltpn\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -AaLlnW\n")),(0,l.kt)("p",null,"show list:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8667",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8668",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8669",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.26658"),(0,l.kt)("p",null,"If any port is missing, the application did not start successfully, please start from the first step"),(0,l.kt)("h4",{id:"start-tendermint-application"},"start tendermint application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nohup tendermint node>/tmp/td.log 2>&1 &\n")),(0,l.kt)("h2",null," stt tools(only test network)"),(0,l.kt)("h3",{id:"query-all-account"},"query all account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"stt show -U\n")),(0,l.kt)("h3",{id:"query-all-validator"},"query all validator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," stt show -v\n")),(0,l.kt)("h3",{id:"account-u1--delegate--1000000-to-validator-v1"},"account u1  delegate  1000000 to validator v1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," stt delegate  -n $((1000000 * 1000000)) -u u1 -v v1\n\n")),(0,l.kt)("h3",{id:"undelegate--u1-undelegate"},"undelegate  u1 undelegate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"stt undelegate -u u1 -n $((1000000 * 1000000)) -v v1\n")),(0,l.kt)("h3",{id:"each-additional-issuance-doubles-the-fra-supply"},"Each additional issuance doubles the FRA supply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"stt issue\n")),(0,l.kt)("h2",null,"use fns tool"),(0,l.kt)("h3",{id:"fns-is-official-offer-staking-terminal-tools"},"fns is official offer staking terminal tools"),(0,l.kt)("p",null," set fns tool "),(0,l.kt)("h4",{id:"set-server-url"},"set server url"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns setup -S http://127.0.0.1:8669\n\n")),(0,l.kt)("h4",{id:"set-pay-and-staking-account-mnemonic"},"set pay and staking account mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"echo '[your private mnemonic]'> $(pwd)/mnemonic\nfns setup -O $(pwd)/mnemonic\n\n")),(0,l.kt)("h4",{id:"acquire-and-set-tendermint--public-key"},"acquire and set tendermint  public key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"echo $(grep -A 2 'pub_key' ~/.tendermint/config/priv_validator_key.json | grep '\"value\":' | grep -o '[^\"]\\+\"$' | sed 's/\"//') > $(pwd)/tendermint_keys\nfns setup -K $(pwd)/tendermint_keys\n")),(0,l.kt)("h3",{id:"stake-operator"},"stake operator"),(0,l.kt)("p",null,"For example, pledge 1000000, because the basic unit is 6 digits, it must be 1000000 n is the pledge amount\nR is the commission rate is the commission that someone entrusts to you, and the commission you get, -M is only for this transaction."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'fns stake -n $((1000000 * 1000000)) -R 0.2 -M "my remark"\n')),(0,l.kt)("p",null,"wait for one minutes\nquery stake result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns show\n")),(0,l.kt)("h3",{id:"append-staking-amount"},"append staking amount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns stake -a -n $((1000000 * 1000000))\n\n")),(0,l.kt)("h3",{id:"unstake"},"unstake"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns unstake -n $((1000000 * 1000000))\n")),(0,l.kt)("p",null,"claim reward "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"fns claim -n $((1000000 * 1000000))\n")),(0,l.kt)("h3",{id:"send-transfer"},"send transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'fns transfer -n $((1000000 * 1000000)) -t "fra***********************"\n')),(0,l.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"The image now located in AWS North America so the downloading speed in China will be a little bit slow and sometimes it will have intermittent handshake issues. If the script fails during image download, please run the script again."),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,"We will be updating this repo frequently, so please run git pull before you run the code."),(0,l.kt)("p",null,"We will send a notification when the new version release."))}p.isMDXComponent=!0}}]);