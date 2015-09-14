// Compiled by ClojureScript 1.7.48 {}
goog.provide('stats.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
stats.core.base_url = [cljs.core.str("http://"),cljs.core.str(window.location.host)].join('');
stats.core.base_stats = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stats.core.forward_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stats.core.defender_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stats.core.goalie_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stats.core.load_data = (function stats$core$load_data(){
cljs.core.reset_BANG_.call(null,stats.core.forward_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"high","high",2027297808)], null),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.deref.call(null,stats.core.base_stats).call(null,new cljs.core.Keyword(null,"forwards","forwards",-1901584468))], null));

cljs.core.reset_BANG_.call(null,stats.core.forward_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.forward_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.forward_data))))));

cljs.core.reset_BANG_.call(null,stats.core.defender_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"high","high",2027297808)], null),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.deref.call(null,stats.core.base_stats).call(null,new cljs.core.Keyword(null,"defenders","defenders",-243200366))], null));

cljs.core.reset_BANG_.call(null,stats.core.defender_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.defender_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.defender_data))))));

cljs.core.reset_BANG_.call(null,stats.core.goalie_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save_percent","save_percent",-173413180),new cljs.core.Keyword(null,"high","high",2027297808)], null),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.deref.call(null,stats.core.base_stats).call(null,new cljs.core.Keyword(null,"goalies","goalies",-2084186093))], null));

return cljs.core.reset_BANG_.call(null,stats.core.goalie_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.goalie_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"save_percent","save_percent",-173413180),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.goalie_data))))));
});
console.log([cljs.core.str("gebi "),cljs.core.str(cljs.core.pr_str.call(null,document.getElementById("forwards")))].join(''));
var c__7703__auto___9803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___9803){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___9803){
return (function (state_9786){
var state_val_9787 = (state_9786[(1)]);
if((state_val_9787 === (1))){
var state_9786__$1 = state_9786;
var statearr_9788_9804 = state_9786__$1;
(statearr_9788_9804[(2)] = null);

(statearr_9788_9804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9787 === (2))){
var inst_9770 = document.getElementById("forwards");
var inst_9771 = cljs.core._EQ_.call(null,inst_9770,null);
var state_9786__$1 = state_9786;
if(inst_9771){
var statearr_9789_9805 = state_9786__$1;
(statearr_9789_9805[(1)] = (4));

} else {
var statearr_9790_9806 = state_9786__$1;
(statearr_9790_9806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9787 === (3))){
var inst_9781 = (state_9786[(2)]);
var inst_9782 = [cljs.core.str(stats.core.base_url),cljs.core.str("/statistics.json")].join('');
var inst_9783 = (function (){return ((function (inst_9781,inst_9782,state_val_9787,c__7703__auto___9803){
return (function (res){
cljs.core.reset_BANG_.call(null,stats.core.base_stats,cljs.core.js__GT_clj.call(null,res.target.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));

return stats.core.load_data.call(null);
});
;})(inst_9781,inst_9782,state_val_9787,c__7703__auto___9803))
})();
var inst_9784 = goog.net.XhrIo.send(inst_9782,inst_9783);
var state_9786__$1 = (function (){var statearr_9791 = state_9786;
(statearr_9791[(7)] = inst_9781);

return statearr_9791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9786__$1,inst_9784);
} else {
if((state_val_9787 === (4))){
var inst_9773 = cljs.core.async.timeout.call(null,(16));
var state_9786__$1 = state_9786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9786__$1,(7),inst_9773);
} else {
if((state_val_9787 === (5))){
var state_9786__$1 = state_9786;
var statearr_9792_9807 = state_9786__$1;
(statearr_9792_9807[(2)] = null);

(statearr_9792_9807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9787 === (6))){
var inst_9779 = (state_9786[(2)]);
var state_9786__$1 = state_9786;
var statearr_9793_9808 = state_9786__$1;
(statearr_9793_9808[(2)] = inst_9779);

(statearr_9793_9808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9787 === (7))){
var inst_9775 = (state_9786[(2)]);
var state_9786__$1 = (function (){var statearr_9794 = state_9786;
(statearr_9794[(8)] = inst_9775);

return statearr_9794;
})();
var statearr_9795_9809 = state_9786__$1;
(statearr_9795_9809[(2)] = null);

(statearr_9795_9809[(1)] = (2));


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
});})(c__7703__auto___9803))
;
return ((function (switch__7628__auto__,c__7703__auto___9803){
return (function() {
var stats$core$state_machine__7629__auto__ = null;
var stats$core$state_machine__7629__auto____0 = (function (){
var statearr_9799 = [null,null,null,null,null,null,null,null,null];
(statearr_9799[(0)] = stats$core$state_machine__7629__auto__);

(statearr_9799[(1)] = (1));

return statearr_9799;
});
var stats$core$state_machine__7629__auto____1 = (function (state_9786){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_9786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e9800){if((e9800 instanceof Object)){
var ex__7632__auto__ = e9800;
var statearr_9801_9810 = state_9786;
(statearr_9801_9810[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9811 = state_9786;
state_9786 = G__9811;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
stats$core$state_machine__7629__auto__ = function(state_9786){
switch(arguments.length){
case 0:
return stats$core$state_machine__7629__auto____0.call(this);
case 1:
return stats$core$state_machine__7629__auto____1.call(this,state_9786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stats$core$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = stats$core$state_machine__7629__auto____0;
stats$core$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = stats$core$state_machine__7629__auto____1;
return stats$core$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___9803))
})();
var state__7705__auto__ = (function (){var statearr_9802 = f__7704__auto__.call(null);
(statearr_9802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___9803);

return statearr_9802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___9803))
);

stats.core.stats_order_ice = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"goals","goals",-1712076283),new cljs.core.Keyword(null,"assists","assists",1019517573),new cljs.core.Keyword(null,"plus_minus","plus_minus",-388198155),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.Keyword(null,"pims","pims",2069573470),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"takeaways","takeaways",-1352655118),new cljs.core.Keyword(null,"giveaways","giveaways",213231886),new cljs.core.Keyword(null,"shot_percent","shot_percent",-1721254882),new cljs.core.Keyword(null,"games","games",1927565374)], null);
stats.core.stats_order_goalie = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"save_percent","save_percent",-173413180),new cljs.core.Keyword(null,"GAA","GAA",580268911),new cljs.core.Keyword(null,"goals_against","goals_against",-1012708768),new cljs.core.Keyword(null,"saves","saves",202779773),new cljs.core.Keyword(null,"shots_against","shots_against",-1387646640),new cljs.core.Keyword(null,"SO","SO",938582734),new cljs.core.Keyword(null,"games","games",1927565374)], null);
stats.core.per_game_keys_ice = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"goals","goals",-1712076283),new cljs.core.Keyword(null,"assists","assists",1019517573),new cljs.core.Keyword(null,"plus_minus","plus_minus",-388198155),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.Keyword(null,"pims","pims",2069573470),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"takeaways","takeaways",-1352655118),new cljs.core.Keyword(null,"giveaways","giveaways",213231886)], null);
stats.core.switch_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"per","per",-1436678642),false,new cljs.core.Keyword(null,"total","total",1916810418),true], null));
stats.core.per_game_stats = (function stats$core$per_game_stats(data){
var stats__$1 = new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stats__$1)){
return out;
} else {
var G__9812 = cljs.core.rest.call(null,stats__$1);
var G__9813 = cljs.core.conj.call(null,out,(function (){var stats_keys = stats.core.per_game_keys_ice;
var stat = cljs.core.first.call(null,stats__$1);
var player = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stats_keys)){
return cljs.core.conj.call(null,player,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stat),new cljs.core.Keyword(null,"shot_percent","shot_percent",-1721254882),new cljs.core.Keyword(null,"shot_percent","shot_percent",-1721254882).cljs$core$IFn$_invoke$arity$1(stat),new cljs.core.Keyword(null,"games","games",1927565374),new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(stat)], null));
} else {
var G__9814 = cljs.core.rest.call(null,stats_keys);
var G__9815 = stat;
var G__9816 = cljs.core.conj.call(null,player,new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,stats_keys),(cljs.core.first.call(null,stats_keys).call(null,stat) / new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(stat))], true, false));
stats_keys = G__9814;
stat = G__9815;
player = G__9816;
continue;
}
break;
}
})());
stats__$1 = G__9812;
out = G__9813;
continue;
}
break;
}
});
stats.core.switch_per_total = (function stats$core$switch_per_total(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.switch_data)))){
cljs.core.reset_BANG_.call(null,stats.core.forward_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.forward_data),new cljs.core.Keyword(null,"stats","stats",-85643011),stats.core.per_game_stats.call(null,stats.core.forward_data)));

