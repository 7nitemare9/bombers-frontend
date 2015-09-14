// Compiled by ClojureScript 1.7.48 {}
goog.provide('streams.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
streams.core.base_url = [cljs.core.str("http://"),cljs.core.str(window.location.host)].join('');
streams.core.stream_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
streams.core.temp_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
streams.core.not_nil_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_);
streams.core.read_data = (function streams$core$read_data(){
return goog.net.XhrIo.send([cljs.core.str(streams.core.base_url),cljs.core.str("/streams.json")].join(''),(function (res){
return cljs.core.reset_BANG_.call(null,streams.core.temp_state,cljs.core.filterv.call(null,streams.core.not_nil_QMARK_,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}));
});
streams.core.read_data.call(null);
streams.core.status_class_name = (function streams$core$status_class_name(state){
console.log(cljs.core.pr_str.call(null,state));

if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"onlineStatus","onlineStatus",-870019391)], null)),null)){
return "online_image_grayscale";
} else {
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"onlineStatus","onlineStatus",-870019391)], null)),"offline")){
return "online_image_grayscale";
} else {
return "online_image";
}
}
});
streams.core.current_operation = (function streams$core$current_operation(state){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"onlineStatus","onlineStatus",-870019391)], null)),"online")){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"gameTitleInfo","gameTitleInfo",1706471586),new cljs.core.Keyword(null,"titleName","titleName",309658972)], null));
} else {
return "offline or unknown";
}
});
streams.core.stream = (function streams$core$stream(state,owner){
console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(state))));

if(typeof streams.core.t7840 !== 'undefined'){
} else {

/**
* @constructor
*/
streams.core.t7840 = (function (stream,state,owner,meta7841){
this.stream = stream;
this.state = state;
this.owner = owner;
this.meta7841 = meta7841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
streams.core.t7840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7842,meta7841__$1){
var self__ = this;
var _7842__$1 = this;
return (new streams.core.t7840(self__.stream,self__.state,self__.owner,meta7841__$1));
});

streams.core.t7840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7842){
var self__ = this;
var _7842__$1 = this;
return self__.meta7841;
});

streams.core.t7840.prototype.om$core$IRender$ = true;

streams.core.t7840.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.object({"bgColor": "000000", "data": [cljs.core.str("http://www.twitch.tv/widgets/live_embed_player.swf?channel="),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(self__.state)))].join(''), "height": "188px", "width": "288px", "type": "application/x-shockwave-flash"});
});

streams.core.t7840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"stream","stream",-1119494121,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7841","meta7841",-495557594,null)], null);
});

streams.core.t7840.cljs$lang$type = true;

streams.core.t7840.cljs$lang$ctorStr = "streams.core/t7840";

streams.core.t7840.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"streams.core/t7840");
});

streams.core.__GT_t7840 = (function streams$core$stream_$___GT_t7840(stream__$1,state__$1,owner__$1,meta7841){
return (new streams.core.t7840(stream__$1,state__$1,owner__$1,meta7841));
});

}

return (new streams.core.t7840(streams$core$stream,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
streams.core.offline = (function streams$core$offline(state,owner){
console.log(cljs.core.pr_str.call(null,"offline"));

console.log(cljs.core.pr_str.call(null,state));

if(typeof streams.core.t7846 !== 'undefined'){
} else {

/**
* @constructor
*/
streams.core.t7846 = (function (offline,state,owner,meta7847){
this.offline = offline;
this.state = state;
this.owner = owner;
this.meta7847 = meta7847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
streams.core.t7846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7848,meta7847__$1){
var self__ = this;
var _7848__$1 = this;
return (new streams.core.t7846(self__.offline,self__.state,self__.owner,meta7847__$1));
});

streams.core.t7846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7848){
var self__ = this;
var _7848__$1 = this;
return self__.meta7847;
});

streams.core.t7846.prototype.om$core$IRender$ = true;

streams.core.t7846.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.img({"src": "/assets/TwitchBG.png", "width": "288", "height": "162"});
});

streams.core.t7846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"offline","offline",1532899592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7847","meta7847",-1584720253,null)], null);
});

streams.core.t7846.cljs$lang$type = true;

streams.core.t7846.cljs$lang$ctorStr = "streams.core/t7846";

streams.core.t7846.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"streams.core/t7846");
});

