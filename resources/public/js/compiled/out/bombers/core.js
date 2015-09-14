// Compiled by ClojureScript 1.7.48 {}
goog.provide('bombers.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
bombers.core.base_url = [cljs.core.str("http://"),cljs.core.str(window.location.host)].join('');
bombers.core.app_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
bombers.core.get_tweets = (function bombers$core$get_tweets(){
return goog.net.XhrIo.send([cljs.core.str(bombers.core.base_url),cljs.core.str("/tweets.json")].join(''),(function (res){
return cljs.core.reset_BANG_.call(null,bombers.core.app_data,cljs.core.take.call(null,(5),cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}));
});
bombers.core.get_tweets.call(null);
bombers.core.all_news = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
bombers.core.news_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
bombers.core.old_news_data = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
goog.net.XhrIo.send([cljs.core.str(bombers.core.base_url),cljs.core.str("/posts.json")].join(''),(function (res){
return cljs.core.reset_BANG_.call(null,bombers.core.all_news,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
bombers.core.counter = cljs.core.atom.call(null,(0));
bombers.core.pc = cljs.core.atom.call(null,false);
bombers.core.find_links = (function bombers$core$find_links(string){
return cljs.core.re_find.call(null,/http:([^ ]*)/,string);
});
bombers.core.group_together = (function bombers$core$group_together(numb,vect){
return null;
});
bombers.core.yt2img = (function bombers$core$yt2img(youtube){
return [cljs.core.str("http://img.youtube.com/vi/"),cljs.core.str(cljs.core.subs.call(null,youtube,(30))),cljs.core.str("/0.jpg")].join('');
});
bombers.core.fnt_size = (function bombers$core$fnt_size(string){
return [cljs.core.str((function (){var x__4787__auto__ = (28);
var y__4788__auto__ = ((1000) / cljs.core.count.call(null,string));
return ((x__4787__auto__ < y__4788__auto__) ? x__4787__auto__ : y__4788__auto__);
})())].join('');
});
bombers.core.oldnews_fnt_size = (function bombers$core$oldnews_fnt_size(string){
return [cljs.core.str((function (){var x__4787__auto__ = (16);
var y__4788__auto__ = ((600) / cljs.core.count.call(null,string));
return ((x__4787__auto__ < y__4788__auto__) ? x__4787__auto__ : y__4788__auto__);
})())].join('');
});
bombers.core.index_of = (function bombers$core$index_of(arr,item){
var a = arr;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),item)){
return i;
} else {
var G__7468 = cljs.core.next.call(null,a);
var G__7469 = (i + (1));
a = G__7468;
i = G__7469;
continue;
}
break;
}
});
bombers.core.set_active = (function bombers$core$set_active(array,index){
return cljs.core.update_in.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__7470_SHARP_){
return cljs.core.assoc.call(null,p1__7470_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068),(0));
}),array)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.inc);
});
bombers.core.background = (function bombers$core$background(news){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(news),(1))){
return "#232323";
} else {
return "#333333";
}
});
bombers.core.is_active = (function bombers$core$is_active(news,style){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(news),(1))){
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0px 1px 1px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#FBB600",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"-3px 3px 3px #222222"], null)));
} else {
return cljs.core.clj__GT_js.call(null,style);
}
});
bombers.core.link_color = (function bombers$core$link_color(news){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(news),(1))){
return "#FBB600";
} else {
return "#966000";
}
});
bombers.core.inc_active = (function bombers$core$inc_active(data){
if((cljs.core.deref.call(null,bombers.core.counter) < (4))){
cljs.core.reset_BANG_.call(null,bombers.core.counter,(cljs.core.deref.call(null,bombers.core.counter) + (1)));
} else {
cljs.core.reset_BANG_.call(null,bombers.core.counter,(0));
}

return bombers.core.set_active.call(null,data,cljs.core.deref.call(null,bombers.core.counter));
});
bombers.core.slide = (function bombers$core$slide(id){
var c__7391__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto__){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto__){
return (function (state_7514){
var state_val_7515 = (state_7514[(1)]);
if((state_val_7515 === (1))){
var inst_7498 = document.getElementById(id);
var inst_7499 = inst_7498.style;
var inst_7500 = inst_7499.transition = "none";
var inst_7501 = document.getElementById(id);
var inst_7502 = inst_7501.style;
var inst_7503 = inst_7502.marginLeft = "0px";
var inst_7504 = cljs.core.async.timeout.call(null,(5));
var state_7514__$1 = (function (){var statearr_7516 = state_7514;
(statearr_7516[(7)] = inst_7500);

(statearr_7516[(8)] = inst_7503);

return statearr_7516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7514__$1,(2),inst_7504);
} else {
if((state_val_7515 === (2))){
var inst_7506 = (state_7514[(2)]);
var inst_7507 = document.getElementById(id);
var inst_7508 = inst_7507.style;
var inst_7509 = inst_7508.transition = "margin-left 1s";
var inst_7510 = document.getElementById(id);
var inst_7511 = inst_7510.style;
var inst_7512 = inst_7511.marginLeft = "-650px";
var state_7514__$1 = (function (){var statearr_7517 = state_7514;
(statearr_7517[(9)] = inst_7509);

(statearr_7517[(10)] = inst_7506);

return statearr_7517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7514__$1,inst_7512);
} else {
return null;
}
}
});})(c__7391__auto__))
;
return ((function (switch__7370__auto__,c__7391__auto__){
return (function() {
var bombers$core$slide_$_state_machine__7371__auto__ = null;
var bombers$core$slide_$_state_machine__7371__auto____0 = (function (){
var statearr_7521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7521[(0)] = bombers$core$slide_$_state_machine__7371__auto__);

(statearr_7521[(1)] = (1));

return statearr_7521;
});
var bombers$core$slide_$_state_machine__7371__auto____1 = (function (state_7514){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7522){if((e7522 instanceof Object)){
var ex__7374__auto__ = e7522;
var statearr_7523_7525 = state_7514;
(statearr_7523_7525[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7526 = state_7514;
state_7514 = G__7526;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
bombers$core$slide_$_state_machine__7371__auto__ = function(state_7514){
switch(arguments.length){
case 0:
return bombers$core$slide_$_state_machine__7371__auto____0.call(this);
case 1:
return bombers$core$slide_$_state_machine__7371__auto____1.call(this,state_7514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bombers$core$slide_$_state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = bombers$core$slide_$_state_machine__7371__auto____0;
bombers$core$slide_$_state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = bombers$core$slide_$_state_machine__7371__auto____1;
return bombers$core$slide_$_state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto__))
})();
var state__7393__auto__ = (function (){var statearr_7524 = f__7392__auto__.call(null);
(statearr_7524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto__);

return statearr_7524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto__))
);

return c__7391__auto__;
});
bombers.core.tweet = (function bombers$core$tweet(tweet__$1,owner){
if(typeof bombers.core.t7530 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7530 = (function (tweet,owner,meta7531){
this.tweet = tweet;
this.owner = owner;
this.meta7531 = meta7531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7532,meta7531__$1){
var self__ = this;
var _7532__$1 = this;
return (new bombers.core.t7530(self__.tweet,self__.owner,meta7531__$1));
});

bombers.core.t7530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7532){
var self__ = this;
var _7532__$1 = this;
return self__.meta7531;
});

bombers.core.t7530.prototype.om$core$IRender$ = true;

bombers.core.t7530.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.tr(null,React.DOM.td(null,React.DOM.img({"src": new cljs.core.Keyword(null,"profile_image_url","profile_image_url",1111690564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.tweet)), "height": "24", "width": "24"})),React.DOM.td({"style": {"textAlign": "left", "textIndent": "0%"}},React.DOM.a({"href": cljs.core.first.call(null,bombers.core.find_links.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.tweet))), "style": {"font-size": "11px", "margin": "0.3% 3%", "display": "inline-block"}},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.tweet))));
});

bombers.core.t7530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tweet","tweet",775948275,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tweet","tweet",775948275,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7531","meta7531",-1329909958,null)], null);
});