cljs.core.reset_BANG_.call(null,stats.core.defender_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.defender_data),new cljs.core.Keyword(null,"stats","stats",-85643011),stats.core.per_game_stats.call(null,stats.core.defender_data)));

return cljs.core.reset_BANG_.call(null,stats.core.switch_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"per","per",-1436678642),true,new cljs.core.Keyword(null,"total","total",1916810418),false], null));
} else {
stats.core.load_data.call(null);

return cljs.core.reset_BANG_.call(null,stats.core.switch_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"per","per",-1436678642),false,new cljs.core.Keyword(null,"total","total",1916810418),true], null));
}
});
stats.core.sort_by_title_forwards = (function stats$core$sort_by_title_forwards(title){
if(cljs.core._EQ_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,title),cljs.core.keys.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.forward_data))))){
if(cljs.core._EQ_.call(null,title.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.forward_data))),new cljs.core.Keyword(null,"high","high",2027297808))){
return cljs.core.reset_BANG_.call(null,stats.core.forward_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.forward_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.forward_data)))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"low","low",-1601362409)], true, false)));
} else {
return cljs.core.reset_BANG_.call(null,stats.core.forward_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.forward_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.forward_data))))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"high","high",2027297808)], true, false)));
}
} else {
return cljs.core.reset_BANG_.call(null,stats.core.forward_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.forward_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.forward_data))))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"high","high",2027297808)], true, false)));
}
});
stats.core.sort_by_title_defenders = (function stats$core$sort_by_title_defenders(title){
if(cljs.core._EQ_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,title),cljs.core.keys.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.defender_data))))){
if(cljs.core._EQ_.call(null,title.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.defender_data))),new cljs.core.Keyword(null,"high","high",2027297808))){
return cljs.core.reset_BANG_.call(null,stats.core.defender_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.defender_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.defender_data)))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"low","low",-1601362409)], true, false)));
} else {
return cljs.core.reset_BANG_.call(null,stats.core.defender_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.defender_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.defender_data))))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"high","high",2027297808)], true, false)));
}
} else {
return cljs.core.reset_BANG_.call(null,stats.core.defender_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.defender_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.defender_data))))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"high","high",2027297808)], true, false)));
}
});
stats.core.sort_by_title_goalies = (function stats$core$sort_by_title_goalies(title){
if(cljs.core._EQ_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,title),cljs.core.keys.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.goalie_data))))){
if(cljs.core._EQ_.call(null,title.call(null,new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.goalie_data))),new cljs.core.Keyword(null,"high","high",2027297808))){
return cljs.core.reset_BANG_.call(null,stats.core.goalie_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.goalie_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.goalie_data)))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"low","low",-1601362409)], true, false)));
} else {
return cljs.core.reset_BANG_.call(null,stats.core.goalie_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.goalie_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.goalie_data))))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"high","high",2027297808)], true, false)));
}
} else {
return cljs.core.reset_BANG_.call(null,stats.core.goalie_data,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,stats.core.goalie_data),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,title,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stats.core.goalie_data))))),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap.fromArray([title,new cljs.core.Keyword(null,"high","high",2027297808)], true, false)));
}
});
stats.core.asort = (function stats$core$asort(m,order){
var order_map = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,order,cljs.core.range.call(null)));
return cljs.core.conj.call(null,cljs.core.sorted_map_by.call(null,((function (order_map){
return (function (p1__9817_SHARP_,p2__9818_SHARP_){
return cljs.core.compare.call(null,order_map.call(null,p1__9817_SHARP_),order_map.call(null,p2__9818_SHARP_));
});})(order_map))
),cljs.core.select_keys.call(null,m,order));
});
stats.core.round = (function stats$core$round(num){
if((cljs.core._EQ_.call(null,cljs.core.rem.call(null,num,(1)),(0))) || (typeof num === 'string')){
return num;
} else {
return num.toFixed((2));
}
});
stats.core.forward_tableheader_th = (function stats$core$forward_tableheader_th(title,owner){
if(typeof stats.core.t9822 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9822 = (function (forward_tableheader_th,title,owner,meta9823){
this.forward_tableheader_th = forward_tableheader_th;
this.title = title;
this.owner = owner;
this.meta9823 = meta9823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9824,meta9823__$1){
var self__ = this;
var _9824__$1 = this;
return (new stats.core.t9822(self__.forward_tableheader_th,self__.title,self__.owner,meta9823__$1));
});

stats.core.t9822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9824){
var self__ = this;
var _9824__$1 = this;
return self__.meta9823;
});

stats.core.t9822.prototype.om$core$IRender$ = true;

stats.core.t9822.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.th({"onClick": ((function (this$__$1){
return (function (){
return stats.core.sort_by_title_forwards.call(null,cljs.core.second.call(null,self__.title));
});})(this$__$1))
, "className": "cr"},((cljs.core._EQ_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,self__.title)),cljs.core.keys.call(null,cljs.core.second.call(null,cljs.core.first.call(null,self__.title)))))?((cljs.core._EQ_.call(null,cljs.core.vals.call(null,cljs.core.second.call(null,cljs.core.first.call(null,self__.title))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"high","high",2027297808))))?clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,self__.title))),cljs.core.str("\u25BC")].join(''),/_/," "),/percent/,"%"),/plus.minus/,"+/-"):clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,self__.title))),cljs.core.str("\u25B2")].join(''),/_/," "),/percent/,"%"),/plus.minus/,"+/-")):clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,cljs.core.second.call(null,self__.title)),/_/," "),/percent/,"%"),/plus.minus/,"+/-")));
});