streams.core.__GT_t7846 = (function streams$core$offline_$___GT_t7846(offline__$1,state__$1,owner__$1,meta7847){
return (new streams.core.t7846(offline__$1,state__$1,owner__$1,meta7847));
});

}

return (new streams.core.t7846(streams$core$offline,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
streams.core.streams = (function streams$core$streams(state,owner){
console.log(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state)))));

console.log(cljs.core.pr_str.call(null,state));

console.log(cljs.core.pr_str.call(null,cljs.core.empty_QMARK_.call(null,state)));

if(typeof streams.core.t7852 !== 'undefined'){
} else {

/**
* @constructor
*/
streams.core.t7852 = (function (streams,state,owner,meta7853){
this.streams = streams;
this.state = state;
this.owner = owner;
this.meta7853 = meta7853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
streams.core.t7852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7854,meta7853__$1){
var self__ = this;
var _7854__$1 = this;
return (new streams.core.t7852(self__.streams,self__.state,self__.owner,meta7853__$1));
});

streams.core.t7852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7854){
var self__ = this;
var _7854__$1 = this;
return self__.meta7853;
});

streams.core.t7852.prototype.om$core$IRender$ = true;

streams.core.t7852.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "b_box"},React.DOM.div({"className": "b_header"},React.DOM.img({"src": "/assets/livestream.png"})),((cljs.core.empty_QMARK_.call(null,self__.state))?React.DOM.div({"className": "b_stream"},om.core.build.call(null,streams.core.offline,self__.state)):cljs.core.apply.call(null,om.dom.div,{"className": "b_stream"},om.core.build_all.call(null,streams.core.stream,self__.state))));
});

streams.core.t7852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"streams","streams",-1188651980,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7853","meta7853",1145723813,null)], null);
});

streams.core.t7852.cljs$lang$type = true;

streams.core.t7852.cljs$lang$ctorStr = "streams.core/t7852";

streams.core.t7852.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"streams.core/t7852");
});

streams.core.__GT_t7852 = (function streams$core$streams_$___GT_t7852(streams__$2,state__$1,owner__$1,meta7853){
return (new streams.core.t7852(streams__$2,state__$1,owner__$1,meta7853));
});

}