bombers.core.t7530.cljs$lang$type = true;

bombers.core.t7530.cljs$lang$ctorStr = "bombers.core/t7530";

bombers.core.t7530.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7530");
});

bombers.core.__GT_t7530 = (function bombers$core$tweet_$___GT_t7530(tweet__$2,owner__$1,meta7531){
return (new bombers.core.t7530(tweet__$2,owner__$1,meta7531));
});

}

return (new bombers.core.t7530(tweet__$1,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.tweet_app = (function bombers$core$tweet_app(tweets,owner){
if(typeof bombers.core.t7536 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7536 = (function (tweet_app,tweets,owner,meta7537){
this.tweet_app = tweet_app;
this.tweets = tweets;
this.owner = owner;
this.meta7537 = meta7537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7538,meta7537__$1){
var self__ = this;
var _7538__$1 = this;
return (new bombers.core.t7536(self__.tweet_app,self__.tweets,self__.owner,meta7537__$1));
});

bombers.core.t7536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7538){
var self__ = this;
var _7538__$1 = this;
return self__.meta7537;
});

bombers.core.t7536.prototype.om$core$IRender$ = true;

bombers.core.t7536.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "b_box", "style": {"min-height": "295px"}},React.DOM.div({"className": "b_header"},React.DOM.img({"src": "/assets/twitter.png"}),cljs.core.apply.call(null,om.dom.table,null,om.core.build_all.call(null,bombers.core.tweet,self__.tweets))));
});

bombers.core.t7536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tweet_app","tweet_app",-661762263,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tweets","tweets",-754893787,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"tweets","tweets",-754893787,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7537","meta7537",203105835,null)], null);
});

bombers.core.t7536.cljs$lang$type = true;

bombers.core.t7536.cljs$lang$ctorStr = "bombers.core/t7536";

bombers.core.t7536.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7536");
});

bombers.core.__GT_t7536 = (function bombers$core$tweet_app_$___GT_t7536(tweet_app__$1,tweets__$1,owner__$1,meta7537){
return (new bombers.core.t7536(tweet_app__$1,tweets__$1,owner__$1,meta7537));
});

}

