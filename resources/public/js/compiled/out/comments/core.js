// Compiled by ClojureScript 1.7.48 {}
goog.provide('comments.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
comments.core.post_id = document.getElementById("post_id").getAttribute("data");
comments.core.base_url = [cljs.core.str("http://"),cljs.core.str(window.location.host)].join('');
comments.core.json_url = [cljs.core.str(comments.core.base_url),cljs.core.str("/posts/"),cljs.core.str(comments.core.post_id),cljs.core.str(".json")].join('');
comments.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dexrion",new cljs.core.Keyword(null,"message","message",-406056002),"test message"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sork pippi",new cljs.core.Keyword(null,"message","message",-406056002),"this is another test message"], null)], null));
comments.core.user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"not logged in"], null));
comments.core.read_data = (function comments$core$read_data(){
goog.net.XhrIo.send(comments.core.json_url,(function (res){
return cljs.core.reset_BANG_.call(null,comments.core.app_state,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));

return goog.net.XhrIo.send([cljs.core.str(comments.core.base_url),cljs.core.str("/shouts/show.json")].join(''),(function (res){
return cljs.core.reset_BANG_.call(null,comments.core.user,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
});
comments.core.read_data.call(null);
comments.core.update_fn = (function comments$core$update_fn(data,owner){
if((cljs.core._EQ_.call(null,om.core.get_node.call(null,owner,"message").value,"")) || (cljs.core._EQ_.call(null,om.core.get_node.call(null,owner,"name").value,""))){
return window.alert("Must supply both message and name");
} else {
cljs.core.reset_BANG_.call(null,comments.core.app_state,cljs.core.into.call(null,cljs.core.deref.call(null,comments.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),om.core.get_node.call(null,owner,"name").value,new cljs.core.Keyword(null,"message","message",-406056002),om.core.get_node.call(null,owner,"message").value], null)], null)));

cljs_http.client.post.call(null,[cljs.core.str(comments.core.base_url),cljs.core.str("/comments")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post","post",269697687),comments.core.post_id,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.last.call(null,cljs.core.deref.call(null,comments.core.app_state))], null)], null));

return om.core.get_node.call(null,owner,"message").value = "";
}
});
comments.core.delete_comment = (function comments$core$delete_comment(id){
return cljs_http.client.delete$.call(null,[cljs.core.str(comments.core.base_url),cljs.core.str("/comments/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_method","_method",-1879292821),"delete"], null)], null));
});
comments.core.comment_form = (function comments$core$comment_form(state,owner){
if(typeof comments.core.t10709 !== 'undefined'){
} else {

/**
* @constructor
*/
comments.core.t10709 = (function (comment_form,state,owner,meta10710){
this.comment_form = comment_form;
this.state = state;
this.owner = owner;
this.meta10710 = meta10710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
comments.core.t10709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10711,meta10710__$1){
var self__ = this;
var _10711__$1 = this;
return (new comments.core.t10709(self__.comment_form,self__.state,self__.owner,meta10710__$1));
});

comments.core.t10709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10711){
var self__ = this;
var _10711__$1 = this;
return self__.meta10710;
});

comments.core.t10709.prototype.om$core$IRender$ = true;

comments.core.t10709.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"name": "utf8", "type": "hidden", "value": "true"}),om.dom.textarea.call(null,{"style": {"width": "97%", "height": "70px"}, "id": "comment_message", "name": "comment[message]", "row": "3", "ref": "message"}),React.DOM.p({"style": {"color": "#FBB600", "width": "24%", "display": "inline", "margin": "2%"}},"Name:"),om.dom.input.call(null,{"id": "comment_name", "name": "comment[name]", "type": "text", "ref": "name", "style": {"width": "50%"}}),om.dom.input.call(null,{"name": "commit", "onClick": ((function (this$__$1){
return (function (){
return comments.core.update_fn.call(null,self__.state,self__.owner);
});})(this$__$1))
, "type": "submit", "value": "Submit", "style": {"width": "24%"}}));
});

comments.core.t10709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-form","comment-form",661949950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta10710","meta10710",992187339,null)], null);
});

comments.core.t10709.cljs$lang$type = true;