return (new streams.core.t7852(streams$core$streams,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
var c__7391__auto___7879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7879){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7879){
return (function (state_7869){
var state_val_7870 = (state_7869[(1)]);
if((state_val_7870 === (1))){
var inst_7855 = cljs.core.deref.call(null,streams.core.stream_state);
var inst_7856 = cljs.core.filterv.call(null,streams.core.not_nil_QMARK_,inst_7855);
var inst_7857 = cljs.core.reset_BANG_.call(null,streams.core.stream_state,inst_7856);
var inst_7858 = cljs.core.deref.call(null,streams.core.stream_state);
var inst_7859 = cljs.core.first.call(null,inst_7858);
var inst_7860 = (inst_7859 == null);
var inst_7861 = cljs.core.pr_str.call(null,inst_7860);
var inst_7862 = console.log(inst_7861);
var inst_7863 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_7864 = document.getElementById("b_stream");
var inst_7865 = [inst_7864];
var inst_7866 = cljs.core.PersistentHashMap.fromArrays(inst_7863,inst_7865);
var inst_7867 = om.core.root.call(null,streams.core.streams,streams.core.stream_state,inst_7866);
var state_7869__$1 = (function (){var statearr_7871 = state_7869;
(statearr_7871[(7)] = inst_7862);

(statearr_7871[(8)] = inst_7857);

return statearr_7871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7869__$1,inst_7867);
} else {
return null;
}
});})(c__7391__auto___7879))
;
return ((function (switch__7370__auto__,c__7391__auto___7879){
return (function() {
var streams$core$state_machine__7371__auto__ = null;
var streams$core$state_machine__7371__auto____0 = (function (){
var statearr_7875 = [null,null,null,null,null,null,null,null,null];
(statearr_7875[(0)] = streams$core$state_machine__7371__auto__);

(statearr_7875[(1)] = (1));

return statearr_7875;
});
var streams$core$state_machine__7371__auto____1 = (function (state_7869){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7876){if((e7876 instanceof Object)){
var ex__7374__auto__ = e7876;
var statearr_7877_7880 = state_7869;
(statearr_7877_7880[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7881 = state_7869;
state_7869 = G__7881;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
streams$core$state_machine__7371__auto__ = function(state_7869){
switch(arguments.length){
case 0:
return streams$core$state_machine__7371__auto____0.call(this);
case 1:
return streams$core$state_machine__7371__auto____1.call(this,state_7869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = streams$core$state_machine__7371__auto____0;
streams$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = streams$core$state_machine__7371__auto____1;
return streams$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7879))
})();
var state__7393__auto__ = (function (){var statearr_7878 = f__7392__auto__.call(null);
(statearr_7878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7879);

return statearr_7878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7879))
);

var c__7391__auto___7919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7919){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7919){
return (function (state_7903){
var state_val_7904 = (state_7903[(1)]);
if((state_val_7904 === (1))){
var state_7903__$1 = state_7903;
var statearr_7905_7920 = state_7903__$1;
(statearr_7905_7920[(2)] = null);

(statearr_7905_7920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7904 === (2))){
var state_7903__$1 = state_7903;
var statearr_7906_7921 = state_7903__$1;
(statearr_7906_7921[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7904 === (3))){
var inst_7901 = (state_7903[(2)]);
var state_7903__$1 = state_7903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7903__$1,inst_7901);
} else {
if((state_val_7904 === (4))){
var inst_7884 = cljs.core.async.timeout.call(null,(30000));
var state_7903__$1 = state_7903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7903__$1,(7),inst_7884);
} else {
if((state_val_7904 === (5))){
var state_7903__$1 = state_7903;
var statearr_7908_7922 = state_7903__$1;
(statearr_7908_7922[(2)] = null);

(statearr_7908_7922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7904 === (6))){
var inst_7899 = (state_7903[(2)]);
var state_7903__$1 = state_7903;
var statearr_7909_7923 = state_7903__$1;
(statearr_7909_7923[(2)] = inst_7899);

(statearr_7909_7923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7904 === (7))){
var inst_7886 = (state_7903[(2)]);
var inst_7887 = cljs.core.pr_str.call(null,"twitch update");
var inst_7888 = console.log(inst_7887);
var inst_7889 = cljs.core.deref.call(null,streams.core.temp_state);
var inst_7890 = cljs.core.pr_str.call(null,inst_7889);
var inst_7891 = console.log(inst_7890);
var inst_7892 = cljs.core.deref.call(null,streams.core.stream_state);
var inst_7893 = cljs.core.pr_str.call(null,inst_7892);
var inst_7894 = console.log(inst_7893);
var inst_7895 = streams.core.read_data.call(null);
var state_7903__$1 = (function (){var statearr_7910 = state_7903;
(statearr_7910[(7)] = inst_7894);

(statearr_7910[(8)] = inst_7888);

(statearr_7910[(9)] = inst_7891);

(statearr_7910[(10)] = inst_7895);

(statearr_7910[(11)] = inst_7886);

return statearr_7910;
})();
var statearr_7911_7924 = state_7903__$1;
(statearr_7911_7924[(2)] = null);

(statearr_7911_7924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7391__auto___7919))
;
return ((function (switch__7370__auto__,c__7391__auto___7919){
return (function() {
var streams$core$state_machine__7371__auto__ = null;
var streams$core$state_machine__7371__auto____0 = (function (){
var statearr_7915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7915[(0)] = streams$core$state_machine__7371__auto__);

(statearr_7915[(1)] = (1));

return statearr_7915;
});
var streams$core$state_machine__7371__auto____1 = (function (state_7903){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7916){if((e7916 instanceof Object)){
var ex__7374__auto__ = e7916;
var statearr_7917_7925 = state_7903;
(statearr_7917_7925[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7926 = state_7903;
state_7903 = G__7926;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
streams$core$state_machine__7371__auto__ = function(state_7903){
switch(arguments.length){
case 0:
return streams$core$state_machine__7371__auto____0.call(this);
case 1:
return streams$core$state_machine__7371__auto____1.call(this,state_7903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = streams$core$state_machine__7371__auto____0;
streams$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = streams$core$state_machine__7371__auto____1;
return streams$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7919))
})();
var state__7393__auto__ = (function (){var statearr_7918 = f__7392__auto__.call(null);
(statearr_7918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7919);

return statearr_7918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7919))
);

var c__7391__auto___7970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7970){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7970){
return (function (state_7949){
var state_val_7950 = (state_7949[(1)]);
if((state_val_7950 === (7))){
var inst_7931 = (state_7949[(2)]);
var inst_7932 = cljs.core.deref.call(null,streams.core.temp_state);
var inst_7933 = cljs.core.deref.call(null,streams.core.stream_state);
var inst_7934 = cljs.core._EQ_.call(null,inst_7932,inst_7933);
var inst_7935 = !(inst_7934);
var state_7949__$1 = (function (){var statearr_7951 = state_7949;
(statearr_7951[(7)] = inst_7931);

return statearr_7951;
})();
if(inst_7935){
var statearr_7952_7971 = state_7949__$1;
(statearr_7952_7971[(1)] = (8));

} else {
var statearr_7953_7972 = state_7949__$1;
(statearr_7953_7972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (1))){
var state_7949__$1 = state_7949;
var statearr_7954_7973 = state_7949__$1;
(statearr_7954_7973[(2)] = null);

(statearr_7954_7973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (4))){
var inst_7929 = cljs.core.async.timeout.call(null,(16));
var state_7949__$1 = state_7949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7949__$1,(7),inst_7929);
} else {
if((state_val_7950 === (6))){
var inst_7945 = (state_7949[(2)]);
var state_7949__$1 = state_7949;
var statearr_7955_7974 = state_7949__$1;
(statearr_7955_7974[(2)] = inst_7945);

(statearr_7955_7974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (3))){
var inst_7947 = (state_7949[(2)]);
var state_7949__$1 = state_7949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7949__$1,inst_7947);
} else {
if((state_val_7950 === (2))){
var state_7949__$1 = state_7949;
var statearr_7956_7975 = state_7949__$1;
(statearr_7956_7975[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (9))){
var state_7949__$1 = state_7949;
var statearr_7958_7976 = state_7949__$1;
(statearr_7958_7976[(2)] = null);

(statearr_7958_7976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (5))){
var state_7949__$1 = state_7949;
var statearr_7959_7977 = state_7949__$1;
(statearr_7959_7977[(2)] = null);

(statearr_7959_7977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (10))){
var inst_7941 = (state_7949[(2)]);
var state_7949__$1 = (function (){var statearr_7960 = state_7949;
(statearr_7960[(8)] = inst_7941);

return statearr_7960;
})();
var statearr_7961_7978 = state_7949__$1;
(statearr_7961_7978[(2)] = null);

(statearr_7961_7978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7950 === (8))){
var inst_7937 = cljs.core.deref.call(null,streams.core.temp_state);
var inst_7938 = cljs.core.reset_BANG_.call(null,streams.core.stream_state,inst_7937);
var state_7949__$1 = state_7949;
var statearr_7962_7979 = state_7949__$1;
(statearr_7962_7979[(2)] = inst_7938);

(statearr_7962_7979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7391__auto___7970))
;
return ((function (switch__7370__auto__,c__7391__auto___7970){
return (function() {
var streams$core$state_machine__7371__auto__ = null;
var streams$core$state_machine__7371__auto____0 = (function (){
var statearr_7966 = [null,null,null,null,null,null,null,null,null];
(statearr_7966[(0)] = streams$core$state_machine__7371__auto__);

(statearr_7966[(1)] = (1));

return statearr_7966;
});
var streams$core$state_machine__7371__auto____1 = (function (state_7949){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7967){if((e7967 instanceof Object)){
var ex__7374__auto__ = e7967;
var statearr_7968_7980 = state_7949;
(statearr_7968_7980[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7981 = state_7949;
state_7949 = G__7981;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
streams$core$state_machine__7371__auto__ = function(state_7949){
switch(arguments.length){
case 0:
return streams$core$state_machine__7371__auto____0.call(this);
case 1:
return streams$core$state_machine__7371__auto____1.call(this,state_7949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streams$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = streams$core$state_machine__7371__auto____0;
streams$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = streams$core$state_machine__7371__auto____1;
return streams$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7970))
})();
var state__7393__auto__ = (function (){var statearr_7969 = f__7392__auto__.call(null);
(statearr_7969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7970);

return statearr_7969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7970))
);


//# sourceMappingURL=core.js.map