return (new bombers.core.t7536(bombers$core$tweet_app,tweets,owner,cljs.core.PersistentArrayMap.EMPTY));
});
var c__7391__auto___7575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7575){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7575){
return (function (state_7558){
var state_val_7559 = (state_7558[(1)]);
if((state_val_7559 === (1))){
var state_7558__$1 = state_7558;
var statearr_7560_7576 = state_7558__$1;
(statearr_7560_7576[(2)] = null);

(statearr_7560_7576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7559 === (2))){
var inst_7540 = cljs.core.deref.call(null,bombers.core.app_data);
var inst_7541 = cljs.core.empty_QMARK_.call(null,inst_7540);
var state_7558__$1 = state_7558;
if(inst_7541){
var statearr_7561_7577 = state_7558__$1;
(statearr_7561_7577[(1)] = (4));

} else {
var statearr_7562_7578 = state_7558__$1;
(statearr_7562_7578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7559 === (3))){
var inst_7551 = (state_7558[(2)]);
var inst_7552 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_7553 = document.getElementById("tweets");
var inst_7554 = [inst_7553];
var inst_7555 = cljs.core.PersistentHashMap.fromArrays(inst_7552,inst_7554);
var inst_7556 = om.core.root.call(null,bombers.core.tweet_app,bombers.core.app_data,inst_7555);
var state_7558__$1 = (function (){var statearr_7563 = state_7558;
(statearr_7563[(7)] = inst_7551);

return statearr_7563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7558__$1,inst_7556);
} else {
if((state_val_7559 === (4))){
var inst_7543 = cljs.core.async.timeout.call(null,(16));
var state_7558__$1 = state_7558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7558__$1,(7),inst_7543);
} else {
if((state_val_7559 === (5))){
var state_7558__$1 = state_7558;
var statearr_7564_7579 = state_7558__$1;
(statearr_7564_7579[(2)] = null);

(statearr_7564_7579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7559 === (6))){
var inst_7549 = (state_7558[(2)]);
var state_7558__$1 = state_7558;
var statearr_7565_7580 = state_7558__$1;
(statearr_7565_7580[(2)] = inst_7549);

(statearr_7565_7580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7559 === (7))){
var inst_7545 = (state_7558[(2)]);
var state_7558__$1 = (function (){var statearr_7566 = state_7558;
(statearr_7566[(8)] = inst_7545);

return statearr_7566;
})();
var statearr_7567_7581 = state_7558__$1;
(statearr_7567_7581[(2)] = null);

(statearr_7567_7581[(1)] = (2));


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
});})(c__7391__auto___7575))
;
return ((function (switch__7370__auto__,c__7391__auto___7575){
return (function() {
var bombers$core$state_machine__7371__auto__ = null;
var bombers$core$state_machine__7371__auto____0 = (function (){
var statearr_7571 = [null,null,null,null,null,null,null,null,null];
(statearr_7571[(0)] = bombers$core$state_machine__7371__auto__);

(statearr_7571[(1)] = (1));

return statearr_7571;
});
var bombers$core$state_machine__7371__auto____1 = (function (state_7558){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7572){if((e7572 instanceof Object)){
var ex__7374__auto__ = e7572;
var statearr_7573_7582 = state_7558;
(statearr_7573_7582[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7583 = state_7558;
state_7558 = G__7583;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
bombers$core$state_machine__7371__auto__ = function(state_7558){
switch(arguments.length){
case 0:
return bombers$core$state_machine__7371__auto____0.call(this);
case 1:
return bombers$core$state_machine__7371__auto____1.call(this,state_7558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = bombers$core$state_machine__7371__auto____0;
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = bombers$core$state_machine__7371__auto____1;
return bombers$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7575))
})();
var state__7393__auto__ = (function (){var statearr_7574 = f__7392__auto__.call(null);
(statearr_7574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7575);

return statearr_7574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7575))
);

bombers.core.other_news_links = (function bombers$core$other_news_links(news,owner){
if(typeof bombers.core.t7587 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7587 = (function (other_news_links,news,owner,meta7588){
this.other_news_links = other_news_links;
this.news = news;
this.owner = owner;
this.meta7588 = meta7588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7589,meta7588__$1){
var self__ = this;
var _7589__$1 = this;
return (new bombers.core.t7587(self__.other_news_links,self__.news,self__.owner,meta7588__$1));
});

bombers.core.t7587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7589){
var self__ = this;
var _7589__$1 = this;
return self__.meta7588;
});

bombers.core.t7587.prototype.om$core$IRender$ = true;

bombers.core.t7587.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": [cljs.core.str("nl"),cljs.core.str(bombers.core.index_of.call(null,cljs.core.deref.call(null,bombers.core.news_data),self__.news))].join(''), "style": bombers.core.is_active.call(null,self__.news,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),bombers.core.background.call(null,self__.news),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"18%",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0px 0px 4px 4px",new cljs.core.Keyword(null,"height","height",1025178622),"99%",new cljs.core.Keyword(null,"margin","margin",-995903681),"-0.8% 0.8% 1% 0.8%"], null)), "onMouseEnter": ((function (this$__$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.news,new cljs.core.Keyword(null,"active","active",1895962068),((function (this$__$1){
return (function (xs){
((document.getElementById([cljs.core.str("nl"),cljs.core.str(cljs.core.deref.call(null,bombers.core.counter))].join(''))["style"])["border-style"] = "none");

((document.getElementById([cljs.core.str("nl"),cljs.core.str(cljs.core.deref.call(null,bombers.core.counter))].join(''))["style"])["box-shadow"] = "0px 0px 0px #000000");

document.getElementById([cljs.core.str("nl"),cljs.core.str(cljs.core.deref.call(null,bombers.core.counter))].join('')).style.background = "#333333";

document.getElementById([cljs.core.str("nla"),cljs.core.str(cljs.core.deref.call(null,bombers.core.counter))].join('')).style.color = "#966000";

cljs.core.reset_BANG_.call(null,bombers.core.counter,bombers.core.index_of.call(null,cljs.core.deref.call(null,bombers.core.news_data),cljs.core.deref.call(null,self__.news)));

cljs.core.reset_BANG_.call(null,bombers.core.news_data,bombers.core.set_active.call(null,cljs.core.deref.call(null,bombers.core.news_data),cljs.core.deref.call(null,bombers.core.counter)));

document.getElementById([cljs.core.str("nl"),cljs.core.str(cljs.core.deref.call(null,bombers.core.counter))].join('')).style.background = "#232323";

document.getElementById([cljs.core.str("nla"),cljs.core.str(cljs.core.deref.call(null,bombers.core.counter))].join('')).style.color = "#FBB600";

cljs.core.reset_BANG_.call(null,bombers.core.counter,bombers.core.index_of.call(null,cljs.core.deref.call(null,bombers.core.news_data),cljs.core.deref.call(null,self__.news)));

return (1);
});})(this$__$1))
);
});})(this$__$1))
, "onClick": ((function (this$__$1){
return (function (){
return window.location.href = [cljs.core.str("/posts/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.news)))].join('');
});})(this$__$1))
},React.DOM.br(null),React.DOM.a({"href": [cljs.core.str("/posts/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.news))].join(''), "id": [cljs.core.str("nla"),cljs.core.str(bombers.core.index_of.call(null,cljs.core.deref.call(null,bombers.core.news_data),self__.news))].join(''), "style": {"color": bombers.core.link_color.call(null,self__.news), "text-decoration": "none", "font-size": "x-small"}},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.news)));
});

bombers.core.t7587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"other_news_links","other_news_links",-2133701131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"news","news",828694085,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"news","news",828694085,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7588","meta7588",246190903,null)], null);
});

bombers.core.t7587.cljs$lang$type = true;

bombers.core.t7587.cljs$lang$ctorStr = "bombers.core/t7587";

bombers.core.t7587.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7587");
});

bombers.core.__GT_t7587 = (function bombers$core$other_news_links_$___GT_t7587(other_news_links__$1,news__$1,owner__$1,meta7588){
return (new bombers.core.t7587(other_news_links__$1,news__$1,owner__$1,meta7588));
});

}

return (new bombers.core.t7587(bombers$core$other_news_links,news,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.other_news = (function bombers$core$other_news(data,owner){
if(typeof bombers.core.t7593 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7593 = (function (other_news,data,owner,meta7594){
this.other_news = other_news;
this.data = data;
this.owner = owner;
this.meta7594 = meta7594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7595,meta7594__$1){
var self__ = this;
var _7595__$1 = this;
return (new bombers.core.t7593(self__.other_news,self__.data,self__.owner,meta7594__$1));
});

bombers.core.t7593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7595){
var self__ = this;
var _7595__$1 = this;
return self__.meta7594;
});

bombers.core.t7593.prototype.om$core$IRender$ = true;

bombers.core.t7593.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "other_news", "style": {"font-size": "xx-small", "float": "left", "height": "70px", "width": "100%", "padding": "5px", "color": "#fff", "background": "rgba(50,50,50,255)"}},om.core.build_all.call(null,bombers.core.other_news_links,self__.data));
});

bombers.core.t7593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"other_news","other_news",2003091545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7594","meta7594",833899009,null)], null);
});

bombers.core.t7593.cljs$lang$type = true;

bombers.core.t7593.cljs$lang$ctorStr = "bombers.core/t7593";

bombers.core.t7593.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7593");
});

