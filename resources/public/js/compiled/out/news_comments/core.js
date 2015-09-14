// Compiled by ClojureScript 0.0-2268
goog.provide('news_comments.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
news_comments.core.post_id = document.getElementById("post_id").getAttribute("data");
news_comments.core.base_url = ("http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host));
news_comments.core.json_url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(news_comments.core.base_url)+"/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(news_comments.core.post_id)+".json");
news_comments.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Dexrion",new cljs.core.Keyword(null,"message","message",-406056002),"test message"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sork pippi",new cljs.core.Keyword(null,"message","message",-406056002),"this is another test message"], null)], null));
news_comments.core.user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"not logged in"], null));
news_comments.core.read_data = (function read_data(){goog.net.XhrIo.send(news_comments.core.json_url,(function (res){return cljs.core.reset_BANG_.call(null,news_comments.core.app_state,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(news_comments.core.base_url)+"/shouts/show.json"),(function (res){return cljs.core.reset_BANG_.call(null,news_comments.core.user,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
});
news_comments.core.read_data.call(null);
news_comments.core.update_fn = (function update_fn(data,owner){if((cljs.core._EQ_.call(null,om.core.get_node.call(null,owner,"message").value,"")) || (cljs.core._EQ_.call(null,om.core.get_node.call(null,owner,"name").value,"")))
{return window.alert("Must supply both message and name");
} else
{cljs.core.reset_BANG_.call(null,news_comments.core.app_state,cljs.core.into.call(null,cljs.core.deref.call(null,news_comments.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),om.core.get_node.call(null,owner,"name").value,new cljs.core.Keyword(null,"message","message",-406056002),om.core.get_node.call(null,owner,"message").value], null)], null)));
cljs_http.client.post.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(news_comments.core.base_url)+"/comments"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post","post",269697687),news_comments.core.post_id,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.last.call(null,cljs.core.deref.call(null,news_comments.core.app_state))], null)], null));
return om.core.get_node.call(null,owner,"message").value = "";
}
});
news_comments.core.delete_comment = (function delete_comment(id){return cljs_http.client.delete$.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(news_comments.core.base_url)+"/comments/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_method","_method",-1879292821),"delete"], null)], null));
});
news_comments.core.comment_form = (function comment_form(state,owner){if(typeof news_comments.core.t41435 !== 'undefined')
{} else
{
/**
* @constructor
*/
news_comments.core.t41435 = (function (owner,state,comment_form,meta41436){
this.owner = owner;
this.state = state;
this.comment_form = comment_form;
this.meta41436 = meta41436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
news_comments.core.t41435.cljs$lang$type = true;
news_comments.core.t41435.cljs$lang$ctorStr = "news_comments.core/t41435";
news_comments.core.t41435.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"news_comments.core/t41435");
});
news_comments.core.t41435.prototype.om$core$IRender$ = true;
news_comments.core.t41435.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"value": "true", "type": "hidden", "name": "utf8"}),om.dom.textarea.call(null,{"ref": "message", "row": "3", "name": "comment[message]", "id": "comment_message", "style": {"height": "70px", "width": "97%"}}),React.DOM.p({"style": {"margin": "2%", "display": "inline", "width:": "24%", "color": "#FBB600"}},"Name:"),om.dom.input.call(null,{"style": {"width": "50%"}, "ref": "name", "type": "text", "name": "comment[name]", "id": "comment_name"}),om.dom.input.call(null,{"style": {"width": "24%"}, "value": "Submit", "type": "submit", "onClick": ((function (this$__$1){
return (function (){return news_comments.core.update_fn.call(null,self__.state,self__.owner);
});})(this$__$1))
, "name": "commit"}));
});
news_comments.core.t41435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41437){var self__ = this;
var _41437__$1 = this;return self__.meta41436;
});
news_comments.core.t41435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41437,meta41436__$1){var self__ = this;
var _41437__$1 = this;return (new news_comments.core.t41435(self__.owner,self__.state,self__.comment_form,meta41436__$1));
});
news_comments.core.__GT_t41435 = (function __GT_t41435(owner__$1,state__$1,comment_form__$1,meta41436){return (new news_comments.core.t41435(owner__$1,state__$1,comment_form__$1,meta41436));
});
}
return (new news_comments.core.t41435(owner,state,comment_form,null));
});
news_comments.core.comment = (function comment(state,owner){return React.DOM.tr(null,React.DOM.td({"style": {"fontSize": "small", "color": "#FBB600"}},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state))+":")),React.DOM.td({"style": {"fontSize": "small"}},new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(state)),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,news_comments.core.user)),"admin"))?React.DOM.td({"onClick": (function (){return news_comments.core.delete_comment.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
}), "style": {"fontSize": "xx-small"}},"Delete"):null));
});
news_comments.core.comments = (function comments__$1(state,owner){return cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,news_comments.core.comment,state));
});
news_comments.core.comment_box = (function comment_box(state,owner){return React.DOM.div({"className": "b_box"},React.DOM.div(null,React.DOM.table(null,om.core.build.call(null,news_comments.core.comments,state))),om.core.build.call(null,news_comments.core.comment_form,state));
});
om.core.root.call(null,news_comments.core.comment_box,news_comments.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("comments")], null));
var c__6359__auto___41467 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6359__auto___41467){
return (function (){var f__6360__auto__ = (function (){var switch__6344__auto__ = ((function (c__6359__auto___41467){
return (function (state_41451){var state_val_41452 = (state_41451[(1)]);if((state_val_41452 === (7)))
{var inst_41442 = (state_41451[(2)]);var inst_41443 = news_comments.core.read_data.call(null);var state_41451__$1 = (function (){var statearr_41453 = state_41451;(statearr_41453[(7)] = inst_41442);
(statearr_41453[(8)] = inst_41443);
return statearr_41453;
})();var statearr_41454_41468 = state_41451__$1;(statearr_41454_41468[(2)] = null);
(statearr_41454_41468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41452 === (6)))
{var inst_41447 = (state_41451[(2)]);var state_41451__$1 = state_41451;var statearr_41455_41469 = state_41451__$1;(statearr_41455_41469[(2)] = inst_41447);
(statearr_41455_41469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41452 === (5)))
{var state_41451__$1 = state_41451;var statearr_41456_41470 = state_41451__$1;(statearr_41456_41470[(2)] = null);
(statearr_41456_41470[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41452 === (4)))
{var inst_41440 = cljs.core.async.timeout.call(null,(5000));var state_41451__$1 = state_41451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41451__$1,(7),inst_41440);
} else
{if((state_val_41452 === (3)))
{var inst_41449 = (state_41451[(2)]);var state_41451__$1 = state_41451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41451__$1,inst_41449);
} else
{if((state_val_41452 === (2)))
{var state_41451__$1 = state_41451;if(true)
{var statearr_41457_41471 = state_41451__$1;(statearr_41457_41471[(1)] = (4));
} else
{var statearr_41458_41472 = state_41451__$1;(statearr_41458_41472[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41452 === (1)))
{var state_41451__$1 = state_41451;var statearr_41459_41473 = state_41451__$1;(statearr_41459_41473[(2)] = null);
(statearr_41459_41473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6359__auto___41467))
;return ((function (switch__6344__auto__,c__6359__auto___41467){
return (function() {
var state_machine__6345__auto__ = null;
var state_machine__6345__auto____0 = (function (){var statearr_41463 = [null,null,null,null,null,null,null,null,null];(statearr_41463[(0)] = state_machine__6345__auto__);
(statearr_41463[(1)] = (1));
return statearr_41463;
});
var state_machine__6345__auto____1 = (function (state_41451){while(true){
var ret_value__6346__auto__ = (function (){try{while(true){
var result__6347__auto__ = switch__6344__auto__.call(null,state_41451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6347__auto__;
}
break;
}
}catch (e41464){if((e41464 instanceof Object))
{var ex__6348__auto__ = e41464;var statearr_41465_41474 = state_41451;(statearr_41465_41474[(5)] = ex__6348__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41475 = state_41451;
state_41451 = G__41475;
continue;
}
} else
{return ret_value__6346__auto__;
}
break;
}
});
state_machine__6345__auto__ = function(state_41451){
switch(arguments.length){
case 0:
return state_machine__6345__auto____0.call(this);
case 1:
return state_machine__6345__auto____1.call(this,state_41451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6345__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6345__auto____0;
state_machine__6345__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6345__auto____1;
return state_machine__6345__auto__;
})()
;})(switch__6344__auto__,c__6359__auto___41467))
})();var state__6361__auto__ = (function (){var statearr_41466 = f__6360__auto__.call(null);(statearr_41466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6359__auto___41467);
return statearr_41466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6361__auto__);
});})(c__6359__auto___41467))
);

//# sourceMappingURL=core.js.map