stats.core.t9822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"forward-tableheader-th","forward-tableheader-th",-1035099627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9823","meta9823",1648772957,null)], null);
});

stats.core.t9822.cljs$lang$type = true;

stats.core.t9822.cljs$lang$ctorStr = "stats.core/t9822";

stats.core.t9822.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9822");
});

stats.core.__GT_t9822 = (function stats$core$forward_tableheader_th_$___GT_t9822(forward_tableheader_th__$1,title__$1,owner__$1,meta9823){
return (new stats.core.t9822(forward_tableheader_th__$1,title__$1,owner__$1,meta9823));
});

}

return (new stats.core.t9822(stats$core$forward_tableheader_th,title,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.defender_tableheader_th = (function stats$core$defender_tableheader_th(title,owner){
if(typeof stats.core.t9828 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9828 = (function (defender_tableheader_th,title,owner,meta9829){
this.defender_tableheader_th = defender_tableheader_th;
this.title = title;
this.owner = owner;
this.meta9829 = meta9829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9830,meta9829__$1){
var self__ = this;
var _9830__$1 = this;
return (new stats.core.t9828(self__.defender_tableheader_th,self__.title,self__.owner,meta9829__$1));
});

stats.core.t9828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9830){
var self__ = this;
var _9830__$1 = this;
return self__.meta9829;
});

stats.core.t9828.prototype.om$core$IRender$ = true;

stats.core.t9828.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.th({"onClick": ((function (this$__$1){
return (function (){
return stats.core.sort_by_title_defenders.call(null,cljs.core.second.call(null,self__.title));
});})(this$__$1))
, "className": "cr"},((cljs.core._EQ_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,self__.title)),cljs.core.keys.call(null,cljs.core.second.call(null,cljs.core.first.call(null,self__.title)))))?((cljs.core._EQ_.call(null,cljs.core.vals.call(null,cljs.core.second.call(null,cljs.core.first.call(null,self__.title))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"high","high",2027297808))))?clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,self__.title))),cljs.core.str("\u25BC")].join(''),/_/," "),/percent/,"%"),/plus.minus/,"+/-"):clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,self__.title))),cljs.core.str("\u25B2")].join(''),/_/," "),/percent/,"%"),/plus.minus/,"+/-")):clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,cljs.core.second.call(null,self__.title)),/_/," "),/percent/,"%"),/plus.minus/,"+/-")));
});