comments.core.t10709.cljs$lang$ctorStr = "comments.core/t10709";

comments.core.t10709.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"comments.core/t10709");
});

comments.core.__GT_t10709 = (function comments$core$comment_form_$___GT_t10709(comment_form__$1,state__$1,owner__$1,meta10710){
return (new comments.core.t10709(comment_form__$1,state__$1,owner__$1,meta10710));
});

}

return (new comments.core.t10709(comments$core$comment_form,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
comments.core.comment = (function comments$core$comment(state,owner){
if(typeof comments.core.t10715 !== 'undefined'){
} else {

/**
* @constructor
*/
comments.core.t10715 = (function (comment,state,owner,meta10716){
this.comment = comment;
this.state = state;
this.owner = owner;
this.meta10716 = meta10716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
comments.core.t10715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10717,meta10716__$1){
var self__ = this;
var _10717__$1 = this;
return (new comments.core.t10715(self__.comment,self__.state,self__.owner,meta10716__$1));
});

comments.core.t10715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10717){
var self__ = this;
var _10717__$1 = this;
return self__.meta10716;
});

comments.core.t10715.prototype.om$core$IRender$ = true;

comments.core.t10715.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.tr(null,React.DOM.td({"style": {"color": "#FBB600", "fontSize": "small"}},[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.state)),cljs.core.str(":")].join('')),React.DOM.td({"style": {"fontSize": "small"}},new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(self__.state)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comments.core.user)),"admin"))?React.DOM.td({"style": {"fontSize": "xx-small"}, "onClick": ((function (this$__$1){
return (function (){
return comments.core.delete_comment.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
});})(this$__$1))
},"Delete"):null));
});

comments.core.t10715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta10716","meta10716",27497546,null)], null);
});

comments.core.t10715.cljs$lang$type = true;

comments.core.t10715.cljs$lang$ctorStr = "comments.core/t10715";

comments.core.t10715.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"comments.core/t10715");
});

comments.core.__GT_t10715 = (function comments$core$comment_$___GT_t10715(comment__$1,state__$1,owner__$1,meta10716){
return (new comments.core.t10715(comment__$1,state__$1,owner__$1,meta10716));
});

}

return (new comments.core.t10715(comments$core$comment,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
comments.core.comments = (function comments$core$comments(state,owner){
if(typeof comments.core.t10721 !== 'undefined'){
} else {

/**
* @constructor
*/
comments.core.t10721 = (function (comments,state,owner,meta10722){
this.comments = comments;
this.state = state;
this.owner = owner;
this.meta10722 = meta10722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
comments.core.t10721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10723,meta10722__$1){
var self__ = this;
var _10723__$1 = this;
return (new comments.core.t10721(self__.comments,self__.state,self__.owner,meta10722__$1));
});

comments.core.t10721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10723){
var self__ = this;
var _10723__$1 = this;
return self__.meta10722;
});

comments.core.t10721.prototype.om$core$IRender$ = true;

comments.core.t10721.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,comments.core.comment,self__.state));
});

comments.core.t10721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta10722","meta10722",-190068941,null)], null);
});

comments.core.t10721.cljs$lang$type = true;

comments.core.t10721.cljs$lang$ctorStr = "comments.core/t10721";

comments.core.t10721.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"comments.core/t10721");
});

comments.core.__GT_t10721 = (function comments$core$comments_$___GT_t10721(comments__$2,state__$1,owner__$1,meta10722){
return (new comments.core.t10721(comments__$2,state__$1,owner__$1,meta10722));
});

}

return (new comments.core.t10721(comments$core$comments,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
comments.core.comment_box = (function comments$core$comment_box(state,owner){
if(typeof comments.core.t10727 !== 'undefined'){
} else {

/**
* @constructor
*/
comments.core.t10727 = (function (comment_box,state,owner,meta10728){
this.comment_box = comment_box;
this.state = state;
this.owner = owner;
this.meta10728 = meta10728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
comments.core.t10727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10729,meta10728__$1){
var self__ = this;
var _10729__$1 = this;
return (new comments.core.t10727(self__.comment_box,self__.state,self__.owner,meta10728__$1));
});

comments.core.t10727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10729){
var self__ = this;
var _10729__$1 = this;
return self__.meta10728;
});

comments.core.t10727.prototype.om$core$IRender$ = true;

comments.core.t10727.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "b_box"},React.DOM.div(null,React.DOM.table(null,om.core.build.call(null,comments.core.comments,self__.state))),om.core.build.call(null,comments.core.comment_form,self__.state));
});