bombers.core.__GT_t7593 = (function bombers$core$other_news_$___GT_t7593(other_news__$1,data__$1,owner__$1,meta7594){
return (new bombers.core.t7593(other_news__$1,data__$1,owner__$1,meta7594));
});

}

return (new bombers.core.t7593(bombers$core$other_news,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.top_news_render = (function bombers$core$top_news_render(post,owner){
if(typeof bombers.core.t7599 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7599 = (function (top_news_render,post,owner,meta7600){
this.top_news_render = top_news_render;
this.post = post;
this.owner = owner;
this.meta7600 = meta7600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7601,meta7600__$1){
var self__ = this;
var _7601__$1 = this;
return (new bombers.core.t7599(self__.top_news_render,self__.post,self__.owner,meta7600__$1));
});

bombers.core.t7599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7601){
var self__ = this;
var _7601__$1 = this;
return self__.meta7600;
});

bombers.core.t7599.prototype.om$core$IRender$ = true;

bombers.core.t7599.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "title", "style": {"margin-top": "40px", "width": "650px"}},React.DOM.a({"href": [cljs.core.str("/posts/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post)))].join(''), "style": {"font-family": "Myriad", "font-weight": "bold", "font-size": bombers.core.fnt_size.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post))), "text-decoration": "none", "color": "#FBB600", "text-shadow": "black -3px 3px"}},clojure.string.upper_case.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post)))));
});

bombers.core.t7599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top_news_render","top_news_render",-1195738858,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7600","meta7600",1570360137,null)], null);
});

bombers.core.t7599.cljs$lang$type = true;

bombers.core.t7599.cljs$lang$ctorStr = "bombers.core/t7599";

bombers.core.t7599.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7599");
});

bombers.core.__GT_t7599 = (function bombers$core$top_news_render_$___GT_t7599(top_news_render__$1,post__$1,owner__$1,meta7600){
return (new bombers.core.t7599(top_news_render__$1,post__$1,owner__$1,meta7600));
});

}

return (new bombers.core.t7599(bombers$core$top_news_render,post,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.top_news = (function bombers$core$top_news(post,owner){
if(typeof bombers.core.t7605 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7605 = (function (top_news,post,owner,meta7606){
this.top_news = top_news;
this.post = post;
this.owner = owner;
this.meta7606 = meta7606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7607,meta7606__$1){
var self__ = this;
var _7607__$1 = this;
return (new bombers.core.t7605(self__.top_news,self__.post,self__.owner,meta7606__$1));
});

bombers.core.t7605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7607){
var self__ = this;
var _7607__$1 = this;
return self__.meta7606;
});

bombers.core.t7605.prototype.om$core$IRender$ = true;

bombers.core.t7605.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "top_news", "style": {"border-right": "1ipx solid #777", "text-align": "center", "transition": "none", "float": "left", "overflow": "hidden", "width": "1300px", "background": "url(/assets/newsbg.png)", "display": "flex", "height": "100px"}},((((cljs.core.deref.call(null,bombers.core.counter) - (1)) < (0)))?om.core.build.call(null,bombers.core.top_news_render,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,self__.post,(4)),self__.owner],null))):om.core.build.call(null,bombers.core.top_news_render,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,self__.post,(cljs.core.deref.call(null,bombers.core.counter) - (1)),self__.owner)],null)))),om.core.build.call(null,bombers.core.top_news_render,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,self__.post,cljs.core.deref.call(null,bombers.core.counter)),self__.owner],null))));
});

bombers.core.t7605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top_news","top_news",-995880400,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7606","meta7606",-1605394855,null)], null);
});

bombers.core.t7605.cljs$lang$type = true;

bombers.core.t7605.cljs$lang$ctorStr = "bombers.core/t7605";

bombers.core.t7605.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7605");
});

bombers.core.__GT_t7605 = (function bombers$core$top_news_$___GT_t7605(top_news__$1,post__$1,owner__$1,meta7606){
return (new bombers.core.t7605(top_news__$1,post__$1,owner__$1,meta7606));
});

}

return (new bombers.core.t7605(bombers$core$top_news,post,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.tray = (function bombers$core$tray(app,owner){
if(typeof bombers.core.t7611 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7611 = (function (tray,app,owner,meta7612){
this.tray = tray;
this.app = app;
this.owner = owner;
this.meta7612 = meta7612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7613,meta7612__$1){
var self__ = this;
var _7613__$1 = this;
return (new bombers.core.t7611(self__.tray,self__.app,self__.owner,meta7612__$1));
});

bombers.core.t7611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7613){
var self__ = this;
var _7613__$1 = this;
return self__.meta7612;
});

bombers.core.t7611.prototype.om$core$IRender$ = true;

bombers.core.t7611.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "tray", "style": {"float": "left", "position": "absolute", "width": "100%", "height": "170px", "border-top": "1px solid #777", "bottom": "0"}},om.core.build.call(null,bombers.core.top_news,self__.app),om.core.build.call(null,bombers.core.other_news,self__.app));
});

bombers.core.t7611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tray","tray",-1749304801,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7612","meta7612",-1769664660,null)], null);
});

bombers.core.t7611.cljs$lang$type = true;

bombers.core.t7611.cljs$lang$ctorStr = "bombers.core/t7611";

bombers.core.t7611.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7611");
});

bombers.core.__GT_t7611 = (function bombers$core$tray_$___GT_t7611(tray__$1,app__$1,owner__$1,meta7612){
return (new bombers.core.t7611(tray__$1,app__$1,owner__$1,meta7612));
});

}

return (new bombers.core.t7611(bombers$core$tray,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.splash_render = (function bombers$core$splash_render(post,owner){
if(typeof bombers.core.t7617 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7617 = (function (splash_render,post,owner,meta7618){
this.splash_render = splash_render;
this.post = post;
this.owner = owner;
this.meta7618 = meta7618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7619,meta7618__$1){
var self__ = this;
var _7619__$1 = this;
return (new bombers.core.t7617(self__.splash_render,self__.post,self__.owner,meta7618__$1));
});

bombers.core.t7617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7619){
var self__ = this;
var _7619__$1 = this;
return self__.meta7618;
});

bombers.core.t7617.prototype.om$core$IRender$ = true;

bombers.core.t7617.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post))))){
return React.DOM.img({"src": cljs.core.first.call(null,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post))), "width": "650", "height": "365"});
} else {
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"youtube","youtube",-1932361085).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post))))){
return React.DOM.img({"src": bombers.core.yt2img.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"youtube","youtube",-1932361085).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.post)))), "width": "650", "height": "365", "style": {"margin": "0px", "padding": "0px", "border": "none"}});
} else {
return React.DOM.img({"src": "http://i.imgur.com/gasUYAG.jpg", "width": "650"});

}
}
});