stats.core.t9828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"defender-tableheader-th","defender-tableheader-th",-1986911876,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9829","meta9829",-170890296,null)], null);
});

stats.core.t9828.cljs$lang$type = true;

stats.core.t9828.cljs$lang$ctorStr = "stats.core/t9828";

stats.core.t9828.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9828");
});

stats.core.__GT_t9828 = (function stats$core$defender_tableheader_th_$___GT_t9828(defender_tableheader_th__$1,title__$1,owner__$1,meta9829){
return (new stats.core.t9828(defender_tableheader_th__$1,title__$1,owner__$1,meta9829));
});

}

return (new stats.core.t9828(stats$core$defender_tableheader_th,title,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.goalie_tableheader_th = (function stats$core$goalie_tableheader_th(title,owner){
if(typeof stats.core.t9834 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9834 = (function (goalie_tableheader_th,title,owner,meta9835){
this.goalie_tableheader_th = goalie_tableheader_th;
this.title = title;
this.owner = owner;
this.meta9835 = meta9835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9836,meta9835__$1){
var self__ = this;
var _9836__$1 = this;
return (new stats.core.t9834(self__.goalie_tableheader_th,self__.title,self__.owner,meta9835__$1));
});

stats.core.t9834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9836){
var self__ = this;
var _9836__$1 = this;
return self__.meta9835;
});

stats.core.t9834.prototype.om$core$IRender$ = true;

stats.core.t9834.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.th({"onClick": ((function (this$__$1){
return (function (){
return stats.core.sort_by_title_goalies.call(null,cljs.core.second.call(null,self__.title));
});})(this$__$1))
, "className": "cr"},((cljs.core._EQ_.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,self__.title)),cljs.core.keys.call(null,cljs.core.second.call(null,cljs.core.first.call(null,self__.title)))))?((cljs.core._EQ_.call(null,cljs.core.vals.call(null,cljs.core.second.call(null,cljs.core.first.call(null,self__.title))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"high","high",2027297808))))?clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,self__.title))),cljs.core.str("\u25BC")].join(''),/_/," "),/percent/,"%"):clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.second.call(null,self__.title))),cljs.core.str("\u25B2")].join(''),/_/," "),/percent/,"%")):clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,cljs.core.second.call(null,self__.title)),/_/," "),/percent/,"%")));
});

stats.core.t9834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"goalie-tableheader-th","goalie-tableheader-th",-292631712,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9835","meta9835",-1444544715,null)], null);
});

stats.core.t9834.cljs$lang$type = true;

stats.core.t9834.cljs$lang$ctorStr = "stats.core/t9834";

stats.core.t9834.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9834");
});

stats.core.__GT_t9834 = (function stats$core$goalie_tableheader_th_$___GT_t9834(goalie_tableheader_th__$1,title__$1,owner__$1,meta9835){
return (new stats.core.t9834(goalie_tableheader_th__$1,title__$1,owner__$1,meta9835));
});

}

