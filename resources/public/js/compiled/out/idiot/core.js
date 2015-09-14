// Compiled by ClojureScript 0.0-2268
goog.provide('idiot.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
idiot.core.players = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dexrion81","sorkpippi","zhitnik","xHeath22","betupp","oni404","mekfiri","herkie82"], null);
idiot.core.online_state = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
idiot.core.base_url = ("http://ftp.bombers-hockey.com");
idiot.core.get_status_BANG_ = (function get_status_BANG_(player){return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(idiot.core.base_url)+":3000/PSN/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)),(function (res){return cljs.core.reset_BANG_.call(null,idiot.core.online_state,cljs.core.conj.call(null,cljs.core.deref.call(null,idiot.core.online_state),cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}));
});
idiot.core.fill_state_BANG_ = (function fill_state_BANG_(players){cljs.core.reset_BANG_.call(null,idiot.core.online_state,cljs.core.PersistentVector.EMPTY);
return cljs.core.dorun.call(null,cljs.core.map.call(null,idiot.core.get_status_BANG_,players));
});
idiot.core.fill_state_BANG_.call(null,idiot.core.players);
idiot.core.status_class_name = (function status_class_name(state){console.log(cljs.core.pr_str.call(null,state));
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"onlineStatus","onlineStatus",-870019391)], null)),null))
{return "online_image_grayscale";
} else
{if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"onlineStatus","onlineStatus",-870019391)], null)),"offline"))
{return "online_image_grayscale";
} else
{return "online_image";
}
}
});
idiot.core.current_operation = (function current_operation(state){if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"onlineStatus","onlineStatus",-870019391)], null)),"online"))
{return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),new cljs.core.Keyword(null,"primaryInfo","primaryInfo",1476170473),new cljs.core.Keyword(null,"gameTitleInfo","gameTitleInfo",1706471586),new cljs.core.Keyword(null,"titleName","titleName",309658972)], null));
} else
{return "offline or unknown";
}
});
idiot.core.thumb = (function thumb(state,owner){return React.DOM.div({"className": "thumbnail"},React.DOM.div({"className": "b_border"},React.DOM.img({"title": idiot.core.current_operation.call(null,state), "height": "64", "width": "64", "src": new cljs.core.Keyword(null,"avatarUrl","avatarUrl",-1766641571).cljs$core$IFn$_invoke$arity$1(state), "className": idiot.core.status_class_name.call(null,state)})),React.DOM.div({"className": "caption"},React.DOM.p(null,new cljs.core.Keyword(null,"onlineId","onlineId",-441999627).cljs$core$IFn$_invoke$arity$1(state))));
});
idiot.core.online_status = (function online_status(state,owner){return React.DOM.div({"className": "b_box"},React.DOM.div({"className": "b_header"},React.DOM.img({"src": "/assets/onlinestatus.jpg"})),cljs.core.apply.call(null,om.dom.div,{"className": "b_content"},om.core.build_all.call(null,idiot.core.thumb,state)));
});
var c__6359__auto___9852 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6359__auto___9852){
return (function (){var f__6360__auto__ = (function (){var switch__6344__auto__ = ((function (c__6359__auto___9852){
return (function (state_9835){var state_val_9836 = (state_9835[(1)]);if((state_val_9836 === (7)))
{var inst_9822 = (state_9835[(2)]);var state_9835__$1 = (function (){var statearr_9837 = state_9835;(statearr_9837[(7)] = inst_9822);
return statearr_9837;
})();var statearr_9838_9853 = state_9835__$1;(statearr_9838_9853[(2)] = null);
(statearr_9838_9853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9836 === (6)))
{var inst_9826 = (state_9835[(2)]);var state_9835__$1 = state_9835;var statearr_9839_9854 = state_9835__$1;(statearr_9839_9854[(2)] = inst_9826);
(statearr_9839_9854[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9836 === (5)))
{var state_9835__$1 = state_9835;var statearr_9840_9855 = state_9835__$1;(statearr_9840_9855[(2)] = null);
(statearr_9840_9855[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9836 === (4)))
{var inst_9820 = cljs.core.async.timeout.call(null,(16));var state_9835__$1 = state_9835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9835__$1,(7),inst_9820);
} else
{if((state_val_9836 === (3)))
{var inst_9828 = (state_9835[(2)]);var inst_9829 = [new cljs.core.Keyword(null,"target","target",253001721)];var inst_9830 = document.getElementById("online-status");var inst_9831 = [inst_9830];var inst_9832 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_9829,inst_9831);var inst_9833 = om.core.root.call(null,idiot.core.online_status,idiot.core.online_state,inst_9832);var state_9835__$1 = (function (){var statearr_9841 = state_9835;(statearr_9841[(8)] = inst_9828);
return statearr_9841;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9835__$1,inst_9833);
} else
{if((state_val_9836 === (2)))
{var inst_9817 = cljs.core.deref.call(null,idiot.core.online_state);var inst_9818 = cljs.core.empty_QMARK_.call(null,inst_9817);var state_9835__$1 = state_9835;if(inst_9818)
{var statearr_9842_9856 = state_9835__$1;(statearr_9842_9856[(1)] = (4));
} else
{var statearr_9843_9857 = state_9835__$1;(statearr_9843_9857[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9836 === (1)))
{var state_9835__$1 = state_9835;var statearr_9844_9858 = state_9835__$1;(statearr_9844_9858[(2)] = null);
(statearr_9844_9858[(1)] = (2));
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
});})(c__6359__auto___9852))
;return ((function (switch__6344__auto__,c__6359__auto___9852){
return (function() {
var state_machine__6345__auto__ = null;
var state_machine__6345__auto____0 = (function (){var statearr_9848 = [null,null,null,null,null,null,null,null,null];(statearr_9848[(0)] = state_machine__6345__auto__);
(statearr_9848[(1)] = (1));
return statearr_9848;
});
var state_machine__6345__auto____1 = (function (state_9835){while(true){
var ret_value__6346__auto__ = (function (){try{while(true){
var result__6347__auto__ = switch__6344__auto__.call(null,state_9835);if(cljs.core.keyword_identical_QMARK_.call(null,result__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6347__auto__;
}
break;
}
}catch (e9849){if((e9849 instanceof Object))
{var ex__6348__auto__ = e9849;var statearr_9850_9859 = state_9835;(statearr_9850_9859[(5)] = ex__6348__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9860 = state_9835;
state_9835 = G__9860;
continue;
}
} else
{return ret_value__6346__auto__;
}
break;
}
});
state_machine__6345__auto__ = function(state_9835){
switch(arguments.length){
case 0:
return state_machine__6345__auto____0.call(this);
case 1:
return state_machine__6345__auto____1.call(this,state_9835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6345__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6345__auto____0;
state_machine__6345__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6345__auto____1;
return state_machine__6345__auto__;
})()
;})(switch__6344__auto__,c__6359__auto___9852))
})();var state__6361__auto__ = (function (){var statearr_9851 = f__6360__auto__.call(null);(statearr_9851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6359__auto___9852);
return statearr_9851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6361__auto__);
});})(c__6359__auto___9852))
);
var c__6359__auto___9876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6359__auto___9876){
return (function (){var f__6360__auto__ = (function (){var switch__6344__auto__ = ((function (c__6359__auto___9876){
return (function (state_9866){var state_val_9867 = (state_9866[(1)]);if((state_val_9867 === (2)))
{var inst_9863 = (state_9866[(2)]);var inst_9864 = idiot.core.fill_state_BANG_.call(null,idiot.core.players);var state_9866__$1 = (function (){var statearr_9868 = state_9866;(statearr_9868[(7)] = inst_9863);
return statearr_9868;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9866__$1,inst_9864);
} else
{if((state_val_9867 === (1)))
{var inst_9861 = cljs.core.async.timeout.call(null,(300000));var state_9866__$1 = state_9866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9866__$1,(2),inst_9861);
} else
{return null;
}
}
});})(c__6359__auto___9876))
;return ((function (switch__6344__auto__,c__6359__auto___9876){
return (function() {
var state_machine__6345__auto__ = null;
var state_machine__6345__auto____0 = (function (){var statearr_9872 = [null,null,null,null,null,null,null,null];(statearr_9872[(0)] = state_machine__6345__auto__);
(statearr_9872[(1)] = (1));
return statearr_9872;
});
var state_machine__6345__auto____1 = (function (state_9866){while(true){
var ret_value__6346__auto__ = (function (){try{while(true){
var result__6347__auto__ = switch__6344__auto__.call(null,state_9866);if(cljs.core.keyword_identical_QMARK_.call(null,result__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6347__auto__;
}
break;
}
}catch (e9873){if((e9873 instanceof Object))
{var ex__6348__auto__ = e9873;var statearr_9874_9877 = state_9866;(statearr_9874_9877[(5)] = ex__6348__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9878 = state_9866;
state_9866 = G__9878;
continue;
}
} else
{return ret_value__6346__auto__;
}
break;
}
});
state_machine__6345__auto__ = function(state_9866){
switch(arguments.length){
case 0:
return state_machine__6345__auto____0.call(this);
case 1:
return state_machine__6345__auto____1.call(this,state_9866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6345__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6345__auto____0;
state_machine__6345__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6345__auto____1;
return state_machine__6345__auto__;
})()
;})(switch__6344__auto__,c__6359__auto___9876))
})();var state__6361__auto__ = (function (){var statearr_9875 = f__6360__auto__.call(null);(statearr_9875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6359__auto___9876);
return statearr_9875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6361__auto__);
});})(c__6359__auto___9876))
);

//# sourceMappingURL=core.js.map