bombers.core.t7617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"splash_render","splash_render",-2099054970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7618","meta7618",752220278,null)], null);
});

bombers.core.t7617.cljs$lang$type = true;

bombers.core.t7617.cljs$lang$ctorStr = "bombers.core/t7617";

bombers.core.t7617.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7617");
});

bombers.core.__GT_t7617 = (function bombers$core$splash_render_$___GT_t7617(splash_render__$1,post__$1,owner__$1,meta7618){
return (new bombers.core.t7617(splash_render__$1,post__$1,owner__$1,meta7618));
});

}

return (new bombers.core.t7617(bombers$core$splash_render,post,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.splash = (function bombers$core$splash(post,owner){
if(typeof bombers.core.t7623 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7623 = (function (splash,post,owner,meta7624){
this.splash = splash;
this.post = post;
this.owner = owner;
this.meta7624 = meta7624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7625,meta7624__$1){
var self__ = this;
var _7625__$1 = this;
return (new bombers.core.t7623(self__.splash,self__.post,self__.owner,meta7624__$1));
});

bombers.core.t7623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7625){
var self__ = this;
var _7625__$1 = this;
return self__.meta7624;
});

bombers.core.t7623.prototype.om$core$IRender$ = true;

bombers.core.t7623.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"id": "slider", "style": {"width": "1300px", "height": "365px", "display": "flex", "transition": "none", "margin-left": "0px"}, "onClick": ((function (this$__$1){
return (function (){
return window.location.href = [cljs.core.str("/posts/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,bombers.core.news_data),cljs.core.deref.call(null,bombers.core.counter))))].join('');
});})(this$__$1))
},((((cljs.core.deref.call(null,bombers.core.counter) - (1)) < (0)))?om.core.build.call(null,bombers.core.splash_render,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,self__.post,(4))],null))):om.core.build.call(null,bombers.core.splash_render,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,self__.post,(cljs.core.deref.call(null,bombers.core.counter) - (1)))],null)))),om.core.build.call(null,bombers.core.splash_render,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,self__.post,cljs.core.deref.call(null,bombers.core.counter))],null))));
});

bombers.core.t7623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"splash","splash",517770731,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"post","post",1910229214,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7624","meta7624",238831304,null)], null);
});

bombers.core.t7623.cljs$lang$type = true;

bombers.core.t7623.cljs$lang$ctorStr = "bombers.core/t7623";

bombers.core.t7623.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7623");
});

bombers.core.__GT_t7623 = (function bombers$core$splash_$___GT_t7623(splash__$1,post__$1,owner__$1,meta7624){
return (new bombers.core.t7623(splash__$1,post__$1,owner__$1,meta7624));
});

}

return (new bombers.core.t7623(bombers$core$splash,post,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.old_news_row = (function bombers$core$old_news_row(data,owner){
if(typeof bombers.core.t7629 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7629 = (function (old_news_row,data,owner,meta7630){
this.old_news_row = old_news_row;
this.data = data;
this.owner = owner;
this.meta7630 = meta7630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7631,meta7630__$1){
var self__ = this;
var _7631__$1 = this;
return (new bombers.core.t7629(self__.old_news_row,self__.data,self__.owner,meta7630__$1));
});

bombers.core.t7629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7631){
var self__ = this;
var _7631__$1 = this;
return self__.meta7630;
});

bombers.core.t7629.prototype.om$core$IRender$ = true;

bombers.core.t7629.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "col-lg-4 visible-lg", "style": {"padding": "10px 5px 0px 5px"}},React.DOM.div({"className": "b_box", "style": {"height": "130px", "overflow": "hidden", "margin-top": "15px"}},React.DOM.img({"src": (cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(self__.data)))?cljs.core.first.call(null,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(self__.data)):(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"youtube","youtube",-1932361085).cljs$core$IFn$_invoke$arity$1(self__.data)))?bombers.core.yt2img.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"youtube","youtube",-1932361085).cljs$core$IFn$_invoke$arity$1(self__.data))):"http://i.imgur.com/gasUYAG.jpg"
))})),React.DOM.div({"style": {"text-align": "center", "float": "left", "margin-left": "1px", "margin-top": "-41px", "width": "95%", "background": "#303030", "opacity": "0.98", "position": "absolute", "height": "40px"}},React.DOM.a({"href": [cljs.core.str("/posts/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''), "style": {"font-family": "Myriad", "font-weight": "bold", "font-size": bombers.core.oldnews_fnt_size.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)), "text-decoration": "none", "color": "#FBB600", "text-shadow": "black -2px"}},clojure.string.upper_case.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

bombers.core.t7629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"old-news-row","old-news-row",-12772987,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7630","meta7630",90292249,null)], null);
});

bombers.core.t7629.cljs$lang$type = true;

bombers.core.t7629.cljs$lang$ctorStr = "bombers.core/t7629";

bombers.core.t7629.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7629");
});

bombers.core.__GT_t7629 = (function bombers$core$old_news_row_$___GT_t7629(old_news_row__$1,data__$1,owner__$1,meta7630){
return (new bombers.core.t7629(old_news_row__$1,data__$1,owner__$1,meta7630));
});

}

return (new bombers.core.t7629(bombers$core$old_news_row,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.news_archive = (function bombers$core$news_archive(data,owner){
if(typeof bombers.core.t7635 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7635 = (function (news_archive,data,owner,meta7636){
this.news_archive = news_archive;
this.data = data;
this.owner = owner;
this.meta7636 = meta7636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7637,meta7636__$1){
var self__ = this;
var _7637__$1 = this;
return (new bombers.core.t7635(self__.news_archive,self__.data,self__.owner,meta7636__$1));
});

bombers.core.t7635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7637){
var self__ = this;
var _7637__$1 = this;
return self__.meta7636;
});

bombers.core.t7635.prototype.om$core$IRender$ = true;

bombers.core.t7635.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.a({"href": "/posts/archive"},React.DOM.div({"className": "col-lg-12", "style": {"height": "22px", "background": "url(/assets/archive.png) no-repeat center"}}));
});

bombers.core.t7635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"news-archive","news-archive",1729255794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7636","meta7636",94251541,null)], null);
});

bombers.core.t7635.cljs$lang$type = true;

bombers.core.t7635.cljs$lang$ctorStr = "bombers.core/t7635";

bombers.core.t7635.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7635");
});