return (new stats.core.t9834(stats$core$goalie_tableheader_th,title,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.forward_thead = (function stats$core$forward_thead(titles,owner){
if(typeof stats.core.t9840 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9840 = (function (forward_thead,titles,owner,meta9841){
this.forward_thead = forward_thead;
this.titles = titles;
this.owner = owner;
this.meta9841 = meta9841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9842,meta9841__$1){
var self__ = this;
var _9842__$1 = this;
return (new stats.core.t9840(self__.forward_thead,self__.titles,self__.owner,meta9841__$1));
});

stats.core.t9840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9842){
var self__ = this;
var _9842__$1 = this;
return self__.meta9841;
});

stats.core.t9840.prototype.om$core$IRender$ = true;

stats.core.t9840.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,{"className": "team_head"},om.core.build_all.call(null,stats.core.forward_tableheader_th,cljs.core.map.call(null,((function (this$__$1){
return (function (v){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.first.call(null,self__.titles)),v);
});})(this$__$1))
,cljs.core.vec.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.titles)))))));
});

stats.core.t9840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"forward-thead","forward-thead",-1596241931,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"titles","titles",-1868329014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"titles","titles",-1868329014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9841","meta9841",-1308155724,null)], null);
});

stats.core.t9840.cljs$lang$type = true;

stats.core.t9840.cljs$lang$ctorStr = "stats.core/t9840";

stats.core.t9840.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9840");
});

stats.core.__GT_t9840 = (function stats$core$forward_thead_$___GT_t9840(forward_thead__$1,titles__$1,owner__$1,meta9841){
return (new stats.core.t9840(forward_thead__$1,titles__$1,owner__$1,meta9841));
});

}

return (new stats.core.t9840(stats$core$forward_thead,titles,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.defender_thead = (function stats$core$defender_thead(titles,owner){
if(typeof stats.core.t9846 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9846 = (function (defender_thead,titles,owner,meta9847){
this.defender_thead = defender_thead;
this.titles = titles;
this.owner = owner;
this.meta9847 = meta9847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9848,meta9847__$1){
var self__ = this;
var _9848__$1 = this;
return (new stats.core.t9846(self__.defender_thead,self__.titles,self__.owner,meta9847__$1));
});

stats.core.t9846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9848){
var self__ = this;
var _9848__$1 = this;
return self__.meta9847;
});

stats.core.t9846.prototype.om$core$IRender$ = true;

stats.core.t9846.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,{"className": "team_head"},om.core.build_all.call(null,stats.core.defender_tableheader_th,cljs.core.map.call(null,((function (this$__$1){
return (function (v){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.first.call(null,self__.titles)),v);
});})(this$__$1))
,cljs.core.vec.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.titles)))))));
});

stats.core.t9846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"defender-thead","defender-thead",-1566154320,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"titles","titles",-1868329014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"titles","titles",-1868329014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9847","meta9847",1325739663,null)], null);
});

stats.core.t9846.cljs$lang$type = true;

stats.core.t9846.cljs$lang$ctorStr = "stats.core/t9846";

stats.core.t9846.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9846");
});

stats.core.__GT_t9846 = (function stats$core$defender_thead_$___GT_t9846(defender_thead__$1,titles__$1,owner__$1,meta9847){
return (new stats.core.t9846(defender_thead__$1,titles__$1,owner__$1,meta9847));
});

}

return (new stats.core.t9846(stats$core$defender_thead,titles,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.goalie_thead = (function stats$core$goalie_thead(titles,owner){
if(typeof stats.core.t9852 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9852 = (function (goalie_thead,titles,owner,meta9853){
this.goalie_thead = goalie_thead;
this.titles = titles;
this.owner = owner;
this.meta9853 = meta9853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9854,meta9853__$1){
var self__ = this;
var _9854__$1 = this;
return (new stats.core.t9852(self__.goalie_thead,self__.titles,self__.owner,meta9853__$1));
});

stats.core.t9852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9854){
var self__ = this;
var _9854__$1 = this;
return self__.meta9853;
});

stats.core.t9852.prototype.om$core$IRender$ = true;

stats.core.t9852.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,{"className": "team_head"},om.core.build_all.call(null,stats.core.goalie_tableheader_th,cljs.core.map.call(null,((function (this$__$1){
return (function (v){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.first.call(null,self__.titles)),v);
});})(this$__$1))
,cljs.core.vec.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.titles)))))));
});

stats.core.t9852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"goalie-thead","goalie-thead",697638037,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"titles","titles",-1868329014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"titles","titles",-1868329014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9853","meta9853",1939387832,null)], null);
});

stats.core.t9852.cljs$lang$type = true;

stats.core.t9852.cljs$lang$ctorStr = "stats.core/t9852";

stats.core.t9852.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9852");
});

stats.core.__GT_t9852 = (function stats$core$goalie_thead_$___GT_t9852(goalie_thead__$1,titles__$1,owner__$1,meta9853){
return (new stats.core.t9852(goalie_thead__$1,titles__$1,owner__$1,meta9853));
});

}

