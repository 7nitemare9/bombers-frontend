// Compiled by ClojureScript 1.7.48 {}
goog.provide('shouts.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
shouts.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dexrion",new cljs.core.Keyword(null,"message","message",-406056002),"test message"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sork pippi",new cljs.core.Keyword(null,"message","message",-406056002),"this is another test message"], null)], null));
shouts.core.user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"not logged in"], null));
shouts.core.base_url = [cljs.core.str("http://"),cljs.core.str(window.location.host)].join('');
shouts.core.read_data = (function shouts$core$read_data(){
goog.net.XhrIo.send([cljs.core.str(shouts.core.base_url),cljs.core.str("/shouts.json")].join(''),(function (res){
return cljs.core.reset_BANG_.call(null,shouts.core.app_state,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));

return goog.net.XhrIo.send([cljs.core.str(shouts.core.base_url),cljs.core.str("/shouts/show.json")].join(''),(function (res){
return cljs.core.reset_BANG_.call(null,shouts.core.user,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
});
shouts.core.read_data.call(null);
shouts.core.update_fn = (function shouts$core$update_fn(data,owner){
if((cljs.core._EQ_.call(null,om.core.get_node.call(null,owner,"message").value,"")) || (cljs.core._EQ_.call(null,om.core.get_node.call(null,owner,"name").value,""))){
return window.alert("Must supply both message and name");
} else {
cljs.core.reset_BANG_.call(null,shouts.core.app_state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),om.core.get_node.call(null,owner,"name").value,new cljs.core.Keyword(null,"message","message",-406056002),om.core.get_node.call(null,owner,"message").value], null)], null),cljs.core.deref.call(null,shouts.core.app_state)));

cljs_http.client.post.call(null,[cljs.core.str(shouts.core.base_url),cljs.core.str("/shouts")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shout","shout",186018337),cljs.core.first.call(null,cljs.core.deref.call(null,shouts.core.app_state))], null)], null));

return om.core.get_node.call(null,owner,"message").value = "";
}
});
shouts.core.delete_comment = (function shouts$core$delete_comment(id){
return cljs_http.client.delete$.call(null,[cljs.core.str(shouts.core.base_url),cljs.core.str("/shouts/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_method","_method",-1879292821),"delete"], null)], null));
});
shouts.core.comment_form = (function shouts$core$comment_form(state,owner){
if(typeof shouts.core.t7987 !== 'undefined'){
} else {

/**
* @constructor
*/
shouts.core.t7987 = (function (comment_form,state,owner,meta7988){
this.comment_form = comment_form;
this.state = state;
this.owner = owner;
this.meta7988 = meta7988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shouts.core.t7987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7989,meta7988__$1){
var self__ = this;
var _7989__$1 = this;
return (new shouts.core.t7987(self__.comment_form,self__.state,self__.owner,meta7988__$1));
});

shouts.core.t7987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7989){
var self__ = this;
var _7989__$1 = this;
return self__.meta7988;
});

shouts.core.t7987.prototype.om$core$IRender$ = true;

shouts.core.t7987.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"name": "utf8", "type": "hidden", "value": "true"}),om.dom.textarea.call(null,{"style": {"width": "97%", "height": "70px"}, "id": "shouts_message", "name": "shout[messagr]", "row": "3", "ref": "message"}),React.DOM.p({"style": {"color": "#FBB600", "width": "24%", "display": "inline", "margin": "2%"}},"Name:"),om.dom.input.call(null,{"id": "shout_name", "name": "shout[name]", "type": "text", "ref": "name", "style": {"width": "50%"}}),om.dom.input.call(null,{"name": "commit", "onClick": ((function (this$__$1){
return (function (){
return shouts.core.update_fn.call(null,self__.state,self__.owner);
});})(this$__$1))
, "type": "submit", "value": "Submit", "style": {"width": "24%"}}));
});

shouts.core.t7987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-form","comment-form",661949950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7988","meta7988",-1714921661,null)], null);
});

shouts.core.t7987.cljs$lang$type = true;

shouts.core.t7987.cljs$lang$ctorStr = "shouts.core/t7987";

shouts.core.t7987.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"shouts.core/t7987");
});

shouts.core.__GT_t7987 = (function shouts$core$comment_form_$___GT_t7987(comment_form__$1,state__$1,owner__$1,meta7988){
return (new shouts.core.t7987(comment_form__$1,state__$1,owner__$1,meta7988));
});

}