comments.core.t10727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-box","comment-box",1794001596,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta10728","meta10728",-156542951,null)], null);
});

comments.core.t10727.cljs$lang$type = true;

comments.core.t10727.cljs$lang$ctorStr = "comments.core/t10727";

comments.core.t10727.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"comments.core/t10727");
});

comments.core.__GT_t10727 = (function comments$core$comment_box_$___GT_t10727(comment_box__$1,state__$1,owner__$1,meta10728){
return (new comments.core.t10727(comment_box__$1,state__$1,owner__$1,meta10728));
});

}

return (new comments.core.t10727(comments$core$comment_box,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,comments.core.comment_box,comments.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("comments")], null));
var c__7703__auto___10759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___10759){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___10759){
return (function (state_10743){
var state_val_10744 = (state_10743[(1)]);
if((state_val_10744 === (1))){
var state_10743__$1 = state_10743;
var statearr_10745_10760 = state_10743__$1;
(statearr_10745_10760[(2)] = null);

(statearr_10745_10760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10744 === (2))){
var state_10743__$1 = state_10743;
var statearr_10746_10761 = state_10743__$1;
(statearr_10746_10761[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10744 === (3))){
var inst_10741 = (state_10743[(2)]);
var state_10743__$1 = state_10743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10743__$1,inst_10741);
} else {
if((state_val_10744 === (4))){
var inst_10732 = cljs.core.async.timeout.call(null,(5000));
var state_10743__$1 = state_10743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10743__$1,(7),inst_10732);
} else {
if((state_val_10744 === (5))){
var state_10743__$1 = state_10743;
var statearr_10748_10762 = state_10743__$1;
(statearr_10748_10762[(2)] = null);

(statearr_10748_10762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10744 === (6))){
var inst_10739 = (state_10743[(2)]);
var state_10743__$1 = state_10743;
var statearr_10749_10763 = state_10743__$1;
(statearr_10749_10763[(2)] = inst_10739);

(statearr_10749_10763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10744 === (7))){
var inst_10734 = (state_10743[(2)]);
var inst_10735 = comments.core.read_data.call(null);
var state_10743__$1 = (function (){var statearr_10750 = state_10743;
(statearr_10750[(7)] = inst_10735);

(statearr_10750[(8)] = inst_10734);

return statearr_10750;
})();
var statearr_10751_10764 = state_10743__$1;
(statearr_10751_10764[(2)] = null);

(statearr_10751_10764[(1)] = (2));


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
});})(c__7703__auto___10759))
;
return ((function (switch__7628__auto__,c__7703__auto___10759){
return (function() {
var comments$core$state_machine__7629__auto__ = null;
var comments$core$state_machine__7629__auto____0 = (function (){
var statearr_10755 = [null,null,null,null,null,null,null,null,null];
(statearr_10755[(0)] = comments$core$state_machine__7629__auto__);

(statearr_10755[(1)] = (1));

return statearr_10755;
});
var comments$core$state_machine__7629__auto____1 = (function (state_10743){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_10743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e10756){if((e10756 instanceof Object)){
var ex__7632__auto__ = e10756;
var statearr_10757_10765 = state_10743;
(statearr_10757_10765[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10766 = state_10743;
state_10743 = G__10766;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
comments$core$state_machine__7629__auto__ = function(state_10743){
switch(arguments.length){
case 0:
return comments$core$state_machine__7629__auto____0.call(this);
case 1:
return comments$core$state_machine__7629__auto____1.call(this,state_10743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comments$core$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = comments$core$state_machine__7629__auto____0;
comments$core$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = comments$core$state_machine__7629__auto____1;
return comments$core$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___10759))
})();
var state__7705__auto__ = (function (){var statearr_10758 = f__7704__auto__.call(null);
(statearr_10758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___10759);

return statearr_10758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___10759))
);


//# sourceMappingURL=core.js.map