bombers.core.__GT_t7635 = (function bombers$core$news_archive_$___GT_t7635(news_archive__$1,data__$1,owner__$1,meta7636){
return (new bombers.core.t7635(news_archive__$1,data__$1,owner__$1,meta7636));
});

}

return (new bombers.core.t7635(bombers$core$news_archive,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.old_news_holder = (function bombers$core$old_news_holder(data,owner){
console.log(cljs.core.pr_str.call(null,"holder"));

if(typeof bombers.core.t7641 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7641 = (function (old_news_holder,data,owner,meta7642){
this.old_news_holder = old_news_holder;
this.data = data;
this.owner = owner;
this.meta7642 = meta7642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7643,meta7642__$1){
var self__ = this;
var _7643__$1 = this;
return (new bombers.core.t7641(self__.old_news_holder,self__.data,self__.owner,meta7642__$1));
});

bombers.core.t7641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7643){
var self__ = this;
var _7643__$1 = this;
return self__.meta7642;
});

bombers.core.t7641.prototype.om$core$IRender$ = true;

bombers.core.t7641.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,bombers.core.old_news_row,self__.data));
});

bombers.core.t7641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"old-news-holder","old-news-holder",-1253089888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7642","meta7642",-2140613956,null)], null);
});

bombers.core.t7641.cljs$lang$type = true;

bombers.core.t7641.cljs$lang$ctorStr = "bombers.core/t7641";

bombers.core.t7641.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7641");
});

bombers.core.__GT_t7641 = (function bombers$core$old_news_holder_$___GT_t7641(old_news_holder__$1,data__$1,owner__$1,meta7642){
return (new bombers.core.t7641(old_news_holder__$1,data__$1,owner__$1,meta7642));
});

}

return (new bombers.core.t7641(bombers$core$old_news_holder,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.old_news = (function bombers$core$old_news(data,owner){
if(typeof bombers.core.t7647 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7647 = (function (old_news,data,owner,meta7648){
this.old_news = old_news;
this.data = data;
this.owner = owner;
this.meta7648 = meta7648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7649,meta7648__$1){
var self__ = this;
var _7649__$1 = this;
return (new bombers.core.t7647(self__.old_news,self__.data,self__.owner,meta7648__$1));
});

bombers.core.t7647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7649){
var self__ = this;
var _7649__$1 = this;
return self__.meta7648;
});

bombers.core.t7647.prototype.om$core$IRender$ = true;

bombers.core.t7647.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,bombers.core.old_news_holder,self__.data),React.DOM.div({"className": "b_box", "style": {"background-color": "#303030", "display": "inline-block", "margin-top": "20px"}},om.core.build.call(null,bombers.core.news_archive,self__.data)));
});

bombers.core.t7647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"old-news","old-news",-1601054250,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7648","meta7648",271275105,null)], null);
});

bombers.core.t7647.cljs$lang$type = true;

bombers.core.t7647.cljs$lang$ctorStr = "bombers.core/t7647";

bombers.core.t7647.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7647");
});

bombers.core.__GT_t7647 = (function bombers$core$old_news_$___GT_t7647(old_news__$1,data__$1,owner__$1,meta7648){
return (new bombers.core.t7647(old_news__$1,data__$1,owner__$1,meta7648));
});

}

return (new bombers.core.t7647(bombers$core$old_news,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
bombers.core.news = (function bombers$core$news(data,owner){
if(typeof bombers.core.t7653 !== 'undefined'){
} else {

/**
* @constructor
*/
bombers.core.t7653 = (function (news,data,owner,meta7654){
this.news = news;
this.data = data;
this.owner = owner;
this.meta7654 = meta7654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
bombers.core.t7653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7655,meta7654__$1){
var self__ = this;
var _7655__$1 = this;
return (new bombers.core.t7653(self__.news,self__.data,self__.owner,meta7654__$1));
});

bombers.core.t7653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7655){
var self__ = this;
var _7655__$1 = this;
return self__.meta7654;
});

bombers.core.t7653.prototype.om$core$IRender$ = true;

bombers.core.t7653.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "news", "onMouseEnter": ((function (this$__$1){
return (function (){
return cljs.core.reset_BANG_.call(null,bombers.core.pc,true);
});})(this$__$1))
, "onMouseLeave": ((function (this$__$1){
return (function (){
return cljs.core.reset_BANG_.call(null,bombers.core.pc,false);
});})(this$__$1))
},React.DOM.div({"className": "post_image", "style": {"height": "435px", "overflow": "hidden", "position": "relative"}},om.core.build.call(null,bombers.core.splash,self__.data),om.core.build.call(null,bombers.core.tray,self__.data)));
});

bombers.core.t7653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"news","news",828694085,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7654","meta7654",-104422065,null)], null);
});

bombers.core.t7653.cljs$lang$type = true;

bombers.core.t7653.cljs$lang$ctorStr = "bombers.core/t7653";

bombers.core.t7653.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"bombers.core/t7653");
});

bombers.core.__GT_t7653 = (function bombers$core$news_$___GT_t7653(news__$1,data__$1,owner__$1,meta7654){
return (new bombers.core.t7653(news__$1,data__$1,owner__$1,meta7654));
});

}

