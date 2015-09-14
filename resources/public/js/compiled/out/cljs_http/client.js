// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4456__auto__ = v;
if(cljs.core.truth_(and__4456__auto__)){
return (v > (0));
} else {
return and__4456__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__11813_SHARP_,p2__11812_SHARP_){
var vec__11815 = clojure.string.split.call(null,p2__11812_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__11815,(0),null);
var v = cljs.core.nth.call(null,vec__11815,(1),null);
return cljs.core.assoc.call(null,p1__11813_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__11816_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__11816_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__11817){
var vec__11819 = p__11817;
var k = cljs.core.nth.call(null,vec__11819,(0),null);
var v = cljs.core.nth.call(null,vec__11819,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4456__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4456__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4456__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var c__7703__auto___11856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___11856,channel){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___11856,channel){
return (function (state_11846){
var state_val_11847 = (state_11846[(1)]);
if((state_val_11847 === (1))){
var inst_11838 = client.call(null,request);
var state_11846__$1 = state_11846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11846__$1,(2),inst_11838);
} else {
if((state_val_11847 === (2))){
var inst_11840 = (state_11846[(2)]);
var inst_11841 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_11842 = cljs_http.client.decode_body.call(null,inst_11840,cljs.reader.read_string,"application/edn",inst_11841);
var inst_11843 = cljs.core.async.put_BANG_.call(null,channel,inst_11842);
var inst_11844 = cljs.core.async.close_BANG_.call(null,channel);
var state_11846__$1 = (function (){var statearr_11848 = state_11846;
(statearr_11848[(7)] = inst_11843);

return statearr_11848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11846__$1,inst_11844);
} else {
return null;
}
}
});})(c__7703__auto___11856,channel))
;
return ((function (switch__7628__auto__,c__7703__auto___11856,channel){
return (function() {
var cljs_http$client$wrap_edn_response_$_state_machine__7629__auto__ = null;
var cljs_http$client$wrap_edn_response_$_state_machine__7629__auto____0 = (function (){
var statearr_11852 = [null,null,null,null,null,null,null,null];
(statearr_11852[(0)] = cljs_http$client$wrap_edn_response_$_state_machine__7629__auto__);

(statearr_11852[(1)] = (1));

return statearr_11852;
});
var cljs_http$client$wrap_edn_response_$_state_machine__7629__auto____1 = (function (state_11846){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_11846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e11853){if((e11853 instanceof Object)){
var ex__7632__auto__ = e11853;
var statearr_11854_11857 = state_11846;
(statearr_11854_11857[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11858 = state_11846;
state_11846 = G__11858;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs_http$client$wrap_edn_response_$_state_machine__7629__auto__ = function(state_11846){
switch(arguments.length){
case 0:
return cljs_http$client$wrap_edn_response_$_state_machine__7629__auto____0.call(this);
case 1:
return cljs_http$client$wrap_edn_response_$_state_machine__7629__auto____1.call(this,state_11846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$client$wrap_edn_response_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$client$wrap_edn_response_$_state_machine__7629__auto____0;
cljs_http$client$wrap_edn_response_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$client$wrap_edn_response_$_state_machine__7629__auto____1;
return cljs_http$client$wrap_edn_response_$_state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___11856,channel))
})();
var state__7705__auto__ = (function (){var statearr_11855 = f__7704__auto__.call(null);
(statearr_11855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___11856);

return statearr_11855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___11856,channel))
);


return channel;
});
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(){
var args__5514__auto__ = [];
var len__5507__auto___11863 = arguments.length;
var i__5508__auto___11864 = (0);
while(true){
if((i__5508__auto___11864 < len__5507__auto___11863)){
args__5514__auto__.push((arguments[i__5508__auto___11864]));

var G__11865 = (i__5508__auto___11864 + (1));
i__5508__auto___11864 = G__11865;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11861){
var vec__11862 = p__11861;
var accept = cljs.core.nth.call(null,vec__11862,(0),null);
return ((function (vec__11862,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4468__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4468__auto__)){
return or__4468__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11862,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq11859){
var G__11860 = cljs.core.first.call(null,seq11859);
var seq11859__$1 = cljs.core.next.call(null,seq11859);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__11860,seq11859__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(){
var args__5514__auto__ = [];
var len__5507__auto___11870 = arguments.length;
var i__5508__auto___11871 = (0);
while(true){
if((i__5508__auto___11871 < len__5507__auto___11870)){
args__5514__auto__.push((arguments[i__5508__auto___11871]));

var G__11872 = (i__5508__auto___11871 + (1));
i__5508__auto___11871 = G__11872;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11868){
var vec__11869 = p__11868;
var content_type = cljs.core.nth.call(null,vec__11869,(0),null);
return ((function (vec__11869,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4468__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4468__auto__)){
return or__4468__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11869,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq11866){
var G__11867 = cljs.core.first.call(null,seq11866);
var seq11866__$1 = cljs.core.next.call(null,seq11866);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__11867,seq11866__$1);
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var c__7703__auto___11909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___11909,channel){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___11909,channel){
return (function (state_11899){
var state_val_11900 = (state_11899[(1)]);
if((state_val_11900 === (1))){
var inst_11891 = client.call(null,request);
var state_11899__$1 = state_11899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11899__$1,(2),inst_11891);
} else {
if((state_val_11900 === (2))){
var inst_11893 = (state_11899[(2)]);
var inst_11894 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_11895 = cljs_http.client.decode_body.call(null,inst_11893,cljs_http.util.json_decode,"application/json",inst_11894);
var inst_11896 = cljs.core.async.put_BANG_.call(null,channel,inst_11895);
var inst_11897 = cljs.core.async.close_BANG_.call(null,channel);
var state_11899__$1 = (function (){var statearr_11901 = state_11899;
(statearr_11901[(7)] = inst_11896);

return statearr_11901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11899__$1,inst_11897);
} else {
return null;
}
}
});})(c__7703__auto___11909,channel))
;
return ((function (switch__7628__auto__,c__7703__auto___11909,channel){
return (function() {
var cljs_http$client$wrap_json_response_$_state_machine__7629__auto__ = null;
var cljs_http$client$wrap_json_response_$_state_machine__7629__auto____0 = (function (){
var statearr_11905 = [null,null,null,null,null,null,null,null];
(statearr_11905[(0)] = cljs_http$client$wrap_json_response_$_state_machine__7629__auto__);

(statearr_11905[(1)] = (1));

return statearr_11905;
});
var cljs_http$client$wrap_json_response_$_state_machine__7629__auto____1 = (function (state_11899){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_11899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e11906){if((e11906 instanceof Object)){
var ex__7632__auto__ = e11906;
var statearr_11907_11910 = state_11899;
(statearr_11907_11910[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11911 = state_11899;
state_11899 = G__11911;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs_http$client$wrap_json_response_$_state_machine__7629__auto__ = function(state_11899){
switch(arguments.length){
case 0:
return cljs_http$client$wrap_json_response_$_state_machine__7629__auto____0.call(this);
case 1:
return cljs_http$client$wrap_json_response_$_state_machine__7629__auto____1.call(this,state_11899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$client$wrap_json_response_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$client$wrap_json_response_$_state_machine__7629__auto____0;
cljs_http$client$wrap_json_response_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$client$wrap_json_response_$_state_machine__7629__auto____1;
return cljs_http$client$wrap_json_response_$_state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___11909,channel))
})();
var state__7705__auto__ = (function (){var statearr_11908 = f__7704__auto__.call(null);
(statearr_11908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___11909);

return statearr_11908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___11909,channel))
);


return channel;
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__11915){
var map__11916 = p__11915;
var map__11916__$1 = ((((!((map__11916 == null)))?((((map__11916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11916):map__11916);
var req = map__11916__$1;
var query_params = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__11921){
var map__11922 = p__11921;
var map__11922__$1 = ((((!((map__11922 == null)))?((((map__11922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11922):map__11922);
var request = map__11922__$1;
var form_params = cljs.core.get.call(null,map__11922__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__11922__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4456__auto__ = form_params;
if(cljs.core.truth_(and__4456__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4456__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function cljs_http$client$wrap_android_cors_bugfix(client){
return (function (request){
return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random()):request));
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__11924_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__11924_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__11929){
var map__11930 = p__11929;
var map__11930__$1 = ((((!((map__11930 == null)))?((((map__11930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11930):map__11930);
var req = map__11930__$1;
var query_params = cljs.core.get.call(null,map__11930__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__11930,map__11930__$1,req,query_params){
return (function (p1__11925_SHARP_){
return cljs.core.merge.call(null,p1__11925_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__11930,map__11930__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 * an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(){
var args__5514__auto__ = [];
var len__5507__auto___11936 = arguments.length;
var i__5508__auto___11937 = (0);
while(true){
if((i__5508__auto___11937 < len__5507__auto___11936)){
args__5514__auto__.push((arguments[i__5508__auto___11937]));

var G__11938 = (i__5508__auto___11937 + (1));
i__5508__auto___11937 = G__11938;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11934){
var vec__11935 = p__11934;
var credentials = cljs.core.nth.call(null,vec__11935,(0),null);
return ((function (vec__11935,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4468__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4468__auto__)){
return or__4468__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__11935,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq11932){
var G__11933 = cljs.core.first.call(null,seq11932);
var seq11932__$1 = cljs.core.next.call(null,seq11932);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__11933,seq11932__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/client.
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(){
var args__5514__auto__ = [];
var len__5507__auto___11943 = arguments.length;
var i__5508__auto___11944 = (0);
while(true){
if((i__5508__auto___11944 < len__5507__auto___11943)){
args__5514__auto__.push((arguments[i__5508__auto___11944]));

var G__11945 = (i__5508__auto___11944 + (1));
i__5508__auto___11944 = G__11945;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11941){
var vec__11942 = p__11941;
var req = cljs.core.nth.call(null,vec__11942,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq11939){
var G__11940 = cljs.core.first.call(null,seq11939);
var seq11939__$1 = cljs.core.next.call(null,seq11939);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__11940,seq11939__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(){
var args__5514__auto__ = [];
var len__5507__auto___11950 = arguments.length;
var i__5508__auto___11951 = (0);
while(true){
if((i__5508__auto___11951 < len__5507__auto___11950)){
args__5514__auto__.push((arguments[i__5508__auto___11951]));

var G__11952 = (i__5508__auto___11951 + (1));
i__5508__auto___11951 = G__11952;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11948){
var vec__11949 = p__11948;
var req = cljs.core.nth.call(null,vec__11949,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq11946){
var G__11947 = cljs.core.first.call(null,seq11946);
var seq11946__$1 = cljs.core.next.call(null,seq11946);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__11947,seq11946__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(){
var args__5514__auto__ = [];
var len__5507__auto___11957 = arguments.length;
var i__5508__auto___11958 = (0);
while(true){
if((i__5508__auto___11958 < len__5507__auto___11957)){
args__5514__auto__.push((arguments[i__5508__auto___11958]));

var G__11959 = (i__5508__auto___11958 + (1));
i__5508__auto___11958 = G__11959;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11955){
var vec__11956 = p__11955;
var req = cljs.core.nth.call(null,vec__11956,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq11953){
var G__11954 = cljs.core.first.call(null,seq11953);
var seq11953__$1 = cljs.core.next.call(null,seq11953);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__11954,seq11953__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(){
var args__5514__auto__ = [];
var len__5507__auto___11964 = arguments.length;
var i__5508__auto___11965 = (0);
while(true){
if((i__5508__auto___11965 < len__5507__auto___11964)){
args__5514__auto__.push((arguments[i__5508__auto___11965]));

var G__11966 = (i__5508__auto___11965 + (1));
i__5508__auto___11965 = G__11966;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11962){
var vec__11963 = p__11962;
var req = cljs.core.nth.call(null,vec__11963,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq11960){
var G__11961 = cljs.core.first.call(null,seq11960);
var seq11960__$1 = cljs.core.next.call(null,seq11960);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__11961,seq11960__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(){
var args__5514__auto__ = [];
var len__5507__auto___11971 = arguments.length;
var i__5508__auto___11972 = (0);
while(true){
if((i__5508__auto___11972 < len__5507__auto___11971)){
args__5514__auto__.push((arguments[i__5508__auto___11972]));

var G__11973 = (i__5508__auto___11972 + (1));
i__5508__auto___11972 = G__11973;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11969){
var vec__11970 = p__11969;
var req = cljs.core.nth.call(null,vec__11970,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq11967){
var G__11968 = cljs.core.first.call(null,seq11967);
var seq11967__$1 = cljs.core.next.call(null,seq11967);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__11968,seq11967__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(){
var args__5514__auto__ = [];
var len__5507__auto___11978 = arguments.length;
var i__5508__auto___11979 = (0);
while(true){
if((i__5508__auto___11979 < len__5507__auto___11978)){
args__5514__auto__.push((arguments[i__5508__auto___11979]));

var G__11980 = (i__5508__auto___11979 + (1));
i__5508__auto___11979 = G__11980;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11976){
var vec__11977 = p__11976;
var req = cljs.core.nth.call(null,vec__11977,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq11974){
var G__11975 = cljs.core.first.call(null,seq11974);
var seq11974__$1 = cljs.core.next.call(null,seq11974);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__11975,seq11974__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(){
var args__5514__auto__ = [];
var len__5507__auto___11985 = arguments.length;
var i__5508__auto___11986 = (0);
while(true){
if((i__5508__auto___11986 < len__5507__auto___11985)){
args__5514__auto__.push((arguments[i__5508__auto___11986]));

var G__11987 = (i__5508__auto___11986 + (1));
i__5508__auto___11986 = G__11987;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11983){
var vec__11984 = p__11983;
var req = cljs.core.nth.call(null,vec__11984,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq11981){
var G__11982 = cljs.core.first.call(null,seq11981);
var seq11981__$1 = cljs.core.next.call(null,seq11981);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__11982,seq11981__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(){
var args__5514__auto__ = [];
var len__5507__auto___11992 = arguments.length;
var i__5508__auto___11993 = (0);
while(true){
if((i__5508__auto___11993 < len__5507__auto___11992)){
args__5514__auto__.push((arguments[i__5508__auto___11993]));

var G__11994 = (i__5508__auto___11993 + (1));
i__5508__auto___11993 = G__11994;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__11990){
var vec__11991 = p__11990;
var req = cljs.core.nth.call(null,vec__11991,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq11988){
var G__11989 = cljs.core.first.call(null,seq11988);
var seq11988__$1 = cljs.core.next.call(null,seq11988);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__11989,seq11988__$1);
});

//# sourceMappingURL=client.js.map