return (new stats.core.t9852(stats$core$goalie_thead,titles,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.stat_vals = (function stats$core$stat_vals(sv,owner){
if(typeof stats.core.t9858 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9858 = (function (stat_vals,sv,owner,meta9859){
this.stat_vals = stat_vals;
this.sv = sv;
this.owner = owner;
this.meta9859 = meta9859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9860,meta9859__$1){
var self__ = this;
var _9860__$1 = this;
return (new stats.core.t9858(self__.stat_vals,self__.sv,self__.owner,meta9859__$1));
});

stats.core.t9858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9860){
var self__ = this;
var _9860__$1 = this;
return self__.meta9859;
});

stats.core.t9858.prototype.om$core$IRender$ = true;

stats.core.t9858.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(typeof self__.sv === 'string'){
return React.DOM.td(null,self__.sv);
} else {
return React.DOM.td({"style": {"textAlign": "center"}},stats.core.round.call(null,self__.sv));
}
});

stats.core.t9858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"stat-vals","stat-vals",2076913591,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sv","sv",1469584448,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"sv","sv",1469584448,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9859","meta9859",1099091086,null)], null);
});

stats.core.t9858.cljs$lang$type = true;

stats.core.t9858.cljs$lang$ctorStr = "stats.core/t9858";

stats.core.t9858.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9858");
});

stats.core.__GT_t9858 = (function stats$core$stat_vals_$___GT_t9858(stat_vals__$1,sv__$1,owner__$1,meta9859){
return (new stats.core.t9858(stat_vals__$1,sv__$1,owner__$1,meta9859));
});

}

return (new stats.core.t9858(stats$core$stat_vals,sv,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.row = (function stats$core$row(player,owner){
if(typeof stats.core.t9864 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9864 = (function (row,player,owner,meta9865){
this.row = row;
this.player = player;
this.owner = owner;
this.meta9865 = meta9865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9866,meta9865__$1){
var self__ = this;
var _9866__$1 = this;
return (new stats.core.t9864(self__.row,self__.player,self__.owner,meta9865__$1));
});

stats.core.t9864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9866){
var self__ = this;
var _9866__$1 = this;
return self__.meta9865;
});

stats.core.t9864.prototype.om$core$IRender$ = true;

stats.core.t9864.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"saves","saves",202779773).cljs$core$IFn$_invoke$arity$1(self__.player))){
return cljs.core.apply.call(null,om.dom.tr,null,om.core.build_all.call(null,stats.core.stat_vals,cljs.core.vals.call(null,stats.core.asort.call(null,self__.player,stats.core.stats_order_goalie))));
} else {
return cljs.core.apply.call(null,om.dom.tr,null,om.core.build_all.call(null,stats.core.stat_vals,cljs.core.vals.call(null,stats.core.asort.call(null,self__.player,stats.core.stats_order_ice))));
}
});

stats.core.t9864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9865","meta9865",-175465876,null)], null);
});

stats.core.t9864.cljs$lang$type = true;

stats.core.t9864.cljs$lang$ctorStr = "stats.core/t9864";

stats.core.t9864.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9864");
});

stats.core.__GT_t9864 = (function stats$core$row_$___GT_t9864(row__$1,player__$1,owner__$1,meta9865){
return (new stats.core.t9864(row__$1,player__$1,owner__$1,meta9865));
});

}

return (new stats.core.t9864(stats$core$row,player,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.content = (function stats$core$content(players,owner){
if(typeof stats.core.t9870 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9870 = (function (content,players,owner,meta9871){
this.content = content;
this.players = players;
this.owner = owner;
this.meta9871 = meta9871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9872,meta9871__$1){
var self__ = this;
var _9872__$1 = this;
return (new stats.core.t9870(self__.content,self__.players,self__.owner,meta9871__$1));
});

stats.core.t9870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9872){
var self__ = this;
var _9872__$1 = this;
return self__.meta9871;
});

stats.core.t9870.prototype.om$core$IRender$ = true;

stats.core.t9870.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,stats.core.row,self__.players));
});

stats.core.t9870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"players","players",278976958,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"players","players",278976958,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9871","meta9871",-951166565,null)], null);
});

stats.core.t9870.cljs$lang$type = true;

stats.core.t9870.cljs$lang$ctorStr = "stats.core/t9870";

stats.core.t9870.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9870");
});

stats.core.__GT_t9870 = (function stats$core$content_$___GT_t9870(content__$1,players__$1,owner__$1,meta9871){
return (new stats.core.t9870(content__$1,players__$1,owner__$1,meta9871));
});

}

return (new stats.core.t9870(stats$core$content,players,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.forward_table = (function stats$core$forward_table(data,owner){
if(typeof stats.core.t9876 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9876 = (function (forward_table,data,owner,meta9877){
this.forward_table = forward_table;
this.data = data;
this.owner = owner;
this.meta9877 = meta9877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9878,meta9877__$1){
var self__ = this;
var _9878__$1 = this;
return (new stats.core.t9876(self__.forward_table,self__.data,self__.owner,meta9877__$1));
});

stats.core.t9876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9878){
var self__ = this;
var _9878__$1 = this;
return self__.meta9877;
});

stats.core.t9876.prototype.om$core$IRender$ = true;

stats.core.t9876.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.table(null,om.core.build.call(null,stats.core.forward_thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"srt","srt",-2141101377),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.keys.call(null,stats.core.asort.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(self__.data)),stats.core.stats_order_ice))], null)], null)),om.core.build.call(null,stats.core.content,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

stats.core.t9876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"forward-table","forward-table",-1811424132,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9877","meta9877",-1451321063,null)], null);
});