return (new shouts.core.t7987(shouts$core$comment_form,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
shouts.core.comment = (function shouts$core$comment(state,owner){
if(typeof shouts.core.t7993 !== 'undefined'){
} else {

/**
* @constructor
*/
shouts.core.t7993 = (function (comment,state,owner,meta7994){
this.comment = comment;
this.state = state;
this.owner = owner;
this.meta7994 = meta7994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shouts.core.t7993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7995,meta7994__$1){
var self__ = this;
var _7995__$1 = this;
return (new shouts.core.t7993(self__.comment,self__.state,self__.owner,meta7994__$1));
});

shouts.core.t7993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7995){
var self__ = this;
var _7995__$1 = this;
return self__.meta7994;
});

shouts.core.t7993.prototype.om$core$IRender$ = true;

shouts.core.t7993.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.tr(null,React.DOM.td({"style": {"color": "#FBB600", "fontSize": "small"}},[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.state)),cljs.core.str(":")].join('')),React.DOM.td({"style": {"fontSize": "small"}},new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(self__.state)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shouts.core.user)),"admin"))?React.DOM.td({"style": {"fontSize": "xx-small"}, "onClick": ((function (this$__$1){
return (function (){
return shouts.core.delete_comment.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
});})(this$__$1))
},"Delete"):null));
});

shouts.core.t7993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta7994","meta7994",587241212,null)], null);
});

shouts.core.t7993.cljs$lang$type = true;

shouts.core.t7993.cljs$lang$ctorStr = "shouts.core/t7993";

shouts.core.t7993.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"shouts.core/t7993");
});

shouts.core.__GT_t7993 = (function shouts$core$comment_$___GT_t7993(comment__$1,state__$1,owner__$1,meta7994){
return (new shouts.core.t7993(comment__$1,state__$1,owner__$1,meta7994));
});

}

return (new shouts.core.t7993(shouts$core$comment,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
shouts.core.comments = (function shouts$core$comments(state,owner){
if(typeof shouts.core.t7999 !== 'undefined'){
} else {

/**
* @constructor
*/
shouts.core.t7999 = (function (comments,state,owner,meta8000){
this.comments = comments;
this.state = state;
this.owner = owner;
this.meta8000 = meta8000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shouts.core.t7999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8001,meta8000__$1){
var self__ = this;
var _8001__$1 = this;
return (new shouts.core.t7999(self__.comments,self__.state,self__.owner,meta8000__$1));
});

shouts.core.t7999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8001){
var self__ = this;
var _8001__$1 = this;
return self__.meta8000;
});

shouts.core.t7999.prototype.om$core$IRender$ = true;

shouts.core.t7999.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,shouts.core.comment,self__.state));
});

shouts.core.t7999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta8000","meta8000",181494434,null)], null);
});

shouts.core.t7999.cljs$lang$type = true;

shouts.core.t7999.cljs$lang$ctorStr = "shouts.core/t7999";

shouts.core.t7999.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"shouts.core/t7999");
});

shouts.core.__GT_t7999 = (function shouts$core$comments_$___GT_t7999(comments__$1,state__$1,owner__$1,meta8000){
return (new shouts.core.t7999(comments__$1,state__$1,owner__$1,meta8000));
});

}

return (new shouts.core.t7999(shouts$core$comments,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
shouts.core.comment_box = (function shouts$core$comment_box(state,owner){
if(typeof shouts.core.t8005 !== 'undefined'){
} else {

/**
* @constructor
*/
shouts.core.t8005 = (function (comment_box,state,owner,meta8006){
this.comment_box = comment_box;
this.state = state;
this.owner = owner;
this.meta8006 = meta8006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shouts.core.t8005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8007,meta8006__$1){
var self__ = this;
var _8007__$1 = this;
return (new shouts.core.t8005(self__.comment_box,self__.state,self__.owner,meta8006__$1));
});

shouts.core.t8005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8007){
var self__ = this;
var _8007__$1 = this;
return self__.meta8006;
});

shouts.core.t8005.prototype.om$core$IRender$ = true;

shouts.core.t8005.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "b_box"},React.DOM.div({"className": "b_header"},React.DOM.img({"src": "/assets/shout.png"})),React.DOM.div({"style": {"height": "200px", "overflow": "auto"}},React.DOM.table(null,om.core.build.call(null,shouts.core.comments,self__.state))),om.core.build.call(null,shouts.core.comment_form,self__.state));
});

shouts.core.t8005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-box","comment-box",1794001596,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta8006","meta8006",1216003188,null)], null);
});