return (new bombers.core.t7653(bombers$core$news,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
var c__7391__auto___7715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7715){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7715){
return (function (state_7698){
var state_val_7699 = (state_7698[(1)]);
if((state_val_7699 === (1))){
var state_7698__$1 = state_7698;
var statearr_7700_7716 = state_7698__$1;
(statearr_7700_7716[(2)] = null);

(statearr_7700_7716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7699 === (2))){
var inst_7657 = cljs.core.deref.call(null,bombers.core.all_news);
var inst_7658 = cljs.core.empty_QMARK_.call(null,inst_7657);
var state_7698__$1 = state_7698;
if(inst_7658){
var statearr_7701_7717 = state_7698__$1;
(statearr_7701_7717[(1)] = (4));

} else {
var statearr_7702_7718 = state_7698__$1;
(statearr_7702_7718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7699 === (3))){
var inst_7668 = (state_7698[(2)]);
var inst_7669 = cljs.core.deref.call(null,bombers.core.all_news);
var inst_7670 = cljs.core.take.call(null,(5),inst_7669);
var inst_7671 = cljs.core.vec.call(null,inst_7670);
var inst_7672 = cljs.core.reset_BANG_.call(null,bombers.core.news_data,inst_7671);
var inst_7673 = cljs.core.deref.call(null,bombers.core.all_news);
var inst_7674 = cljs.core.drop.call(null,(5),inst_7673);
var inst_7675 = cljs.core.take.call(null,(6),inst_7674);
var inst_7676 = cljs.core.vec.call(null,inst_7675);
var inst_7677 = cljs.core.reset_BANG_.call(null,bombers.core.old_news_data,inst_7676);
var inst_7678 = cljs.core.deref.call(null,bombers.core.news_data);
var inst_7679 = cljs.core.pr_str.call(null,inst_7678);
var inst_7680 = console.log(inst_7679);
var inst_7681 = cljs.core.deref.call(null,bombers.core.news_data);
var inst_7682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7683 = [(0),new cljs.core.Keyword(null,"active","active",1895962068)];
var inst_7684 = (new cljs.core.PersistentVector(null,2,(5),inst_7682,inst_7683,null));
var inst_7685 = cljs.core.update_in.call(null,inst_7681,inst_7684,cljs.core.inc);
var inst_7686 = cljs.core.reset_BANG_.call(null,bombers.core.news_data,inst_7685);
var inst_7687 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_7688 = document.getElementById("news");
var inst_7689 = [inst_7688];
var inst_7690 = cljs.core.PersistentHashMap.fromArrays(inst_7687,inst_7689);
var inst_7691 = om.core.root.call(null,bombers.core.news,bombers.core.news_data,inst_7690);
var inst_7692 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_7693 = document.getElementById("old-news");
var inst_7694 = [inst_7693];
var inst_7695 = cljs.core.PersistentHashMap.fromArrays(inst_7692,inst_7694);
var inst_7696 = om.core.root.call(null,bombers.core.old_news,bombers.core.old_news_data,inst_7695);
var state_7698__$1 = (function (){var statearr_7703 = state_7698;
(statearr_7703[(7)] = inst_7691);

(statearr_7703[(8)] = inst_7686);

(statearr_7703[(9)] = inst_7680);

(statearr_7703[(10)] = inst_7668);

(statearr_7703[(11)] = inst_7672);

(statearr_7703[(12)] = inst_7677);

return statearr_7703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7698__$1,inst_7696);
} else {
if((state_val_7699 === (4))){
var inst_7660 = cljs.core.async.timeout.call(null,(16));
var state_7698__$1 = state_7698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7698__$1,(7),inst_7660);
} else {
if((state_val_7699 === (5))){
var state_7698__$1 = state_7698;
var statearr_7704_7719 = state_7698__$1;
(statearr_7704_7719[(2)] = null);

(statearr_7704_7719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7699 === (6))){
var inst_7666 = (state_7698[(2)]);
var state_7698__$1 = state_7698;
var statearr_7705_7720 = state_7698__$1;
(statearr_7705_7720[(2)] = inst_7666);

(statearr_7705_7720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7699 === (7))){
var inst_7662 = (state_7698[(2)]);
var state_7698__$1 = (function (){var statearr_7706 = state_7698;
(statearr_7706[(13)] = inst_7662);

return statearr_7706;
})();
var statearr_7707_7721 = state_7698__$1;
(statearr_7707_7721[(2)] = null);

(statearr_7707_7721[(1)] = (2));


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
});})(c__7391__auto___7715))
;
return ((function (switch__7370__auto__,c__7391__auto___7715){
return (function() {
var bombers$core$state_machine__7371__auto__ = null;
var bombers$core$state_machine__7371__auto____0 = (function (){
var statearr_7711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7711[(0)] = bombers$core$state_machine__7371__auto__);

(statearr_7711[(1)] = (1));

return statearr_7711;
});
var bombers$core$state_machine__7371__auto____1 = (function (state_7698){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7712){if((e7712 instanceof Object)){
var ex__7374__auto__ = e7712;
var statearr_7713_7722 = state_7698;
(statearr_7713_7722[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7723 = state_7698;
state_7698 = G__7723;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
bombers$core$state_machine__7371__auto__ = function(state_7698){
switch(arguments.length){
case 0:
return bombers$core$state_machine__7371__auto____0.call(this);
case 1:
return bombers$core$state_machine__7371__auto____1.call(this,state_7698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = bombers$core$state_machine__7371__auto____0;
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = bombers$core$state_machine__7371__auto____1;
return bombers$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7715))
})();
var state__7393__auto__ = (function (){var statearr_7714 = f__7392__auto__.call(null);
(statearr_7714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7715);

return statearr_7714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7715))
);

var c__7391__auto___7753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7753){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7753){
return (function (state_7737){
var state_val_7738 = (state_7737[(1)]);
if((state_val_7738 === (1))){
var state_7737__$1 = state_7737;
var statearr_7739_7754 = state_7737__$1;
(statearr_7739_7754[(2)] = null);

(statearr_7739_7754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7738 === (2))){
var state_7737__$1 = state_7737;
var statearr_7740_7755 = state_7737__$1;
(statearr_7740_7755[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7738 === (3))){
var inst_7735 = (state_7737[(2)]);
var state_7737__$1 = state_7737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7737__$1,inst_7735);
} else {
if((state_val_7738 === (4))){
var inst_7726 = cljs.core.async.timeout.call(null,(30000));
var state_7737__$1 = state_7737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7737__$1,(7),inst_7726);
} else {
if((state_val_7738 === (5))){
var state_7737__$1 = state_7737;
var statearr_7742_7756 = state_7737__$1;
(statearr_7742_7756[(2)] = null);

(statearr_7742_7756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7738 === (6))){
var inst_7733 = (state_7737[(2)]);
var state_7737__$1 = state_7737;
var statearr_7743_7757 = state_7737__$1;
(statearr_7743_7757[(2)] = inst_7733);

(statearr_7743_7757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7738 === (7))){
var inst_7728 = (state_7737[(2)]);
var inst_7729 = bombers.core.get_tweets.call(null);
var state_7737__$1 = (function (){var statearr_7744 = state_7737;
(statearr_7744[(7)] = inst_7729);

(statearr_7744[(8)] = inst_7728);

return statearr_7744;
})();
var statearr_7745_7758 = state_7737__$1;
(statearr_7745_7758[(2)] = null);

(statearr_7745_7758[(1)] = (2));


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
});})(c__7391__auto___7753))
;
return ((function (switch__7370__auto__,c__7391__auto___7753){
return (function() {
var bombers$core$state_machine__7371__auto__ = null;
var bombers$core$state_machine__7371__auto____0 = (function (){
var statearr_7749 = [null,null,null,null,null,null,null,null,null];
(statearr_7749[(0)] = bombers$core$state_machine__7371__auto__);

(statearr_7749[(1)] = (1));

return statearr_7749;
});
var bombers$core$state_machine__7371__auto____1 = (function (state_7737){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7750){if((e7750 instanceof Object)){
var ex__7374__auto__ = e7750;
var statearr_7751_7759 = state_7737;
(statearr_7751_7759[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7760 = state_7737;
state_7737 = G__7760;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
bombers$core$state_machine__7371__auto__ = function(state_7737){
switch(arguments.length){
case 0:
return bombers$core$state_machine__7371__auto____0.call(this);
case 1:
return bombers$core$state_machine__7371__auto____1.call(this,state_7737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = bombers$core$state_machine__7371__auto____0;
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = bombers$core$state_machine__7371__auto____1;
return bombers$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7753))
})();
var state__7393__auto__ = (function (){var statearr_7752 = f__7392__auto__.call(null);
(statearr_7752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7753);

return statearr_7752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7753))
);

var c__7391__auto___7818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___7818){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___7818){
return (function (state_7792){
var state_val_7793 = (state_7792[(1)]);
if((state_val_7793 === (7))){
var inst_7768 = (function (){return ((function (state_val_7793,c__7391__auto___7818){
return (function (){
bombers.core.slide.call(null,"slider");

return bombers.core.slide.call(null,"top_news");
});
;})(state_val_7793,c__7391__auto___7818))
})();
var inst_7769 = inst_7768.call(null);
var state_7792__$1 = state_7792;
var statearr_7794_7819 = state_7792__$1;
(statearr_7794_7819[(2)] = inst_7769);

(statearr_7794_7819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (1))){
var state_7792__$1 = state_7792;
var statearr_7795_7820 = state_7792__$1;
(statearr_7795_7820[(2)] = null);

(statearr_7795_7820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (4))){
var inst_7765 = cljs.core.deref.call(null,bombers.core.pc);
var inst_7766 = inst_7765 === false;
var state_7792__$1 = state_7792;
if(cljs.core.truth_(inst_7766)){
var statearr_7796_7821 = state_7792__$1;
(statearr_7796_7821[(1)] = (7));

} else {
var statearr_7797_7822 = state_7792__$1;
(statearr_7797_7822[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (13))){
var inst_7784 = (state_7792[(2)]);
var state_7792__$1 = (function (){var statearr_7798 = state_7792;
(statearr_7798[(7)] = inst_7784);

return statearr_7798;
})();
var statearr_7799_7823 = state_7792__$1;
(statearr_7799_7823[(2)] = null);

(statearr_7799_7823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (6))){
var inst_7788 = (state_7792[(2)]);
var state_7792__$1 = state_7792;
var statearr_7800_7824 = state_7792__$1;
(statearr_7800_7824[(2)] = inst_7788);

(statearr_7800_7824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (3))){
var inst_7790 = (state_7792[(2)]);
var state_7792__$1 = state_7792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7792__$1,inst_7790);
} else {
if((state_val_7793 === (12))){
var state_7792__$1 = state_7792;
var statearr_7801_7825 = state_7792__$1;
(statearr_7801_7825[(2)] = null);

(statearr_7801_7825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (2))){
var inst_7762 = cljs.core.deref.call(null,bombers.core.news_data);
var inst_7763 = cljs.core.every_QMARK_.call(null,cljs.core.seq,inst_7762);
var state_7792__$1 = state_7792;
if(inst_7763){
var statearr_7802_7826 = state_7792__$1;
(statearr_7802_7826[(1)] = (4));

} else {
var statearr_7803_7827 = state_7792__$1;
(statearr_7803_7827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (11))){
var inst_7779 = cljs.core.deref.call(null,bombers.core.news_data);
var inst_7780 = bombers.core.inc_active.call(null,inst_7779);
var inst_7781 = cljs.core.reset_BANG_.call(null,bombers.core.news_data,inst_7780);
var state_7792__$1 = state_7792;
var statearr_7804_7828 = state_7792__$1;
(statearr_7804_7828[(2)] = inst_7781);

(statearr_7804_7828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (9))){
var inst_7772 = (state_7792[(2)]);
var inst_7773 = cljs.core.async.timeout.call(null,(5000));
var state_7792__$1 = (function (){var statearr_7805 = state_7792;
(statearr_7805[(8)] = inst_7772);

return statearr_7805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7792__$1,(10),inst_7773);
} else {
if((state_val_7793 === (5))){
var state_7792__$1 = state_7792;
var statearr_7806_7829 = state_7792__$1;
(statearr_7806_7829[(2)] = null);

(statearr_7806_7829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (10))){
var inst_7775 = (state_7792[(2)]);
var inst_7776 = cljs.core.deref.call(null,bombers.core.pc);
var inst_7777 = inst_7776 === false;
var state_7792__$1 = (function (){var statearr_7807 = state_7792;
(statearr_7807[(9)] = inst_7775);

return statearr_7807;
})();
if(cljs.core.truth_(inst_7777)){
var statearr_7808_7830 = state_7792__$1;
(statearr_7808_7830[(1)] = (11));

} else {
var statearr_7809_7831 = state_7792__$1;
(statearr_7809_7831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7793 === (8))){
var state_7792__$1 = state_7792;
var statearr_7810_7832 = state_7792__$1;
(statearr_7810_7832[(2)] = null);

(statearr_7810_7832[(1)] = (9));


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
}
}
}
});})(c__7391__auto___7818))
;
return ((function (switch__7370__auto__,c__7391__auto___7818){
return (function() {
var bombers$core$state_machine__7371__auto__ = null;
var bombers$core$state_machine__7371__auto____0 = (function (){
var statearr_7814 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7814[(0)] = bombers$core$state_machine__7371__auto__);

(statearr_7814[(1)] = (1));

return statearr_7814;
});
var bombers$core$state_machine__7371__auto____1 = (function (state_7792){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_7792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e7815){if((e7815 instanceof Object)){
var ex__7374__auto__ = e7815;
var statearr_7816_7833 = state_7792;
(statearr_7816_7833[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7834 = state_7792;
state_7792 = G__7834;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
bombers$core$state_machine__7371__auto__ = function(state_7792){
switch(arguments.length){
case 0:
return bombers$core$state_machine__7371__auto____0.call(this);
case 1:
return bombers$core$state_machine__7371__auto____1.call(this,state_7792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = bombers$core$state_machine__7371__auto____0;
bombers$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = bombers$core$state_machine__7371__auto____1;
return bombers$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___7818))
})();
var state__7393__auto__ = (function (){var statearr_7817 = f__7392__auto__.call(null);
(statearr_7817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___7818);

return statearr_7817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___7818))
);


//# sourceMappingURL=core.js.map