stats.core.t9876.cljs$lang$type = true;

stats.core.t9876.cljs$lang$ctorStr = "stats.core/t9876";

stats.core.t9876.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9876");
});

stats.core.__GT_t9876 = (function stats$core$forward_table_$___GT_t9876(forward_table__$1,data__$1,owner__$1,meta9877){
return (new stats.core.t9876(forward_table__$1,data__$1,owner__$1,meta9877));
});

}

return (new stats.core.t9876(stats$core$forward_table,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.defender_table = (function stats$core$defender_table(data,owner){
if(typeof stats.core.t9882 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9882 = (function (defender_table,data,owner,meta9883){
this.defender_table = defender_table;
this.data = data;
this.owner = owner;
this.meta9883 = meta9883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9884,meta9883__$1){
var self__ = this;
var _9884__$1 = this;
return (new stats.core.t9882(self__.defender_table,self__.data,self__.owner,meta9883__$1));
});

stats.core.t9882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9884){
var self__ = this;
var _9884__$1 = this;
return self__.meta9883;
});

stats.core.t9882.prototype.om$core$IRender$ = true;

stats.core.t9882.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.table(null,om.core.build.call(null,stats.core.defender_thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"srt","srt",-2141101377),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.keys.call(null,stats.core.asort.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(self__.data)),stats.core.stats_order_ice))], null)], null)),om.core.build.call(null,stats.core.content,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

stats.core.t9882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"defender-table","defender-table",-1428495944,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9883","meta9883",409773166,null)], null);
});

stats.core.t9882.cljs$lang$type = true;

stats.core.t9882.cljs$lang$ctorStr = "stats.core/t9882";

stats.core.t9882.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9882");
});

stats.core.__GT_t9882 = (function stats$core$defender_table_$___GT_t9882(defender_table__$1,data__$1,owner__$1,meta9883){
return (new stats.core.t9882(defender_table__$1,data__$1,owner__$1,meta9883));
});

}

return (new stats.core.t9882(stats$core$defender_table,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.goalie_table = (function stats$core$goalie_table(data,owner){
if(typeof stats.core.t9888 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9888 = (function (goalie_table,data,owner,meta9889){
this.goalie_table = goalie_table;
this.data = data;
this.owner = owner;
this.meta9889 = meta9889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9890,meta9889__$1){
var self__ = this;
var _9890__$1 = this;
return (new stats.core.t9888(self__.goalie_table,self__.data,self__.owner,meta9889__$1));
});

stats.core.t9888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9890){
var self__ = this;
var _9890__$1 = this;
return self__.meta9889;
});

stats.core.t9888.prototype.om$core$IRender$ = true;

stats.core.t9888.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.table(null,om.core.build.call(null,stats.core.goalie_thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"srt","srt",-2141101377),new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(self__.data)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.keys.call(null,stats.core.asort.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(self__.data)),stats.core.stats_order_goalie))], null)], null)),om.core.build.call(null,stats.core.content,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

stats.core.t9888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"goalie-table","goalie-table",-1754548197,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9889","meta9889",-296315580,null)], null);
});

stats.core.t9888.cljs$lang$type = true;

stats.core.t9888.cljs$lang$ctorStr = "stats.core/t9888";

stats.core.t9888.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9888");
});

stats.core.__GT_t9888 = (function stats$core$goalie_table_$___GT_t9888(goalie_table__$1,data__$1,owner__$1,meta9889){
return (new stats.core.t9888(goalie_table__$1,data__$1,owner__$1,meta9889));
});

}

return (new stats.core.t9888(stats$core$goalie_table,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
stats.core.switch$ = (function stats$core$switch(data,owner){
if(typeof stats.core.t9894 !== 'undefined'){
} else {

/**
* @constructor
*/
stats.core.t9894 = (function (switch$,data,owner,meta9895){
this.switch$ = switch$;
this.data = data;
this.owner = owner;
this.meta9895 = meta9895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
stats.core.t9894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9896,meta9895__$1){
var self__ = this;
var _9896__$1 = this;
return (new stats.core.t9894(self__.switch$,self__.data,self__.owner,meta9895__$1));
});

stats.core.t9894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9896){
var self__ = this;
var _9896__$1 = this;
return self__.meta9895;
});

stats.core.t9894.prototype.om$core$IRender$ = true;

stats.core.t9894.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"onClick": ((function (this$__$1){
return (function (){
return stats.core.switch_per_total.call(null);
});})(this$__$1))
},(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(self__.data))?"Switch to per game":"Switch to total stats"));
});

stats.core.t9894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"switch","switch",1712412837,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta9895","meta9895",103286562,null)], null);
});

stats.core.t9894.cljs$lang$type = true;

stats.core.t9894.cljs$lang$ctorStr = "stats.core/t9894";

stats.core.t9894.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"stats.core/t9894");
});

stats.core.__GT_t9894 = (function stats$core$switch_$___GT_t9894(switch$__$1,data__$1,owner__$1,meta9895){
return (new stats.core.t9894(switch$__$1,data__$1,owner__$1,meta9895));
});

}