shouts.core.t8005.cljs$lang$type = true;

shouts.core.t8005.cljs$lang$ctorStr = "shouts.core/t8005";

shouts.core.t8005.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"shouts.core/t8005");
});

shouts.core.__GT_t8005 = (function shouts$core$comment_box_$___GT_t8005(comment_box__$1,state__$1,owner__$1,meta8006){
return (new shouts.core.t8005(comment_box__$1,state__$1,owner__$1,meta8006));
});

}

return (new shouts.core.t8005(shouts$core$comment_box,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,shouts.core.comment_box,shouts.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("shouts")], null));
var c__7391__auto___8037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7391__auto___8037){
return (function (){
var f__7392__auto__ = (function (){var switch__7370__auto__ = ((function (c__7391__auto___8037){
return (function (state_8021){
var state_val_8022 = (state_8021[(1)]);
if((state_val_8022 === (1))){
var state_8021__$1 = state_8021;
var statearr_8023_8038 = state_8021__$1;
(statearr_8023_8038[(2)] = null);

(statearr_8023_8038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8022 === (2))){
var state_8021__$1 = state_8021;
var statearr_8024_8039 = state_8021__$1;
(statearr_8024_8039[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8022 === (3))){
var inst_8019 = (state_8021[(2)]);
var state_8021__$1 = state_8021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8021__$1,inst_8019);
} else {
if((state_val_8022 === (4))){
var inst_8010 = cljs.core.async.timeout.call(null,(5000));
var state_8021__$1 = state_8021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8021__$1,(7),inst_8010);
} else {
if((state_val_8022 === (5))){
var state_8021__$1 = state_8021;
var statearr_8026_8040 = state_8021__$1;
(statearr_8026_8040[(2)] = null);

(statearr_8026_8040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8022 === (6))){
var inst_8017 = (state_8021[(2)]);
var state_8021__$1 = state_8021;
var statearr_8027_8041 = state_8021__$1;
(statearr_8027_8041[(2)] = inst_8017);

(statearr_8027_8041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8022 === (7))){
var inst_8012 = (state_8021[(2)]);
var inst_8013 = shouts.core.read_data.call(null);
var state_8021__$1 = (function (){var statearr_8028 = state_8021;
(statearr_8028[(7)] = inst_8012);

(statearr_8028[(8)] = inst_8013);

return statearr_8028;
})();
var statearr_8029_8042 = state_8021__$1;
(statearr_8029_8042[(2)] = null);

(statearr_8029_8042[(1)] = (2));


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
});})(c__7391__auto___8037))
;
return ((function (switch__7370__auto__,c__7391__auto___8037){
return (function() {
var shouts$core$state_machine__7371__auto__ = null;
var shouts$core$state_machine__7371__auto____0 = (function (){
var statearr_8033 = [null,null,null,null,null,null,null,null,null];
(statearr_8033[(0)] = shouts$core$state_machine__7371__auto__);

(statearr_8033[(1)] = (1));

return statearr_8033;
});
var shouts$core$state_machine__7371__auto____1 = (function (state_8021){
while(true){
var ret_value__7372__auto__ = (function (){try{while(true){
var result__7373__auto__ = switch__7370__auto__.call(null,state_8021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7373__auto__;
}
break;
}
}catch (e8034){if((e8034 instanceof Object)){
var ex__7374__auto__ = e8034;
var statearr_8035_8043 = state_8021;
(statearr_8035_8043[(5)] = ex__7374__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8044 = state_8021;
state_8021 = G__8044;
continue;
} else {
return ret_value__7372__auto__;
}
break;
}
});
shouts$core$state_machine__7371__auto__ = function(state_8021){
switch(arguments.length){
case 0:
return shouts$core$state_machine__7371__auto____0.call(this);
case 1:
return shouts$core$state_machine__7371__auto____1.call(this,state_8021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shouts$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$0 = shouts$core$state_machine__7371__auto____0;
shouts$core$state_machine__7371__auto__.cljs$core$IFn$_invoke$arity$1 = shouts$core$state_machine__7371__auto____1;
return shouts$core$state_machine__7371__auto__;
})()
;})(switch__7370__auto__,c__7391__auto___8037))
})();
var state__7393__auto__ = (function (){var statearr_8036 = f__7392__auto__.call(null);
(statearr_8036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7391__auto___8037);

return statearr_8036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7393__auto__);
});})(c__7391__auto___8037))
);


//# sourceMappingURL=core.js.map