return (new stats.core.t9894(stats$core$switch,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
var c__7703__auto___9948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___9948){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___9948){
return (function (state_9931){
var state_val_9932 = (state_9931[(1)]);
if((state_val_9932 === (1))){
var state_9931__$1 = state_9931;
var statearr_9933_9949 = state_9931__$1;
(statearr_9933_9949[(2)] = null);

(statearr_9933_9949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (2))){
var inst_9898 = cljs.core.deref.call(null,stats.core.forward_data);
var inst_9899 = cljs.core.empty_QMARK_.call(null,inst_9898);
var state_9931__$1 = state_9931;
if(inst_9899){
var statearr_9934_9950 = state_9931__$1;
(statearr_9934_9950[(1)] = (4));

} else {
var statearr_9935_9951 = state_9931__$1;
(statearr_9935_9951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (3))){
var inst_9909 = (state_9931[(2)]);
var inst_9910 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_9911 = document.getElementById("forwards");
var inst_9912 = [inst_9911];
var inst_9913 = cljs.core.PersistentHashMap.fromArrays(inst_9910,inst_9912);
var inst_9914 = om.core.root.call(null,stats.core.forward_table,stats.core.forward_data,inst_9913);
var inst_9915 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_9916 = document.getElementById("defenders");
var inst_9917 = [inst_9916];
var inst_9918 = cljs.core.PersistentHashMap.fromArrays(inst_9915,inst_9917);
var inst_9919 = om.core.root.call(null,stats.core.defender_table,stats.core.defender_data,inst_9918);
var inst_9920 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_9921 = document.getElementById("goalies");
var inst_9922 = [inst_9921];
var inst_9923 = cljs.core.PersistentHashMap.fromArrays(inst_9920,inst_9922);
var inst_9924 = om.core.root.call(null,stats.core.goalie_table,stats.core.goalie_data,inst_9923);
var inst_9925 = [new cljs.core.Keyword(null,"target","target",253001721)];
var inst_9926 = document.getElementById("switch");
var inst_9927 = [inst_9926];
var inst_9928 = cljs.core.PersistentHashMap.fromArrays(inst_9925,inst_9927);
var inst_9929 = om.core.root.call(null,stats.core.switch$,stats.core.switch_data,inst_9928);
var state_9931__$1 = (function (){var statearr_9936 = state_9931;
(statearr_9936[(7)] = inst_9909);

(statearr_9936[(8)] = inst_9924);

(statearr_9936[(9)] = inst_9914);

(statearr_9936[(10)] = inst_9919);

return statearr_9936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9931__$1,inst_9929);
} else {
if((state_val_9932 === (4))){
var inst_9901 = cljs.core.async.timeout.call(null,(16));
var state_9931__$1 = state_9931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9931__$1,(7),inst_9901);
} else {
if((state_val_9932 === (5))){
var state_9931__$1 = state_9931;
var statearr_9937_9952 = state_9931__$1;
(statearr_9937_9952[(2)] = null);

(statearr_9937_9952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (6))){
var inst_9907 = (state_9931[(2)]);
var state_9931__$1 = state_9931;
var statearr_9938_9953 = state_9931__$1;
(statearr_9938_9953[(2)] = inst_9907);

(statearr_9938_9953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9932 === (7))){
var inst_9903 = (state_9931[(2)]);
var state_9931__$1 = (function (){var statearr_9939 = state_9931;
(statearr_9939[(11)] = inst_9903);

return statearr_9939;
})();
var statearr_9940_9954 = state_9931__$1;
(statearr_9940_9954[(2)] = null);

(statearr_9940_9954[(1)] = (2));


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
});})(c__7703__auto___9948))
;
return ((function (switch__7628__auto__,c__7703__auto___9948){
return (function() {
var stats$core$state_machine__7629__auto__ = null;
var stats$core$state_machine__7629__auto____0 = (function (){
var statearr_9944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9944[(0)] = stats$core$state_machine__7629__auto__);

(statearr_9944[(1)] = (1));

return statearr_9944;
});
var stats$core$state_machine__7629__auto____1 = (function (state_9931){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_9931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e9945){if((e9945 instanceof Object)){
var ex__7632__auto__ = e9945;
var statearr_9946_9955 = state_9931;
(statearr_9946_9955[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9956 = state_9931;
state_9931 = G__9956;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
stats$core$state_machine__7629__auto__ = function(state_9931){
switch(arguments.length){
case 0:
return stats$core$state_machine__7629__auto____0.call(this);
case 1:
return stats$core$state_machine__7629__auto____1.call(this,state_9931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stats$core$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = stats$core$state_machine__7629__auto____0;
stats$core$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = stats$core$state_machine__7629__auto____1;
return stats$core$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___9948))
})();
var state__7705__auto__ = (function (){var statearr_9947 = f__7704__auto__.call(null);
(statearr_9947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___9948);

return statearr_9947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___9948))
);


//# sourceMappingURL=core.js.map