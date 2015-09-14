// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t12181 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12181 = (function (fn_handler,f,meta12182){
this.fn_handler = fn_handler;
this.f = f;
this.meta12182 = meta12182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12183,meta12182__$1){
var self__ = this;
var _12183__$1 = this;
return (new cljs.core.async.t12181(self__.fn_handler,self__.f,meta12182__$1));
});

cljs.core.async.t12181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12183){
var self__ = this;
var _12183__$1 = this;
return self__.meta12182;
});

cljs.core.async.t12181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta12182","meta12182",1765938210,null)], null);
});

cljs.core.async.t12181.cljs$lang$type = true;

cljs.core.async.t12181.cljs$lang$ctorStr = "cljs.core.async/t12181";

cljs.core.async.t12181.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12181");
});

cljs.core.async.__GT_t12181 = (function cljs$core$async$fn_handler_$___GT_t12181(fn_handler__$1,f__$1,meta12182){
return (new cljs.core.async.t12181(fn_handler__$1,f__$1,meta12182));
});

}

return (new cljs.core.async.t12181(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer. If buf-or-n is a number,
 * will create and use a fixed buffer of that size.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args12186 = [];
var len__5507__auto___12189 = arguments.length;
var i__5508__auto___12190 = (0);
while(true){
if((i__5508__auto___12190 < len__5507__auto___12189)){
args12186.push((arguments[i__5508__auto___12190]));

var G__12191 = (i__5508__auto___12190 + (1));
i__5508__auto___12190 = G__12191;
continue;
} else {
}
break;
}

var G__12188 = args12186.length;
switch (G__12188) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12186.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 1;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args12193 = [];
var len__5507__auto___12196 = arguments.length;
var i__5508__auto___12197 = (0);
while(true){
if((i__5508__auto___12197 < len__5507__auto___12196)){
args12193.push((arguments[i__5508__auto___12197]));

var G__12198 = (i__5508__auto___12197 + (1));
i__5508__auto___12197 = G__12198;
continue;
} else {
}
break;
}

var G__12195 = args12193.length;
switch (G__12195) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12193.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12200 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12200);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12200,ret){
return (function (){
return fn1.call(null,val_12200);
});})(val_12200,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(){
return null;
});
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args12201 = [];
var len__5507__auto___12204 = arguments.length;
var i__5508__auto___12205 = (0);
while(true){
if((i__5508__auto___12205 < len__5507__auto___12204)){
args12201.push((arguments[i__5508__auto___12205]));

var G__12206 = (i__5508__auto___12205 + (1));
i__5508__auto___12205 = G__12206;
continue;
} else {
}
break;
}

var G__12203 = args12201.length;
switch (G__12203) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12201.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
return cljs.core.async.put_BANG_.call(null,port,val,cljs.core.async.nop);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn0){
return cljs.core.async.put_BANG_.call(null,port,val,fn0,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn0,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));
if(cljs.core.truth_((function (){var and__4456__auto__ = ret;
if(cljs.core.truth_(and__4456__auto__)){
return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else {
return and__4456__auto__;
}
})())){
if(cljs.core.truth_(on_caller_QMARK_)){
fn0.call(null);
} else {
cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else {
}

return null;
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5352__auto___12208 = n;
var x_12209 = (0);
while(true){
if((x_12209 < n__5352__auto___12208)){
(a[x_12209] = (0));

var G__12210 = (x_12209 + (1));
x_12209 = G__12210;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12211 = (i + (1));
i = G__12211;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12215 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12215 = (function (alt_flag,flag,meta12216){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12216 = meta12216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12217,meta12216__$1){
var self__ = this;
var _12217__$1 = this;
return (new cljs.core.async.t12215(self__.alt_flag,self__.flag,meta12216__$1));
});})(flag))
;

cljs.core.async.t12215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12217){
var self__ = this;
var _12217__$1 = this;
return self__.meta12216;
});})(flag))
;

cljs.core.async.t12215.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12215.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12216","meta12216",-1579810232,null)], null);
});})(flag))
;

cljs.core.async.t12215.cljs$lang$type = true;

cljs.core.async.t12215.cljs$lang$ctorStr = "cljs.core.async/t12215";

cljs.core.async.t12215.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12215");
});})(flag))
;

cljs.core.async.__GT_t12215 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12215(alt_flag__$1,flag__$1,meta12216){
return (new cljs.core.async.t12215(alt_flag__$1,flag__$1,meta12216));
});})(flag))
;

}

return (new cljs.core.async.t12215(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12221 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12221 = (function (alt_handler,flag,cb,meta12222){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12222 = meta12222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12223,meta12222__$1){
var self__ = this;
var _12223__$1 = this;
return (new cljs.core.async.t12221(self__.alt_handler,self__.flag,self__.cb,meta12222__$1));
});

cljs.core.async.t12221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12223){
var self__ = this;
var _12223__$1 = this;
return self__.meta12222;
});

cljs.core.async.t12221.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12222","meta12222",1851335184,null)], null);
});

cljs.core.async.t12221.cljs$lang$type = true;

cljs.core.async.t12221.cljs$lang$ctorStr = "cljs.core.async/t12221";

cljs.core.async.t12221.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12221");
});

cljs.core.async.__GT_t12221 = (function cljs$core$async$alt_handler_$___GT_t12221(alt_handler__$1,flag__$1,cb__$1,meta12222){
return (new cljs.core.async.t12221(alt_handler__$1,flag__$1,cb__$1,meta12222));
});

}

return (new cljs.core.async.t12221(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12224_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12224_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4468__auto__ = wport;
if(cljs.core.truth_(or__4468__auto__)){
return or__4468__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12225 = (i + (1));
i = G__12225;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4468__auto__ = ret;
if(cljs.core.truth_(or__4468__auto__)){
return or__4468__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4456__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4456__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4456__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints, which
 * can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and nil for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__5514__auto__ = [];
var len__5507__auto___12231 = arguments.length;
var i__5508__auto___12232 = (0);
while(true){
if((i__5508__auto___12232 < len__5507__auto___12231)){
args__5514__auto__.push((arguments[i__5508__auto___12232]));

var G__12233 = (i__5508__auto___12232 + (1));
i__5508__auto___12232 = G__12233;
continue;
} else {
}
break;
}

var argseq__5515__auto__ = ((((1) < args__5514__auto__.length))?(new cljs.core.IndexedSeq(args__5514__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5515__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12228){
var map__12229 = p__12228;
var map__12229__$1 = ((((!((map__12229 == null)))?((((map__12229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12229):map__12229);
var opts = map__12229__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12226){
var G__12227 = cljs.core.first.call(null,seq12226);
var seq12226__$1 = cljs.core.next.call(null,seq12226);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12227,seq12226__$1);
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values produced by applying f to each value taken from
 * the source channel
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t12241 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12241 = (function (map_LT_,f,ch,meta12242){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12242 = meta12242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12243,meta12242__$1){
var self__ = this;
var _12243__$1 = this;
return (new cljs.core.async.t12241(self__.map_LT_,self__.f,self__.ch,meta12242__$1));
});

cljs.core.async.t12241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12243){
var self__ = this;
var _12243__$1 = this;
return self__.meta12242;
});

cljs.core.async.t12241.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t12244 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12244 = (function (map_LT_,f,ch,meta12242,_,fn1,meta12245){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12242 = meta12242;
this._ = _;
this.fn1 = fn1;
this.meta12245 = meta12245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12246,meta12245__$1){
var self__ = this;
var _12246__$1 = this;
return (new cljs.core.async.t12244(self__.map_LT_,self__.f,self__.ch,self__.meta12242,self__._,self__.fn1,meta12245__$1));
});})(___$1))
;

cljs.core.async.t12244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12246){
var self__ = this;
var _12246__$1 = this;
return self__.meta12245;
});})(___$1))
;

cljs.core.async.t12244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12244.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12234_SHARP_){
return f1.call(null,(((p1__12234_SHARP_ == null))?null:self__.f.call(null,p1__12234_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t12244.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12242","meta12242",360494518,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t12241","cljs.core.async/t12241",-1826674595,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12245","meta12245",-801567801,null)], null);
});})(___$1))
;

cljs.core.async.t12244.cljs$lang$type = true;

cljs.core.async.t12244.cljs$lang$ctorStr = "cljs.core.async/t12244";

cljs.core.async.t12244.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12244");
});})(___$1))
;

cljs.core.async.__GT_t12244 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t12244(map_LT___$1,f__$1,ch__$1,meta12242__$1,___$2,fn1__$1,meta12245){
return (new cljs.core.async.t12244(map_LT___$1,f__$1,ch__$1,meta12242__$1,___$2,fn1__$1,meta12245));
});})(___$1))
;

}

return (new cljs.core.async.t12244(self__.map_LT_,self__.f,self__.ch,self__.meta12242,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4456__auto__ = ret;
if(cljs.core.truth_(and__4456__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4456__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t12241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});

cljs.core.async.t12241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a source channel, and returns a channel which\n  contains the values produced by applying f to each value taken from\n  the source channel"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12242","meta12242",360494518,null)], null);
});

cljs.core.async.t12241.cljs$lang$type = true;

cljs.core.async.t12241.cljs$lang$ctorStr = "cljs.core.async/t12241";

cljs.core.async.t12241.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12241");
});

cljs.core.async.__GT_t12241 = (function cljs$core$async$map_LT__$___GT_t12241(map_LT___$1,f__$1,ch__$1,meta12242){
return (new cljs.core.async.t12241(map_LT___$1,f__$1,ch__$1,meta12242));
});

}

return (new cljs.core.async.t12241(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value before supplying it to the target channel.
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t12250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12250 = (function (map_GT_,f,ch,meta12251){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12251 = meta12251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12252,meta12251__$1){
var self__ = this;
var _12252__$1 = this;
return (new cljs.core.async.t12250(self__.map_GT_,self__.f,self__.ch,meta12251__$1));
});

cljs.core.async.t12250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12252){
var self__ = this;
var _12252__$1 = this;
return self__.meta12251;
});

cljs.core.async.t12250.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12250.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12250.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});

cljs.core.async.t12250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a function and a target channel, and returns a channel which\n  applies f to each value before supplying it to the target channel."], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12251","meta12251",1431808234,null)], null);
});

cljs.core.async.t12250.cljs$lang$type = true;

cljs.core.async.t12250.cljs$lang$ctorStr = "cljs.core.async/t12250";

cljs.core.async.t12250.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12250");
});

cljs.core.async.__GT_t12250 = (function cljs$core$async$map_GT__$___GT_t12250(map_GT___$1,f__$1,ch__$1,meta12251){
return (new cljs.core.async.t12250(map_GT___$1,f__$1,ch__$1,meta12251));
});

}

return (new cljs.core.async.t12250(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns true to the
 * target channel.
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t12256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12256 = (function (filter_GT_,p,ch,meta12257){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12257 = meta12257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12258,meta12257__$1){
var self__ = this;
var _12258__$1 = this;
return (new cljs.core.async.t12256(self__.filter_GT_,self__.p,self__.ch,meta12257__$1));
});

cljs.core.async.t12256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12258){
var self__ = this;
var _12258__$1 = this;
return self__.meta12257;
});

cljs.core.async.t12256.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12256.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12256.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else {
return cljs.core.async.impl.channels.box.call(null,null);
}
});

cljs.core.async.t12256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes a predicate and a target channel, and returns a channel which\n  supplies only the values for which the predicate returns true to the\n  target channel."], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12257","meta12257",1521794980,null)], null);
});

cljs.core.async.t12256.cljs$lang$type = true;

cljs.core.async.t12256.cljs$lang$ctorStr = "cljs.core.async/t12256";

cljs.core.async.t12256.cljs$lang$ctorPrWriter = (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t12256");
});

cljs.core.async.__GT_t12256 = (function cljs$core$async$filter_GT__$___GT_t12256(filter_GT___$1,p__$1,ch__$1,meta12257){
return (new cljs.core.async.t12256(filter_GT___$1,p__$1,ch__$1,meta12257));
});

}

return (new cljs.core.async.t12256(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Takes a predicate and a target channel, and returns a channel which
 * supplies only the values for which the predicate returns false to the
 * target channel.
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns true. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args12259 = [];
var len__5507__auto___12303 = arguments.length;
var i__5508__auto___12304 = (0);
while(true){
if((i__5508__auto___12304 < len__5507__auto___12303)){
args12259.push((arguments[i__5508__auto___12304]));

var G__12305 = (i__5508__auto___12304 + (1));
i__5508__auto___12304 = G__12305;
continue;
} else {
}
break;
}

var G__12261 = args12259.length;
switch (G__12261) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12259.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7703__auto___12307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___12307,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___12307,out){
return (function (state_12282){
var state_val_12283 = (state_12282[(1)]);
if((state_val_12283 === (7))){
var inst_12278 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
var statearr_12284_12308 = state_12282__$1;
(statearr_12284_12308[(2)] = inst_12278);

(statearr_12284_12308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (1))){
var state_12282__$1 = state_12282;
var statearr_12285_12309 = state_12282__$1;
(statearr_12285_12309[(2)] = null);

(statearr_12285_12309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (4))){
var inst_12264 = (state_12282[(7)]);
var inst_12264__$1 = (state_12282[(2)]);
var inst_12265 = (inst_12264__$1 == null);
var state_12282__$1 = (function (){var statearr_12286 = state_12282;
(statearr_12286[(7)] = inst_12264__$1);

return statearr_12286;
})();
if(cljs.core.truth_(inst_12265)){
var statearr_12287_12310 = state_12282__$1;
(statearr_12287_12310[(1)] = (5));

} else {
var statearr_12288_12311 = state_12282__$1;
(statearr_12288_12311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (6))){
var inst_12264 = (state_12282[(7)]);
var inst_12269 = p.call(null,inst_12264);
var state_12282__$1 = state_12282;
if(cljs.core.truth_(inst_12269)){
var statearr_12289_12312 = state_12282__$1;
(statearr_12289_12312[(1)] = (8));

} else {
var statearr_12290_12313 = state_12282__$1;
(statearr_12290_12313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (3))){
var inst_12280 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12282__$1,inst_12280);
} else {
if((state_val_12283 === (2))){
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12282__$1,(4),ch);
} else {
if((state_val_12283 === (11))){
var inst_12272 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
var statearr_12291_12314 = state_12282__$1;
(statearr_12291_12314[(2)] = inst_12272);

(statearr_12291_12314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (9))){
var state_12282__$1 = state_12282;
var statearr_12292_12315 = state_12282__$1;
(statearr_12292_12315[(2)] = null);

(statearr_12292_12315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (5))){
var inst_12267 = cljs.core.async.close_BANG_.call(null,out);
var state_12282__$1 = state_12282;
var statearr_12293_12316 = state_12282__$1;
(statearr_12293_12316[(2)] = inst_12267);

(statearr_12293_12316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (10))){
var inst_12275 = (state_12282[(2)]);
var state_12282__$1 = (function (){var statearr_12294 = state_12282;
(statearr_12294[(8)] = inst_12275);

return statearr_12294;
})();
var statearr_12295_12317 = state_12282__$1;
(statearr_12295_12317[(2)] = null);

(statearr_12295_12317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (8))){
var inst_12264 = (state_12282[(7)]);
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12282__$1,(11),out,inst_12264);
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
});})(c__7703__auto___12307,out))
;
return ((function (switch__7628__auto__,c__7703__auto___12307,out){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_12299 = [null,null,null,null,null,null,null,null,null];
(statearr_12299[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_12299[(1)] = (1));

return statearr_12299;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_12282){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_12282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e12300){if((e12300 instanceof Object)){
var ex__7632__auto__ = e12300;
var statearr_12301_12318 = state_12282;
(statearr_12301_12318[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12319 = state_12282;
state_12282 = G__12319;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_12282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_12282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___12307,out))
})();
var state__7705__auto__ = (function (){var statearr_12302 = f__7704__auto__.call(null);
(statearr_12302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___12307);

return statearr_12302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___12307,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel, and returns a channel which
 * contains only the values taken from the source channel for which the
 * predicate returns false. The returned channel will be unbuffered by
 * default, or a buf-or-n can be supplied. The channel will close
 * when the source channel closes.
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args12320 = [];
var len__5507__auto___12323 = arguments.length;
var i__5508__auto___12324 = (0);
while(true){
if((i__5508__auto___12324 < len__5507__auto___12323)){
args12320.push((arguments[i__5508__auto___12324]));

var G__12325 = (i__5508__auto___12324 + (1));
i__5508__auto___12324 = G__12325;
continue;
} else {
}
break;
}

var G__12322 = args12320.length;
switch (G__12322) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12320.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7703__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto__){
return (function (state_12478){
var state_val_12479 = (state_12478[(1)]);
if((state_val_12479 === (7))){
var inst_12474 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12480_12517 = state_12478__$1;
(statearr_12480_12517[(2)] = inst_12474);

(statearr_12480_12517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (20))){
var inst_12449 = (state_12478[(7)]);
var inst_12460 = (state_12478[(2)]);
var inst_12461 = cljs.core.next.call(null,inst_12449);
var inst_12435 = inst_12461;
var inst_12436 = null;
var inst_12437 = (0);
var inst_12438 = (0);
var state_12478__$1 = (function (){var statearr_12481 = state_12478;
(statearr_12481[(8)] = inst_12460);

(statearr_12481[(9)] = inst_12436);

(statearr_12481[(10)] = inst_12437);

(statearr_12481[(11)] = inst_12438);

(statearr_12481[(12)] = inst_12435);

return statearr_12481;
})();
var statearr_12482_12518 = state_12478__$1;
(statearr_12482_12518[(2)] = null);

(statearr_12482_12518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (1))){
var state_12478__$1 = state_12478;
var statearr_12483_12519 = state_12478__$1;
(statearr_12483_12519[(2)] = null);

(statearr_12483_12519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (4))){
var inst_12424 = (state_12478[(13)]);
var inst_12424__$1 = (state_12478[(2)]);
var inst_12425 = (inst_12424__$1 == null);
var state_12478__$1 = (function (){var statearr_12487 = state_12478;
(statearr_12487[(13)] = inst_12424__$1);

return statearr_12487;
})();
if(cljs.core.truth_(inst_12425)){
var statearr_12488_12520 = state_12478__$1;
(statearr_12488_12520[(1)] = (5));

} else {
var statearr_12489_12521 = state_12478__$1;
(statearr_12489_12521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (15))){
var state_12478__$1 = state_12478;
var statearr_12490_12522 = state_12478__$1;
(statearr_12490_12522[(2)] = null);

(statearr_12490_12522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (13))){
var inst_12436 = (state_12478[(9)]);
var inst_12437 = (state_12478[(10)]);
var inst_12438 = (state_12478[(11)]);
var inst_12435 = (state_12478[(12)]);
var inst_12445 = (state_12478[(2)]);
var inst_12446 = (inst_12438 + (1));
var tmp12484 = inst_12436;
var tmp12485 = inst_12437;
var tmp12486 = inst_12435;
var inst_12435__$1 = tmp12486;
var inst_12436__$1 = tmp12484;
var inst_12437__$1 = tmp12485;
var inst_12438__$1 = inst_12446;
var state_12478__$1 = (function (){var statearr_12491 = state_12478;
(statearr_12491[(9)] = inst_12436__$1);

(statearr_12491[(14)] = inst_12445);

(statearr_12491[(10)] = inst_12437__$1);

(statearr_12491[(11)] = inst_12438__$1);

(statearr_12491[(12)] = inst_12435__$1);

return statearr_12491;
})();
var statearr_12492_12523 = state_12478__$1;
(statearr_12492_12523[(2)] = null);

(statearr_12492_12523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (6))){
var inst_12424 = (state_12478[(13)]);
var inst_12429 = f.call(null,inst_12424);
var inst_12434 = cljs.core.seq.call(null,inst_12429);
var inst_12435 = inst_12434;
var inst_12436 = null;
var inst_12437 = (0);
var inst_12438 = (0);
var state_12478__$1 = (function (){var statearr_12493 = state_12478;
(statearr_12493[(9)] = inst_12436);

(statearr_12493[(10)] = inst_12437);

(statearr_12493[(11)] = inst_12438);

(statearr_12493[(12)] = inst_12435);

return statearr_12493;
})();
var statearr_12494_12524 = state_12478__$1;
(statearr_12494_12524[(2)] = null);

(statearr_12494_12524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (17))){
var inst_12449 = (state_12478[(7)]);
var inst_12453 = cljs.core.chunk_first.call(null,inst_12449);
var inst_12454 = cljs.core.chunk_rest.call(null,inst_12449);
var inst_12455 = cljs.core.count.call(null,inst_12453);
var inst_12435 = inst_12454;
var inst_12436 = inst_12453;
var inst_12437 = inst_12455;
var inst_12438 = (0);
var state_12478__$1 = (function (){var statearr_12495 = state_12478;
(statearr_12495[(9)] = inst_12436);

(statearr_12495[(10)] = inst_12437);

(statearr_12495[(11)] = inst_12438);

(statearr_12495[(12)] = inst_12435);

return statearr_12495;
})();
var statearr_12496_12525 = state_12478__$1;
(statearr_12496_12525[(2)] = null);

(statearr_12496_12525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (3))){
var inst_12476 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12478__$1,inst_12476);
} else {
if((state_val_12479 === (12))){
var inst_12469 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12497_12526 = state_12478__$1;
(statearr_12497_12526[(2)] = inst_12469);

(statearr_12497_12526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (2))){
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12478__$1,(4),in$);
} else {
if((state_val_12479 === (19))){
var inst_12464 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12498_12527 = state_12478__$1;
(statearr_12498_12527[(2)] = inst_12464);

(statearr_12498_12527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (11))){
var inst_12449 = (state_12478[(7)]);
var inst_12435 = (state_12478[(12)]);
var inst_12449__$1 = cljs.core.seq.call(null,inst_12435);
var state_12478__$1 = (function (){var statearr_12499 = state_12478;
(statearr_12499[(7)] = inst_12449__$1);

return statearr_12499;
})();
if(inst_12449__$1){
var statearr_12500_12528 = state_12478__$1;
(statearr_12500_12528[(1)] = (14));

} else {
var statearr_12501_12529 = state_12478__$1;
(statearr_12501_12529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (9))){
var inst_12471 = (state_12478[(2)]);
var state_12478__$1 = (function (){var statearr_12502 = state_12478;
(statearr_12502[(15)] = inst_12471);

return statearr_12502;
})();
var statearr_12503_12530 = state_12478__$1;
(statearr_12503_12530[(2)] = null);

(statearr_12503_12530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (5))){
var inst_12427 = cljs.core.async.close_BANG_.call(null,out);
var state_12478__$1 = state_12478;
var statearr_12504_12531 = state_12478__$1;
(statearr_12504_12531[(2)] = inst_12427);

(statearr_12504_12531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (14))){
var inst_12449 = (state_12478[(7)]);
var inst_12451 = cljs.core.chunked_seq_QMARK_.call(null,inst_12449);
var state_12478__$1 = state_12478;
if(inst_12451){
var statearr_12505_12532 = state_12478__$1;
(statearr_12505_12532[(1)] = (17));

} else {
var statearr_12506_12533 = state_12478__$1;
(statearr_12506_12533[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (16))){
var inst_12467 = (state_12478[(2)]);
var state_12478__$1 = state_12478;
var statearr_12507_12534 = state_12478__$1;
(statearr_12507_12534[(2)] = inst_12467);

(statearr_12507_12534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12479 === (10))){
var inst_12436 = (state_12478[(9)]);
var inst_12438 = (state_12478[(11)]);
var inst_12443 = cljs.core._nth.call(null,inst_12436,inst_12438);
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12478__$1,(13),out,inst_12443);
} else {
if((state_val_12479 === (18))){
var inst_12449 = (state_12478[(7)]);
var inst_12458 = cljs.core.first.call(null,inst_12449);
var state_12478__$1 = state_12478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12478__$1,(20),out,inst_12458);
} else {
if((state_val_12479 === (8))){
var inst_12437 = (state_12478[(10)]);
var inst_12438 = (state_12478[(11)]);
var inst_12440 = (inst_12438 < inst_12437);
var inst_12441 = inst_12440;
var state_12478__$1 = state_12478;
if(cljs.core.truth_(inst_12441)){
var statearr_12508_12535 = state_12478__$1;
(statearr_12508_12535[(1)] = (10));

} else {
var statearr_12509_12536 = state_12478__$1;
(statearr_12509_12536[(1)] = (11));

}

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
}
}
}
}
}
}
}
});})(c__7703__auto__))
;
return ((function (switch__7628__auto__,c__7703__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7629__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7629__auto____0 = (function (){
var statearr_12513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12513[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7629__auto__);

(statearr_12513[(1)] = (1));

return statearr_12513;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7629__auto____1 = (function (state_12478){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_12478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e12514){if((e12514 instanceof Object)){
var ex__7632__auto__ = e12514;
var statearr_12515_12537 = state_12478;
(statearr_12515_12537[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12538 = state_12478;
state_12478 = G__12538;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7629__auto__ = function(state_12478){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7629__auto____1.call(this,state_12478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7629__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7629__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto__))
})();
var state__7705__auto__ = (function (){var statearr_12516 = f__7704__auto__.call(null);
(statearr_12516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_12516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__))
);

return c__7703__auto__;
});
/**
 * Takes a function and a source channel, and returns a channel which
 * contains the values in each collection produced by applying f to
 * each value taken from the source channel. f must return a
 * collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The channel will close when the source channel
 * closes.
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args12539 = [];
var len__5507__auto___12542 = arguments.length;
var i__5508__auto___12543 = (0);
while(true){
if((i__5508__auto___12543 < len__5507__auto___12542)){
args12539.push((arguments[i__5508__auto___12543]));

var G__12544 = (i__5508__auto___12543 + (1));
i__5508__auto___12543 = G__12544;
continue;
} else {
}
break;
}

var G__12541 = args12539.length;
switch (G__12541) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12539.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a function and a target channel, and returns a channel which
 * applies f to each value put, then supplies each element of the result
 * to the target channel. f must return a collection.
 * 
 * The returned channel will be unbuffered by default, or a buf-or-n
 * can be supplied. The target channel will be closed when the source
 * channel closes.
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args12546 = [];
var len__5507__auto___12549 = arguments.length;
var i__5508__auto___12550 = (0);
while(true){
if((i__5508__auto___12550 < len__5507__auto___12549)){
args12546.push((arguments[i__5508__auto___12550]));

var G__12551 = (i__5508__auto___12550 + (1));
i__5508__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var G__12548 = args12546.length;
switch (G__12548) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12546.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the
 * from channel closes, but can be determined by the close?
 * parameter.
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args12553 = [];
var len__5507__auto___12596 = arguments.length;
var i__5508__auto___12597 = (0);
while(true){
if((i__5508__auto___12597 < len__5507__auto___12596)){
args12553.push((arguments[i__5508__auto___12597]));

var G__12598 = (i__5508__auto___12597 + (1));
i__5508__auto___12597 = G__12598;
continue;
} else {
}
break;
}

var G__12555 = args12553.length;
switch (G__12555) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12553.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7703__auto___12600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___12600){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___12600){
return (function (state_12575){
var state_val_12576 = (state_12575[(1)]);
if((state_val_12576 === (7))){
var inst_12571 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
var statearr_12577_12601 = state_12575__$1;
(statearr_12577_12601[(2)] = inst_12571);

(statearr_12577_12601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (1))){
var state_12575__$1 = state_12575;
var statearr_12578_12602 = state_12575__$1;
(statearr_12578_12602[(2)] = null);

(statearr_12578_12602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (4))){
var inst_12558 = (state_12575[(7)]);
var inst_12558__$1 = (state_12575[(2)]);
var inst_12559 = (inst_12558__$1 == null);
var state_12575__$1 = (function (){var statearr_12579 = state_12575;
(statearr_12579[(7)] = inst_12558__$1);

return statearr_12579;
})();
if(cljs.core.truth_(inst_12559)){
var statearr_12580_12603 = state_12575__$1;
(statearr_12580_12603[(1)] = (5));

} else {
var statearr_12581_12604 = state_12575__$1;
(statearr_12581_12604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (6))){
var inst_12558 = (state_12575[(7)]);
var state_12575__$1 = state_12575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12575__$1,(11),to,inst_12558);
} else {
if((state_val_12576 === (3))){
var inst_12573 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12575__$1,inst_12573);
} else {
if((state_val_12576 === (2))){
var state_12575__$1 = state_12575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12575__$1,(4),from);
} else {
if((state_val_12576 === (11))){
var inst_12568 = (state_12575[(2)]);
var state_12575__$1 = (function (){var statearr_12582 = state_12575;
(statearr_12582[(8)] = inst_12568);

return statearr_12582;
})();
var statearr_12583_12605 = state_12575__$1;
(statearr_12583_12605[(2)] = null);

(statearr_12583_12605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (9))){
var state_12575__$1 = state_12575;
var statearr_12584_12606 = state_12575__$1;
(statearr_12584_12606[(2)] = null);

(statearr_12584_12606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (5))){
var state_12575__$1 = state_12575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12585_12607 = state_12575__$1;
(statearr_12585_12607[(1)] = (8));

} else {
var statearr_12586_12608 = state_12575__$1;
(statearr_12586_12608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (10))){
var inst_12565 = (state_12575[(2)]);
var state_12575__$1 = state_12575;
var statearr_12587_12609 = state_12575__$1;
(statearr_12587_12609[(2)] = inst_12565);

(statearr_12587_12609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12576 === (8))){
var inst_12562 = cljs.core.async.close_BANG_.call(null,to);
var state_12575__$1 = state_12575;
var statearr_12588_12610 = state_12575__$1;
(statearr_12588_12610[(2)] = inst_12562);

(statearr_12588_12610[(1)] = (10));


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
});})(c__7703__auto___12600))
;
return ((function (switch__7628__auto__,c__7703__auto___12600){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_12592 = [null,null,null,null,null,null,null,null,null];
(statearr_12592[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_12592[(1)] = (1));

return statearr_12592;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_12575){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_12575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e12593){if((e12593 instanceof Object)){
var ex__7632__auto__ = e12593;
var statearr_12594_12611 = state_12575;
(statearr_12594_12611[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12612 = state_12575;
state_12575 = G__12612;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_12575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_12575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___12600))
})();
var state__7705__auto__ = (function (){var statearr_12595 = f__7704__auto__.call(null);
(statearr_12595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___12600);

return statearr_12595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___12600))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args12613 = [];
var len__5507__auto___12659 = arguments.length;
var i__5508__auto___12660 = (0);
while(true){
if((i__5508__auto___12660 < len__5507__auto___12659)){
args12613.push((arguments[i__5508__auto___12660]));

var G__12661 = (i__5508__auto___12660 + (1));
i__5508__auto___12660 = G__12661;
continue;
} else {
}
break;
}

var G__12615 = args12613.length;
switch (G__12615) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12613.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7703__auto___12663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___12663,tc,fc){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___12663,tc,fc){
return (function (state_12637){
var state_val_12638 = (state_12637[(1)]);
if((state_val_12638 === (7))){
var inst_12633 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12639_12664 = state_12637__$1;
(statearr_12639_12664[(2)] = inst_12633);

(statearr_12639_12664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (1))){
var state_12637__$1 = state_12637;
var statearr_12640_12665 = state_12637__$1;
(statearr_12640_12665[(2)] = null);

(statearr_12640_12665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (4))){
var inst_12618 = (state_12637[(7)]);
var inst_12618__$1 = (state_12637[(2)]);
var inst_12619 = (inst_12618__$1 == null);
var state_12637__$1 = (function (){var statearr_12641 = state_12637;
(statearr_12641[(7)] = inst_12618__$1);

return statearr_12641;
})();
if(cljs.core.truth_(inst_12619)){
var statearr_12642_12666 = state_12637__$1;
(statearr_12642_12666[(1)] = (5));

} else {
var statearr_12643_12667 = state_12637__$1;
(statearr_12643_12667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (6))){
var inst_12618 = (state_12637[(7)]);
var inst_12624 = p.call(null,inst_12618);
var state_12637__$1 = state_12637;
if(cljs.core.truth_(inst_12624)){
var statearr_12644_12668 = state_12637__$1;
(statearr_12644_12668[(1)] = (9));

} else {
var statearr_12645_12669 = state_12637__$1;
(statearr_12645_12669[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (3))){
var inst_12635 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12637__$1,inst_12635);
} else {
if((state_val_12638 === (2))){
var state_12637__$1 = state_12637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12637__$1,(4),ch);
} else {
if((state_val_12638 === (11))){
var inst_12618 = (state_12637[(7)]);
var inst_12628 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12637__$1,(8),inst_12628,inst_12618);
} else {
if((state_val_12638 === (9))){
var state_12637__$1 = state_12637;
var statearr_12646_12670 = state_12637__$1;
(statearr_12646_12670[(2)] = tc);

(statearr_12646_12670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (5))){
var inst_12621 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12622 = cljs.core.async.close_BANG_.call(null,fc);
var state_12637__$1 = (function (){var statearr_12647 = state_12637;
(statearr_12647[(8)] = inst_12621);

return statearr_12647;
})();
var statearr_12648_12671 = state_12637__$1;
(statearr_12648_12671[(2)] = inst_12622);

(statearr_12648_12671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (10))){
var state_12637__$1 = state_12637;
var statearr_12649_12672 = state_12637__$1;
(statearr_12649_12672[(2)] = fc);

(statearr_12649_12672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (8))){
var inst_12630 = (state_12637[(2)]);
var state_12637__$1 = (function (){var statearr_12650 = state_12637;
(statearr_12650[(9)] = inst_12630);

return statearr_12650;
})();
var statearr_12651_12673 = state_12637__$1;
(statearr_12651_12673[(2)] = null);

(statearr_12651_12673[(1)] = (2));


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
});})(c__7703__auto___12663,tc,fc))
;
return ((function (switch__7628__auto__,c__7703__auto___12663,tc,fc){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_12655 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12655[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_12655[(1)] = (1));

return statearr_12655;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_12637){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_12637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e12656){if((e12656 instanceof Object)){
var ex__7632__auto__ = e12656;
var statearr_12657_12674 = state_12637;
(statearr_12657_12674[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12675 = state_12637;
state_12637 = G__12675;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_12637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_12637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___12663,tc,fc))
})();
var state__7705__auto__ = (function (){var statearr_12658 = f__7704__auto__.call(null);
(statearr_12658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___12663);

return statearr_12658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___12663,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7703__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto__){
return (function (state_12722){
var state_val_12723 = (state_12722[(1)]);
if((state_val_12723 === (1))){
var inst_12708 = init;
var state_12722__$1 = (function (){var statearr_12724 = state_12722;
(statearr_12724[(7)] = inst_12708);

return statearr_12724;
})();
var statearr_12725_12740 = state_12722__$1;
(statearr_12725_12740[(2)] = null);

(statearr_12725_12740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (2))){
var state_12722__$1 = state_12722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12722__$1,(4),ch);
} else {
if((state_val_12723 === (3))){
var inst_12720 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12722__$1,inst_12720);
} else {
if((state_val_12723 === (4))){
var inst_12711 = (state_12722[(8)]);
var inst_12711__$1 = (state_12722[(2)]);
var inst_12712 = (inst_12711__$1 == null);
var state_12722__$1 = (function (){var statearr_12726 = state_12722;
(statearr_12726[(8)] = inst_12711__$1);

return statearr_12726;
})();
if(cljs.core.truth_(inst_12712)){
var statearr_12727_12741 = state_12722__$1;
(statearr_12727_12741[(1)] = (5));

} else {
var statearr_12728_12742 = state_12722__$1;
(statearr_12728_12742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (5))){
var inst_12708 = (state_12722[(7)]);
var state_12722__$1 = state_12722;
var statearr_12729_12743 = state_12722__$1;
(statearr_12729_12743[(2)] = inst_12708);

(statearr_12729_12743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (6))){
var inst_12711 = (state_12722[(8)]);
var inst_12708 = (state_12722[(7)]);
var inst_12715 = f.call(null,inst_12708,inst_12711);
var inst_12708__$1 = inst_12715;
var state_12722__$1 = (function (){var statearr_12730 = state_12722;
(statearr_12730[(7)] = inst_12708__$1);

return statearr_12730;
})();
var statearr_12731_12744 = state_12722__$1;
(statearr_12731_12744[(2)] = null);

(statearr_12731_12744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (7))){
var inst_12718 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
var statearr_12732_12745 = state_12722__$1;
(statearr_12732_12745[(2)] = inst_12718);

(statearr_12732_12745[(1)] = (3));


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
});})(c__7703__auto__))
;
return ((function (switch__7628__auto__,c__7703__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7629__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7629__auto____0 = (function (){
var statearr_12736 = [null,null,null,null,null,null,null,null,null];
(statearr_12736[(0)] = cljs$core$async$reduce_$_state_machine__7629__auto__);

(statearr_12736[(1)] = (1));

return statearr_12736;
});
var cljs$core$async$reduce_$_state_machine__7629__auto____1 = (function (state_12722){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_12722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e12737){if((e12737 instanceof Object)){
var ex__7632__auto__ = e12737;
var statearr_12738_12746 = state_12722;
(statearr_12738_12746[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12747 = state_12722;
state_12722 = G__12747;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7629__auto__ = function(state_12722){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7629__auto____1.call(this,state_12722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7629__auto____0;
cljs$core$async$reduce_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7629__auto____1;
return cljs$core$async$reduce_$_state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto__))
})();
var state__7705__auto__ = (function (){var statearr_12739 = f__7704__auto__.call(null);
(statearr_12739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_12739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__))
);

return c__7703__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args12748 = [];
var len__5507__auto___12792 = arguments.length;
var i__5508__auto___12793 = (0);
while(true){
if((i__5508__auto___12793 < len__5507__auto___12792)){
args12748.push((arguments[i__5508__auto___12793]));

var G__12794 = (i__5508__auto___12793 + (1));
i__5508__auto___12793 = G__12794;
continue;
} else {
}
break;
}

var G__12750 = args12748.length;
switch (G__12750) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12748.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7703__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto__){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto__){
return (function (state_12771){
var state_val_12772 = (state_12771[(1)]);
if((state_val_12772 === (7))){
var inst_12752 = (state_12771[(7)]);
var inst_12757 = (state_12771[(2)]);
var inst_12758 = cljs.core.next.call(null,inst_12752);
var inst_12752__$1 = inst_12758;
var state_12771__$1 = (function (){var statearr_12773 = state_12771;
(statearr_12773[(8)] = inst_12757);

(statearr_12773[(7)] = inst_12752__$1);

return statearr_12773;
})();
var statearr_12774_12796 = state_12771__$1;
(statearr_12774_12796[(2)] = null);

(statearr_12774_12796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (1))){
var inst_12751 = cljs.core.seq.call(null,coll);
var inst_12752 = inst_12751;
var state_12771__$1 = (function (){var statearr_12775 = state_12771;
(statearr_12775[(7)] = inst_12752);

return statearr_12775;
})();
var statearr_12776_12797 = state_12771__$1;
(statearr_12776_12797[(2)] = null);

(statearr_12776_12797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (4))){
var inst_12752 = (state_12771[(7)]);
var inst_12755 = cljs.core.first.call(null,inst_12752);
var state_12771__$1 = state_12771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12771__$1,(7),ch,inst_12755);
} else {
if((state_val_12772 === (6))){
var inst_12767 = (state_12771[(2)]);
var state_12771__$1 = state_12771;
var statearr_12777_12798 = state_12771__$1;
(statearr_12777_12798[(2)] = inst_12767);

(statearr_12777_12798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (3))){
var inst_12769 = (state_12771[(2)]);
var state_12771__$1 = state_12771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12771__$1,inst_12769);
} else {
if((state_val_12772 === (2))){
var inst_12752 = (state_12771[(7)]);
var state_12771__$1 = state_12771;
if(cljs.core.truth_(inst_12752)){
var statearr_12778_12799 = state_12771__$1;
(statearr_12778_12799[(1)] = (4));

} else {
var statearr_12779_12800 = state_12771__$1;
(statearr_12779_12800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (9))){
var state_12771__$1 = state_12771;
var statearr_12780_12801 = state_12771__$1;
(statearr_12780_12801[(2)] = null);

(statearr_12780_12801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (5))){
var state_12771__$1 = state_12771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12781_12802 = state_12771__$1;
(statearr_12781_12802[(1)] = (8));

} else {
var statearr_12782_12803 = state_12771__$1;
(statearr_12782_12803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (10))){
var inst_12765 = (state_12771[(2)]);
var state_12771__$1 = state_12771;
var statearr_12783_12804 = state_12771__$1;
(statearr_12783_12804[(2)] = inst_12765);

(statearr_12783_12804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (8))){
var inst_12762 = cljs.core.async.close_BANG_.call(null,ch);
var state_12771__$1 = state_12771;
var statearr_12784_12805 = state_12771__$1;
(statearr_12784_12805[(2)] = inst_12762);

(statearr_12784_12805[(1)] = (10));


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
});})(c__7703__auto__))
;
return ((function (switch__7628__auto__,c__7703__auto__){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_12788 = [null,null,null,null,null,null,null,null,null];
(statearr_12788[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_12788[(1)] = (1));

return statearr_12788;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_12771){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_12771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e12789){if((e12789 instanceof Object)){
var ex__7632__auto__ = e12789;
var statearr_12790_12806 = state_12771;
(statearr_12790_12806[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12807 = state_12771;
state_12771 = G__12807;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_12771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_12771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto__))
})();
var state__7705__auto__ = (function (){var statearr_12791 = f__7704__auto__.call(null);
(statearr_12791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_12791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto__))
);

return c__7703__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5104__auto__ = (((_ == null))?null:_);
var m__5105__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,_);
} else {
var m__5105__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5105__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m,ch);
} else {
var m__5105__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m);
} else {
var m__5105__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap put throws an exception, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t13035 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13035 = (function (mult,ch,cs,meta13036){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13036 = meta13036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13037,meta13036__$1){
var self__ = this;
var _13037__$1 = this;
return (new cljs.core.async.t13035(self__.mult,self__.ch,self__.cs,meta13036__$1));
});})(cs))
;

cljs.core.async.t13035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13037){
var self__ = this;
var _13037__$1 = this;
return self__.meta13036;
});})(cs))
;

cljs.core.async.t13035.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13035.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13035.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap put throws an exception, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13036","meta13036",1244973216,null)], null);
});})(cs))
;

cljs.core.async.t13035.cljs$lang$type = true;

cljs.core.async.t13035.cljs$lang$ctorStr = "cljs.core.async/t13035";

cljs.core.async.t13035.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t13035");
});})(cs))
;

cljs.core.async.__GT_t13035 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13035(mult__$1,ch__$1,cs__$1,meta13036){
return (new cljs.core.async.t13035(mult__$1,ch__$1,cs__$1,meta13036));
});})(cs))
;

}

return (new cljs.core.async.t13035(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7703__auto___13258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___13258,cs,m,dchan,dctr,done){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___13258,cs,m,dchan,dctr,done){
return (function (state_13172){
var state_val_13173 = (state_13172[(1)]);
if((state_val_13173 === (7))){
var inst_13168 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13174_13259 = state_13172__$1;
(statearr_13174_13259[(2)] = inst_13168);

(statearr_13174_13259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (20))){
var inst_13069 = (state_13172[(7)]);
var inst_13079 = cljs.core.first.call(null,inst_13069);
var inst_13080 = cljs.core.nth.call(null,inst_13079,(0),null);
var inst_13081 = cljs.core.nth.call(null,inst_13079,(1),null);
var state_13172__$1 = (function (){var statearr_13175 = state_13172;
(statearr_13175[(8)] = inst_13080);

return statearr_13175;
})();
if(cljs.core.truth_(inst_13081)){
var statearr_13176_13260 = state_13172__$1;
(statearr_13176_13260[(1)] = (22));

} else {
var statearr_13177_13261 = state_13172__$1;
(statearr_13177_13261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (27))){
var inst_13109 = (state_13172[(9)]);
var inst_13111 = (state_13172[(10)]);
var inst_13116 = cljs.core._nth.call(null,inst_13109,inst_13111);
var state_13172__$1 = (function (){var statearr_13178 = state_13172;
(statearr_13178[(11)] = inst_13116);

return statearr_13178;
})();
var statearr_13179_13262 = state_13172__$1;
(statearr_13179_13262[(2)] = null);

(statearr_13179_13262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (1))){
var state_13172__$1 = state_13172;
var statearr_13180_13263 = state_13172__$1;
(statearr_13180_13263[(2)] = null);

(statearr_13180_13263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (24))){
var inst_13069 = (state_13172[(7)]);
var inst_13086 = (state_13172[(2)]);
var inst_13087 = cljs.core.next.call(null,inst_13069);
var inst_13049 = inst_13087;
var inst_13050 = null;
var inst_13051 = (0);
var inst_13052 = (0);
var state_13172__$1 = (function (){var statearr_13181 = state_13172;
(statearr_13181[(12)] = inst_13086);

(statearr_13181[(13)] = inst_13052);

(statearr_13181[(14)] = inst_13051);

(statearr_13181[(15)] = inst_13050);

(statearr_13181[(16)] = inst_13049);

return statearr_13181;
})();
var statearr_13182_13264 = state_13172__$1;
(statearr_13182_13264[(2)] = null);

(statearr_13182_13264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (39))){
var inst_13129 = (state_13172[(17)]);
var inst_13147 = (state_13172[(2)]);
var inst_13148 = cljs.core.next.call(null,inst_13129);
var inst_13108 = inst_13148;
var inst_13109 = null;
var inst_13110 = (0);
var inst_13111 = (0);
var state_13172__$1 = (function (){var statearr_13186 = state_13172;
(statearr_13186[(9)] = inst_13109);

(statearr_13186[(18)] = inst_13108);

(statearr_13186[(10)] = inst_13111);

(statearr_13186[(19)] = inst_13147);

(statearr_13186[(20)] = inst_13110);

return statearr_13186;
})();
var statearr_13187_13265 = state_13172__$1;
(statearr_13187_13265[(2)] = null);

(statearr_13187_13265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (4))){
var inst_13040 = (state_13172[(21)]);
var inst_13040__$1 = (state_13172[(2)]);
var inst_13041 = (inst_13040__$1 == null);
var state_13172__$1 = (function (){var statearr_13188 = state_13172;
(statearr_13188[(21)] = inst_13040__$1);

return statearr_13188;
})();
if(cljs.core.truth_(inst_13041)){
var statearr_13189_13266 = state_13172__$1;
(statearr_13189_13266[(1)] = (5));

} else {
var statearr_13190_13267 = state_13172__$1;
(statearr_13190_13267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (15))){
var inst_13052 = (state_13172[(13)]);
var inst_13051 = (state_13172[(14)]);
var inst_13050 = (state_13172[(15)]);
var inst_13049 = (state_13172[(16)]);
var inst_13065 = (state_13172[(2)]);
var inst_13066 = (inst_13052 + (1));
var tmp13183 = inst_13051;
var tmp13184 = inst_13050;
var tmp13185 = inst_13049;
var inst_13049__$1 = tmp13185;
var inst_13050__$1 = tmp13184;
var inst_13051__$1 = tmp13183;
var inst_13052__$1 = inst_13066;
var state_13172__$1 = (function (){var statearr_13191 = state_13172;
(statearr_13191[(13)] = inst_13052__$1);

(statearr_13191[(14)] = inst_13051__$1);

(statearr_13191[(15)] = inst_13050__$1);

(statearr_13191[(16)] = inst_13049__$1);

(statearr_13191[(22)] = inst_13065);

return statearr_13191;
})();
var statearr_13192_13268 = state_13172__$1;
(statearr_13192_13268[(2)] = null);

(statearr_13192_13268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (21))){
var inst_13090 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13193_13269 = state_13172__$1;
(statearr_13193_13269[(2)] = inst_13090);

(statearr_13193_13269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (31))){
var inst_13116 = (state_13172[(11)]);
var inst_13117 = (state_13172[(2)]);
var inst_13118 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_13119 = cljs.core.async.untap_STAR_.call(null,m,inst_13116);
var state_13172__$1 = (function (){var statearr_13194 = state_13172;
(statearr_13194[(23)] = inst_13117);

(statearr_13194[(24)] = inst_13118);

return statearr_13194;
})();
var statearr_13195_13270 = state_13172__$1;
(statearr_13195_13270[(2)] = inst_13119);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (32))){
var inst_13116 = (state_13172[(11)]);
var inst_13040 = (state_13172[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13172,(31),Object,null,(30));
var inst_13123 = cljs.core.async.put_BANG_.call(null,inst_13116,inst_13040,done);
var state_13172__$1 = state_13172;
var statearr_13196_13271 = state_13172__$1;
(statearr_13196_13271[(2)] = inst_13123);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (40))){
var inst_13138 = (state_13172[(25)]);
var inst_13139 = (state_13172[(2)]);
var inst_13140 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_13141 = cljs.core.async.untap_STAR_.call(null,m,inst_13138);
var state_13172__$1 = (function (){var statearr_13197 = state_13172;
(statearr_13197[(26)] = inst_13139);

(statearr_13197[(27)] = inst_13140);

return statearr_13197;
})();
var statearr_13198_13272 = state_13172__$1;
(statearr_13198_13272[(2)] = inst_13141);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (33))){
var inst_13129 = (state_13172[(17)]);
var inst_13131 = cljs.core.chunked_seq_QMARK_.call(null,inst_13129);
var state_13172__$1 = state_13172;
if(inst_13131){
var statearr_13199_13273 = state_13172__$1;
(statearr_13199_13273[(1)] = (36));

} else {
var statearr_13200_13274 = state_13172__$1;
(statearr_13200_13274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (13))){
var inst_13059 = (state_13172[(28)]);
var inst_13062 = cljs.core.async.close_BANG_.call(null,inst_13059);
var state_13172__$1 = state_13172;
var statearr_13201_13275 = state_13172__$1;
(statearr_13201_13275[(2)] = inst_13062);

(statearr_13201_13275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (22))){
var inst_13080 = (state_13172[(8)]);
var inst_13083 = cljs.core.async.close_BANG_.call(null,inst_13080);
var state_13172__$1 = state_13172;
var statearr_13202_13276 = state_13172__$1;
(statearr_13202_13276[(2)] = inst_13083);

(statearr_13202_13276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (36))){
var inst_13129 = (state_13172[(17)]);
var inst_13133 = cljs.core.chunk_first.call(null,inst_13129);
var inst_13134 = cljs.core.chunk_rest.call(null,inst_13129);
var inst_13135 = cljs.core.count.call(null,inst_13133);
var inst_13108 = inst_13134;
var inst_13109 = inst_13133;
var inst_13110 = inst_13135;
var inst_13111 = (0);
var state_13172__$1 = (function (){var statearr_13203 = state_13172;
(statearr_13203[(9)] = inst_13109);

(statearr_13203[(18)] = inst_13108);

(statearr_13203[(10)] = inst_13111);

(statearr_13203[(20)] = inst_13110);

return statearr_13203;
})();
var statearr_13204_13277 = state_13172__$1;
(statearr_13204_13277[(2)] = null);

(statearr_13204_13277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (41))){
var inst_13138 = (state_13172[(25)]);
var inst_13040 = (state_13172[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13172,(40),Object,null,(39));
var inst_13145 = cljs.core.async.put_BANG_.call(null,inst_13138,inst_13040,done);
var state_13172__$1 = state_13172;
var statearr_13205_13278 = state_13172__$1;
(statearr_13205_13278[(2)] = inst_13145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (43))){
var state_13172__$1 = state_13172;
var statearr_13206_13279 = state_13172__$1;
(statearr_13206_13279[(2)] = null);

(statearr_13206_13279[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (29))){
var inst_13156 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13207_13280 = state_13172__$1;
(statearr_13207_13280[(2)] = inst_13156);

(statearr_13207_13280[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (44))){
var inst_13165 = (state_13172[(2)]);
var state_13172__$1 = (function (){var statearr_13208 = state_13172;
(statearr_13208[(29)] = inst_13165);

return statearr_13208;
})();
var statearr_13209_13281 = state_13172__$1;
(statearr_13209_13281[(2)] = null);

(statearr_13209_13281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (6))){
var inst_13100 = (state_13172[(30)]);
var inst_13099 = cljs.core.deref.call(null,cs);
var inst_13100__$1 = cljs.core.keys.call(null,inst_13099);
var inst_13101 = cljs.core.count.call(null,inst_13100__$1);
var inst_13102 = cljs.core.reset_BANG_.call(null,dctr,inst_13101);
var inst_13107 = cljs.core.seq.call(null,inst_13100__$1);
var inst_13108 = inst_13107;
var inst_13109 = null;
var inst_13110 = (0);
var inst_13111 = (0);
var state_13172__$1 = (function (){var statearr_13210 = state_13172;
(statearr_13210[(9)] = inst_13109);

(statearr_13210[(18)] = inst_13108);

(statearr_13210[(10)] = inst_13111);

(statearr_13210[(30)] = inst_13100__$1);

(statearr_13210[(31)] = inst_13102);

(statearr_13210[(20)] = inst_13110);

return statearr_13210;
})();
var statearr_13211_13282 = state_13172__$1;
(statearr_13211_13282[(2)] = null);

(statearr_13211_13282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (28))){
var inst_13108 = (state_13172[(18)]);
var inst_13129 = (state_13172[(17)]);
var inst_13129__$1 = cljs.core.seq.call(null,inst_13108);
var state_13172__$1 = (function (){var statearr_13212 = state_13172;
(statearr_13212[(17)] = inst_13129__$1);

return statearr_13212;
})();
if(inst_13129__$1){
var statearr_13213_13283 = state_13172__$1;
(statearr_13213_13283[(1)] = (33));

} else {
var statearr_13214_13284 = state_13172__$1;
(statearr_13214_13284[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (25))){
var inst_13111 = (state_13172[(10)]);
var inst_13110 = (state_13172[(20)]);
var inst_13113 = (inst_13111 < inst_13110);
var inst_13114 = inst_13113;
var state_13172__$1 = state_13172;
if(cljs.core.truth_(inst_13114)){
var statearr_13215_13285 = state_13172__$1;
(statearr_13215_13285[(1)] = (27));

} else {
var statearr_13216_13286 = state_13172__$1;
(statearr_13216_13286[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (34))){
var state_13172__$1 = state_13172;
var statearr_13217_13287 = state_13172__$1;
(statearr_13217_13287[(2)] = null);

(statearr_13217_13287[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (17))){
var state_13172__$1 = state_13172;
var statearr_13218_13288 = state_13172__$1;
(statearr_13218_13288[(2)] = null);

(statearr_13218_13288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (3))){
var inst_13170 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13172__$1,inst_13170);
} else {
if((state_val_13173 === (12))){
var inst_13095 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13219_13289 = state_13172__$1;
(statearr_13219_13289[(2)] = inst_13095);

(statearr_13219_13289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (2))){
var state_13172__$1 = state_13172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13172__$1,(4),ch);
} else {
if((state_val_13173 === (23))){
var state_13172__$1 = state_13172;
var statearr_13220_13290 = state_13172__$1;
(statearr_13220_13290[(2)] = null);

(statearr_13220_13290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (35))){
var inst_13154 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13221_13291 = state_13172__$1;
(statearr_13221_13291[(2)] = inst_13154);

(statearr_13221_13291[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (19))){
var inst_13069 = (state_13172[(7)]);
var inst_13073 = cljs.core.chunk_first.call(null,inst_13069);
var inst_13074 = cljs.core.chunk_rest.call(null,inst_13069);
var inst_13075 = cljs.core.count.call(null,inst_13073);
var inst_13049 = inst_13074;
var inst_13050 = inst_13073;
var inst_13051 = inst_13075;
var inst_13052 = (0);
var state_13172__$1 = (function (){var statearr_13222 = state_13172;
(statearr_13222[(13)] = inst_13052);

(statearr_13222[(14)] = inst_13051);

(statearr_13222[(15)] = inst_13050);

(statearr_13222[(16)] = inst_13049);

return statearr_13222;
})();
var statearr_13223_13292 = state_13172__$1;
(statearr_13223_13292[(2)] = null);

(statearr_13223_13292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (11))){
var inst_13049 = (state_13172[(16)]);
var inst_13069 = (state_13172[(7)]);
var inst_13069__$1 = cljs.core.seq.call(null,inst_13049);
var state_13172__$1 = (function (){var statearr_13224 = state_13172;
(statearr_13224[(7)] = inst_13069__$1);

return statearr_13224;
})();
if(inst_13069__$1){
var statearr_13225_13293 = state_13172__$1;
(statearr_13225_13293[(1)] = (16));

} else {
var statearr_13226_13294 = state_13172__$1;
(statearr_13226_13294[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (9))){
var inst_13097 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13227_13295 = state_13172__$1;
(statearr_13227_13295[(2)] = inst_13097);

(statearr_13227_13295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (5))){
var inst_13047 = cljs.core.deref.call(null,cs);
var inst_13048 = cljs.core.seq.call(null,inst_13047);
var inst_13049 = inst_13048;
var inst_13050 = null;
var inst_13051 = (0);
var inst_13052 = (0);
var state_13172__$1 = (function (){var statearr_13228 = state_13172;
(statearr_13228[(13)] = inst_13052);

(statearr_13228[(14)] = inst_13051);

(statearr_13228[(15)] = inst_13050);

(statearr_13228[(16)] = inst_13049);

return statearr_13228;
})();
var statearr_13229_13296 = state_13172__$1;
(statearr_13229_13296[(2)] = null);

(statearr_13229_13296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (14))){
var state_13172__$1 = state_13172;
var statearr_13230_13297 = state_13172__$1;
(statearr_13230_13297[(2)] = null);

(statearr_13230_13297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (45))){
var inst_13162 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13231_13298 = state_13172__$1;
(statearr_13231_13298[(2)] = inst_13162);

(statearr_13231_13298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (26))){
var inst_13100 = (state_13172[(30)]);
var inst_13158 = (state_13172[(2)]);
var inst_13159 = cljs.core.seq.call(null,inst_13100);
var state_13172__$1 = (function (){var statearr_13232 = state_13172;
(statearr_13232[(32)] = inst_13158);

return statearr_13232;
})();
if(inst_13159){
var statearr_13233_13299 = state_13172__$1;
(statearr_13233_13299[(1)] = (42));

} else {
var statearr_13234_13300 = state_13172__$1;
(statearr_13234_13300[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (16))){
var inst_13069 = (state_13172[(7)]);
var inst_13071 = cljs.core.chunked_seq_QMARK_.call(null,inst_13069);
var state_13172__$1 = state_13172;
if(inst_13071){
var statearr_13238_13301 = state_13172__$1;
(statearr_13238_13301[(1)] = (19));

} else {
var statearr_13239_13302 = state_13172__$1;
(statearr_13239_13302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (38))){
var inst_13151 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13240_13303 = state_13172__$1;
(statearr_13240_13303[(2)] = inst_13151);

(statearr_13240_13303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (30))){
var inst_13109 = (state_13172[(9)]);
var inst_13108 = (state_13172[(18)]);
var inst_13111 = (state_13172[(10)]);
var inst_13110 = (state_13172[(20)]);
var inst_13125 = (state_13172[(2)]);
var inst_13126 = (inst_13111 + (1));
var tmp13235 = inst_13109;
var tmp13236 = inst_13108;
var tmp13237 = inst_13110;
var inst_13108__$1 = tmp13236;
var inst_13109__$1 = tmp13235;
var inst_13110__$1 = tmp13237;
var inst_13111__$1 = inst_13126;
var state_13172__$1 = (function (){var statearr_13241 = state_13172;
(statearr_13241[(9)] = inst_13109__$1);

(statearr_13241[(18)] = inst_13108__$1);

(statearr_13241[(10)] = inst_13111__$1);

(statearr_13241[(33)] = inst_13125);

(statearr_13241[(20)] = inst_13110__$1);

return statearr_13241;
})();
var statearr_13242_13304 = state_13172__$1;
(statearr_13242_13304[(2)] = null);

(statearr_13242_13304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (10))){
var inst_13052 = (state_13172[(13)]);
var inst_13050 = (state_13172[(15)]);
var inst_13058 = cljs.core._nth.call(null,inst_13050,inst_13052);
var inst_13059 = cljs.core.nth.call(null,inst_13058,(0),null);
var inst_13060 = cljs.core.nth.call(null,inst_13058,(1),null);
var state_13172__$1 = (function (){var statearr_13243 = state_13172;
(statearr_13243[(28)] = inst_13059);

return statearr_13243;
})();
if(cljs.core.truth_(inst_13060)){
var statearr_13244_13305 = state_13172__$1;
(statearr_13244_13305[(1)] = (13));

} else {
var statearr_13245_13306 = state_13172__$1;
(statearr_13245_13306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (18))){
var inst_13093 = (state_13172[(2)]);
var state_13172__$1 = state_13172;
var statearr_13246_13307 = state_13172__$1;
(statearr_13246_13307[(2)] = inst_13093);

(statearr_13246_13307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (42))){
var state_13172__$1 = state_13172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13172__$1,(45),dchan);
} else {
if((state_val_13173 === (37))){
var inst_13129 = (state_13172[(17)]);
var inst_13138 = cljs.core.first.call(null,inst_13129);
var state_13172__$1 = (function (){var statearr_13247 = state_13172;
(statearr_13247[(25)] = inst_13138);

return statearr_13247;
})();
var statearr_13248_13308 = state_13172__$1;
(statearr_13248_13308[(2)] = null);

(statearr_13248_13308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13173 === (8))){
var inst_13052 = (state_13172[(13)]);
var inst_13051 = (state_13172[(14)]);
var inst_13054 = (inst_13052 < inst_13051);
var inst_13055 = inst_13054;
var state_13172__$1 = state_13172;
if(cljs.core.truth_(inst_13055)){
var statearr_13249_13309 = state_13172__$1;
(statearr_13249_13309[(1)] = (10));

} else {
var statearr_13250_13310 = state_13172__$1;
(statearr_13250_13310[(1)] = (11));

}

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
}
}
}
}
}
}
});})(c__7703__auto___13258,cs,m,dchan,dctr,done))
;
return ((function (switch__7628__auto__,c__7703__auto___13258,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7629__auto__ = null;
var cljs$core$async$mult_$_state_machine__7629__auto____0 = (function (){
var statearr_13254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13254[(0)] = cljs$core$async$mult_$_state_machine__7629__auto__);

(statearr_13254[(1)] = (1));

return statearr_13254;
});
var cljs$core$async$mult_$_state_machine__7629__auto____1 = (function (state_13172){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_13172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e13255){if((e13255 instanceof Object)){
var ex__7632__auto__ = e13255;
var statearr_13256_13311 = state_13172;
(statearr_13256_13311[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13312 = state_13172;
state_13172 = G__13312;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7629__auto__ = function(state_13172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7629__auto____1.call(this,state_13172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7629__auto____0;
cljs$core$async$mult_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7629__auto____1;
return cljs$core$async$mult_$_state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___13258,cs,m,dchan,dctr,done))
})();
var state__7705__auto__ = (function (){var statearr_13257 = f__7704__auto__.call(null);
(statearr_13257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___13258);

return statearr_13257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___13258,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args13313 = [];
var len__5507__auto___13316 = arguments.length;
var i__5508__auto___13317 = (0);
while(true){
if((i__5508__auto___13317 < len__5507__auto___13316)){
args13313.push((arguments[i__5508__auto___13317]));

var G__13318 = (i__5508__auto___13317 + (1));
i__5508__auto___13317 = G__13318;
continue;
} else {
}
break;
}

var G__13315 = args13313.length;
switch (G__13315) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13313.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m,ch);
} else {
var m__5105__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m,ch);
} else {
var m__5105__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m);
} else {
var m__5105__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m,state_map);
} else {
var m__5105__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5104__auto__ = (((m == null))?null:m);
var m__5105__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,m,mode);
} else {
var m__5105__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t13475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13475 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13476){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13476 = meta13476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13477,meta13476__$1){
var self__ = this;
var _13477__$1 = this;
return (new cljs.core.async.t13475(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13476__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13477){
var self__ = this;
var _13477__$1 = this;
return self__.meta13476;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13475.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13476","meta13476",-453012781,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13475.cljs$lang$type = true;

cljs.core.async.t13475.cljs$lang$ctorStr = "cljs.core.async/t13475";

cljs.core.async.t13475.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t13475");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13475 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t13475(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13476){
return (new cljs.core.async.t13475(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13476));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13475(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7703__auto___13628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___13628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___13628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13570){
var state_val_13571 = (state_13570[(1)]);
if((state_val_13571 === (7))){
var inst_13493 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
var statearr_13572_13629 = state_13570__$1;
(statearr_13572_13629[(2)] = inst_13493);

(statearr_13572_13629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (20))){
var inst_13505 = (state_13570[(7)]);
var state_13570__$1 = state_13570;
var statearr_13573_13630 = state_13570__$1;
(statearr_13573_13630[(2)] = inst_13505);

(statearr_13573_13630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (27))){
var state_13570__$1 = state_13570;
var statearr_13574_13631 = state_13570__$1;
(statearr_13574_13631[(2)] = null);

(statearr_13574_13631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (1))){
var inst_13481 = (state_13570[(8)]);
var inst_13481__$1 = calc_state.call(null);
var inst_13483 = (inst_13481__$1 == null);
var inst_13484 = cljs.core.not.call(null,inst_13483);
var state_13570__$1 = (function (){var statearr_13575 = state_13570;
(statearr_13575[(8)] = inst_13481__$1);

return statearr_13575;
})();
if(inst_13484){
var statearr_13576_13632 = state_13570__$1;
(statearr_13576_13632[(1)] = (2));

} else {
var statearr_13577_13633 = state_13570__$1;
(statearr_13577_13633[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (24))){
var inst_13535 = (state_13570[(9)]);
var inst_13549 = (state_13570[(10)]);
var inst_13528 = (state_13570[(11)]);
var inst_13549__$1 = inst_13528.call(null,inst_13535);
var state_13570__$1 = (function (){var statearr_13578 = state_13570;
(statearr_13578[(10)] = inst_13549__$1);

return statearr_13578;
})();
if(cljs.core.truth_(inst_13549__$1)){
var statearr_13579_13634 = state_13570__$1;
(statearr_13579_13634[(1)] = (29));

} else {
var statearr_13580_13635 = state_13570__$1;
(statearr_13580_13635[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (4))){
var inst_13496 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
if(cljs.core.truth_(inst_13496)){
var statearr_13581_13636 = state_13570__$1;
(statearr_13581_13636[(1)] = (8));

} else {
var statearr_13582_13637 = state_13570__$1;
(statearr_13582_13637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (15))){
var inst_13522 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
if(cljs.core.truth_(inst_13522)){
var statearr_13583_13638 = state_13570__$1;
(statearr_13583_13638[(1)] = (19));

} else {
var statearr_13584_13639 = state_13570__$1;
(statearr_13584_13639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (21))){
var inst_13527 = (state_13570[(12)]);
var inst_13527__$1 = (state_13570[(2)]);
var inst_13528 = cljs.core.get.call(null,inst_13527__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13529 = cljs.core.get.call(null,inst_13527__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13530 = cljs.core.get.call(null,inst_13527__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13570__$1 = (function (){var statearr_13585 = state_13570;
(statearr_13585[(12)] = inst_13527__$1);

(statearr_13585[(13)] = inst_13529);

(statearr_13585[(11)] = inst_13528);

return statearr_13585;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13570__$1,(22),inst_13530);
} else {
if((state_val_13571 === (31))){
var inst_13557 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
if(cljs.core.truth_(inst_13557)){
var statearr_13586_13640 = state_13570__$1;
(statearr_13586_13640[(1)] = (32));

} else {
var statearr_13587_13641 = state_13570__$1;
(statearr_13587_13641[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (32))){
var inst_13534 = (state_13570[(14)]);
var state_13570__$1 = state_13570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13570__$1,(35),out,inst_13534);
} else {
if((state_val_13571 === (33))){
var state_13570__$1 = state_13570;
var statearr_13588_13642 = state_13570__$1;
(statearr_13588_13642[(2)] = null);

(statearr_13588_13642[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (13))){
var inst_13505 = (state_13570[(7)]);
var inst_13512 = inst_13505.cljs$lang$protocol_mask$partition0$;
var inst_13513 = (inst_13512 & (64));
var inst_13514 = inst_13505.cljs$core$ISeq$;
var inst_13515 = (inst_13513) || (inst_13514);
var state_13570__$1 = state_13570;
if(cljs.core.truth_(inst_13515)){
var statearr_13589_13643 = state_13570__$1;
(statearr_13589_13643[(1)] = (16));

} else {
var statearr_13590_13644 = state_13570__$1;
(statearr_13590_13644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (22))){
var inst_13535 = (state_13570[(9)]);
var inst_13534 = (state_13570[(14)]);
var inst_13533 = (state_13570[(2)]);
var inst_13534__$1 = cljs.core.nth.call(null,inst_13533,(0),null);
var inst_13535__$1 = cljs.core.nth.call(null,inst_13533,(1),null);
var inst_13536 = (inst_13534__$1 == null);
var inst_13537 = cljs.core._EQ_.call(null,inst_13535__$1,change);
var inst_13538 = (inst_13536) || (inst_13537);
var state_13570__$1 = (function (){var statearr_13591 = state_13570;
(statearr_13591[(9)] = inst_13535__$1);

(statearr_13591[(14)] = inst_13534__$1);

return statearr_13591;
})();
if(cljs.core.truth_(inst_13538)){
var statearr_13592_13645 = state_13570__$1;
(statearr_13592_13645[(1)] = (23));

} else {
var statearr_13593_13646 = state_13570__$1;
(statearr_13593_13646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (29))){
var inst_13549 = (state_13570[(10)]);
var state_13570__$1 = state_13570;
var statearr_13594_13647 = state_13570__$1;
(statearr_13594_13647[(2)] = inst_13549);

(statearr_13594_13647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (6))){
var state_13570__$1 = state_13570;
var statearr_13595_13648 = state_13570__$1;
(statearr_13595_13648[(2)] = false);

(statearr_13595_13648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (28))){
var inst_13545 = (state_13570[(2)]);
var inst_13546 = calc_state.call(null);
var inst_13505 = inst_13546;
var state_13570__$1 = (function (){var statearr_13596 = state_13570;
(statearr_13596[(7)] = inst_13505);

(statearr_13596[(15)] = inst_13545);

return statearr_13596;
})();
var statearr_13597_13649 = state_13570__$1;
(statearr_13597_13649[(2)] = null);

(statearr_13597_13649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (25))){
var inst_13566 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
var statearr_13598_13650 = state_13570__$1;
(statearr_13598_13650[(2)] = inst_13566);

(statearr_13598_13650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (34))){
var inst_13527 = (state_13570[(12)]);
var inst_13563 = (state_13570[(2)]);
var inst_13505 = inst_13527;
var state_13570__$1 = (function (){var statearr_13599 = state_13570;
(statearr_13599[(7)] = inst_13505);

(statearr_13599[(16)] = inst_13563);

return statearr_13599;
})();
var statearr_13600_13651 = state_13570__$1;
(statearr_13600_13651[(2)] = null);

(statearr_13600_13651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (17))){
var state_13570__$1 = state_13570;
var statearr_13601_13652 = state_13570__$1;
(statearr_13601_13652[(2)] = false);

(statearr_13601_13652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (3))){
var state_13570__$1 = state_13570;
var statearr_13602_13653 = state_13570__$1;
(statearr_13602_13653[(2)] = false);

(statearr_13602_13653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (12))){
var inst_13568 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13570__$1,inst_13568);
} else {
if((state_val_13571 === (2))){
var inst_13481 = (state_13570[(8)]);
var inst_13486 = inst_13481.cljs$lang$protocol_mask$partition0$;
var inst_13487 = (inst_13486 & (64));
var inst_13488 = inst_13481.cljs$core$ISeq$;
var inst_13489 = (inst_13487) || (inst_13488);
var state_13570__$1 = state_13570;
if(cljs.core.truth_(inst_13489)){
var statearr_13603_13654 = state_13570__$1;
(statearr_13603_13654[(1)] = (5));

} else {
var statearr_13604_13655 = state_13570__$1;
(statearr_13604_13655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (23))){
var inst_13534 = (state_13570[(14)]);
var inst_13540 = (inst_13534 == null);
var state_13570__$1 = state_13570;
if(cljs.core.truth_(inst_13540)){
var statearr_13605_13656 = state_13570__$1;
(statearr_13605_13656[(1)] = (26));

} else {
var statearr_13606_13657 = state_13570__$1;
(statearr_13606_13657[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (35))){
var inst_13560 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
var statearr_13607_13658 = state_13570__$1;
(statearr_13607_13658[(2)] = inst_13560);

(statearr_13607_13658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (19))){
var inst_13505 = (state_13570[(7)]);
var inst_13524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13505);
var state_13570__$1 = state_13570;
var statearr_13608_13659 = state_13570__$1;
(statearr_13608_13659[(2)] = inst_13524);

(statearr_13608_13659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (11))){
var inst_13505 = (state_13570[(7)]);
var inst_13509 = (inst_13505 == null);
var inst_13510 = cljs.core.not.call(null,inst_13509);
var state_13570__$1 = state_13570;
if(inst_13510){
var statearr_13609_13660 = state_13570__$1;
(statearr_13609_13660[(1)] = (13));

} else {
var statearr_13610_13661 = state_13570__$1;
(statearr_13610_13661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (9))){
var inst_13481 = (state_13570[(8)]);
var state_13570__$1 = state_13570;
var statearr_13611_13662 = state_13570__$1;
(statearr_13611_13662[(2)] = inst_13481);

(statearr_13611_13662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (5))){
var state_13570__$1 = state_13570;
var statearr_13612_13663 = state_13570__$1;
(statearr_13612_13663[(2)] = true);

(statearr_13612_13663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (14))){
var state_13570__$1 = state_13570;
var statearr_13613_13664 = state_13570__$1;
(statearr_13613_13664[(2)] = false);

(statearr_13613_13664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (26))){
var inst_13535 = (state_13570[(9)]);
var inst_13542 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13535);
var state_13570__$1 = state_13570;
var statearr_13614_13665 = state_13570__$1;
(statearr_13614_13665[(2)] = inst_13542);

(statearr_13614_13665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (16))){
var state_13570__$1 = state_13570;
var statearr_13615_13666 = state_13570__$1;
(statearr_13615_13666[(2)] = true);

(statearr_13615_13666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (30))){
var inst_13535 = (state_13570[(9)]);
var inst_13529 = (state_13570[(13)]);
var inst_13528 = (state_13570[(11)]);
var inst_13552 = cljs.core.empty_QMARK_.call(null,inst_13528);
var inst_13553 = inst_13529.call(null,inst_13535);
var inst_13554 = cljs.core.not.call(null,inst_13553);
var inst_13555 = (inst_13552) && (inst_13554);
var state_13570__$1 = state_13570;
var statearr_13616_13667 = state_13570__$1;
(statearr_13616_13667[(2)] = inst_13555);

(statearr_13616_13667[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (10))){
var inst_13481 = (state_13570[(8)]);
var inst_13501 = (state_13570[(2)]);
var inst_13502 = cljs.core.get.call(null,inst_13501,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13503 = cljs.core.get.call(null,inst_13501,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13504 = cljs.core.get.call(null,inst_13501,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13505 = inst_13481;
var state_13570__$1 = (function (){var statearr_13617 = state_13570;
(statearr_13617[(7)] = inst_13505);

(statearr_13617[(17)] = inst_13504);

(statearr_13617[(18)] = inst_13503);

(statearr_13617[(19)] = inst_13502);

return statearr_13617;
})();
var statearr_13618_13668 = state_13570__$1;
(statearr_13618_13668[(2)] = null);

(statearr_13618_13668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (18))){
var inst_13519 = (state_13570[(2)]);
var state_13570__$1 = state_13570;
var statearr_13619_13669 = state_13570__$1;
(statearr_13619_13669[(2)] = inst_13519);

(statearr_13619_13669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13571 === (8))){
var inst_13481 = (state_13570[(8)]);
var inst_13498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13481);
var state_13570__$1 = state_13570;
var statearr_13620_13670 = state_13570__$1;
(statearr_13620_13670[(2)] = inst_13498);

(statearr_13620_13670[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__7703__auto___13628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7628__auto__,c__7703__auto___13628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7629__auto__ = null;
var cljs$core$async$mix_$_state_machine__7629__auto____0 = (function (){
var statearr_13624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13624[(0)] = cljs$core$async$mix_$_state_machine__7629__auto__);

(statearr_13624[(1)] = (1));

return statearr_13624;
});
var cljs$core$async$mix_$_state_machine__7629__auto____1 = (function (state_13570){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_13570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e13625){if((e13625 instanceof Object)){
var ex__7632__auto__ = e13625;
var statearr_13626_13671 = state_13570;
(statearr_13626_13671[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13672 = state_13570;
state_13570 = G__13672;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7629__auto__ = function(state_13570){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7629__auto____1.call(this,state_13570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7629__auto____0;
cljs$core$async$mix_$_state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7629__auto____1;
return cljs$core$async$mix_$_state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___13628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7705__auto__ = (function (){var statearr_13627 = f__7704__auto__.call(null);
(statearr_13627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___13628);

return statearr_13627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___13628,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5104__auto__ = (((p == null))?null:p);
var m__5105__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5105__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5104__auto__ = (((p == null))?null:p);
var m__5105__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,p,v,ch);
} else {
var m__5105__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args13675 = [];
var len__5507__auto___13678 = arguments.length;
var i__5508__auto___13679 = (0);
while(true){
if((i__5508__auto___13679 < len__5507__auto___13678)){
args13675.push((arguments[i__5508__auto___13679]));

var G__13680 = (i__5508__auto___13679 + (1));
i__5508__auto___13679 = G__13680;
continue;
} else {
}
break;
}

var G__13677 = args13675.length;
switch (G__13677) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13675.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5104__auto__ = (((p == null))?null:p);
var m__5105__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,p);
} else {
var m__5105__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5104__auto__ = (((p == null))?null:p);
var m__5105__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5104__auto__)]);
if(!((m__5105__auto__ == null))){
return m__5105__auto__.call(null,p,v);
} else {
var m__5105__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5105__auto____$1 == null))){
return m__5105__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args13683 = [];
var len__5507__auto___13810 = arguments.length;
var i__5508__auto___13811 = (0);
while(true){
if((i__5508__auto___13811 < len__5507__auto___13810)){
args13683.push((arguments[i__5508__auto___13811]));

var G__13812 = (i__5508__auto___13811 + (1));
i__5508__auto___13811 = G__13812;
continue;
} else {
}
break;
}

var G__13685 = args13683.length;
switch (G__13685) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13683.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4468__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4468__auto__)){
return or__4468__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4468__auto__,mults){
return (function (p1__13682_SHARP_){
if(cljs.core.truth_(p1__13682_SHARP_.call(null,topic))){
return p1__13682_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13682_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4468__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13686 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13686 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13687){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13687 = meta13687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13688,meta13687__$1){
var self__ = this;
var _13688__$1 = this;
return (new cljs.core.async.t13686(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13687__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13688){
var self__ = this;
var _13688__$1 = this;
return self__.meta13687;
});})(mults,ensure_mult))
;

cljs.core.async.t13686.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13686.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13686.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13686.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t13686.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13686.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13686.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13687","meta13687",172111838,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t13686.cljs$lang$type = true;

cljs.core.async.t13686.cljs$lang$ctorStr = "cljs.core.async/t13686";

cljs.core.async.t13686.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5047__auto__,writer__5048__auto__,opt__5049__auto__){
return cljs.core._write.call(null,writer__5048__auto__,"cljs.core.async/t13686");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13686 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t13686(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13687){
return (new cljs.core.async.t13686(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13687));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13686(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7703__auto___13814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___13814,mults,ensure_mult,p){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___13814,mults,ensure_mult,p){
return (function (state_13762){
var state_val_13763 = (state_13762[(1)]);
if((state_val_13763 === (7))){
var inst_13758 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13764_13815 = state_13762__$1;
(statearr_13764_13815[(2)] = inst_13758);

(statearr_13764_13815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (20))){
var state_13762__$1 = state_13762;
var statearr_13765_13816 = state_13762__$1;
(statearr_13765_13816[(2)] = null);

(statearr_13765_13816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (1))){
var state_13762__$1 = state_13762;
var statearr_13766_13817 = state_13762__$1;
(statearr_13766_13817[(2)] = null);

(statearr_13766_13817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (24))){
var inst_13741 = (state_13762[(7)]);
var inst_13691 = (state_13762[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13762,(23),Object,null,(22));
var inst_13748 = cljs.core.async.muxch_STAR_.call(null,inst_13741);
var state_13762__$1 = state_13762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13762__$1,(25),inst_13748,inst_13691);
} else {
if((state_val_13763 === (4))){
var inst_13691 = (state_13762[(8)]);
var inst_13691__$1 = (state_13762[(2)]);
var inst_13692 = (inst_13691__$1 == null);
var state_13762__$1 = (function (){var statearr_13767 = state_13762;
(statearr_13767[(8)] = inst_13691__$1);

return statearr_13767;
})();
if(cljs.core.truth_(inst_13692)){
var statearr_13768_13818 = state_13762__$1;
(statearr_13768_13818[(1)] = (5));

} else {
var statearr_13769_13819 = state_13762__$1;
(statearr_13769_13819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (15))){
var inst_13733 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13770_13820 = state_13762__$1;
(statearr_13770_13820[(2)] = inst_13733);

(statearr_13770_13820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (21))){
var inst_13755 = (state_13762[(2)]);
var state_13762__$1 = (function (){var statearr_13771 = state_13762;
(statearr_13771[(9)] = inst_13755);

return statearr_13771;
})();
var statearr_13772_13821 = state_13762__$1;
(statearr_13772_13821[(2)] = null);

(statearr_13772_13821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (13))){
var inst_13715 = (state_13762[(10)]);
var inst_13717 = cljs.core.chunked_seq_QMARK_.call(null,inst_13715);
var state_13762__$1 = state_13762;
if(inst_13717){
var statearr_13773_13822 = state_13762__$1;
(statearr_13773_13822[(1)] = (16));

} else {
var statearr_13774_13823 = state_13762__$1;
(statearr_13774_13823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (22))){
var inst_13752 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13775_13824 = state_13762__$1;
(statearr_13775_13824[(2)] = inst_13752);

(statearr_13775_13824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (6))){
var inst_13741 = (state_13762[(7)]);
var inst_13739 = (state_13762[(11)]);
var inst_13691 = (state_13762[(8)]);
var inst_13739__$1 = topic_fn.call(null,inst_13691);
var inst_13740 = cljs.core.deref.call(null,mults);
var inst_13741__$1 = cljs.core.get.call(null,inst_13740,inst_13739__$1);
var state_13762__$1 = (function (){var statearr_13776 = state_13762;
(statearr_13776[(7)] = inst_13741__$1);

(statearr_13776[(11)] = inst_13739__$1);

return statearr_13776;
})();
if(cljs.core.truth_(inst_13741__$1)){
var statearr_13777_13825 = state_13762__$1;
(statearr_13777_13825[(1)] = (19));

} else {
var statearr_13778_13826 = state_13762__$1;
(statearr_13778_13826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (25))){
var inst_13750 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13779_13827 = state_13762__$1;
(statearr_13779_13827[(2)] = inst_13750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (17))){
var inst_13715 = (state_13762[(10)]);
var inst_13724 = cljs.core.first.call(null,inst_13715);
var inst_13725 = cljs.core.async.muxch_STAR_.call(null,inst_13724);
var inst_13726 = cljs.core.async.close_BANG_.call(null,inst_13725);
var inst_13727 = cljs.core.next.call(null,inst_13715);
var inst_13701 = inst_13727;
var inst_13702 = null;
var inst_13703 = (0);
var inst_13704 = (0);
var state_13762__$1 = (function (){var statearr_13780 = state_13762;
(statearr_13780[(12)] = inst_13702);

(statearr_13780[(13)] = inst_13701);

(statearr_13780[(14)] = inst_13703);

(statearr_13780[(15)] = inst_13726);

(statearr_13780[(16)] = inst_13704);

return statearr_13780;
})();
var statearr_13781_13828 = state_13762__$1;
(statearr_13781_13828[(2)] = null);

(statearr_13781_13828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (3))){
var inst_13760 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13762__$1,inst_13760);
} else {
if((state_val_13763 === (12))){
var inst_13735 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13782_13829 = state_13762__$1;
(statearr_13782_13829[(2)] = inst_13735);

(statearr_13782_13829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (2))){
var state_13762__$1 = state_13762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13762__$1,(4),ch);
} else {
if((state_val_13763 === (23))){
var inst_13739 = (state_13762[(11)]);
var inst_13743 = (state_13762[(2)]);
var inst_13744 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13739);
var state_13762__$1 = (function (){var statearr_13783 = state_13762;
(statearr_13783[(17)] = inst_13743);

return statearr_13783;
})();
var statearr_13784_13830 = state_13762__$1;
(statearr_13784_13830[(2)] = inst_13744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (19))){
var state_13762__$1 = state_13762;
var statearr_13785_13831 = state_13762__$1;
(statearr_13785_13831[(2)] = null);

(statearr_13785_13831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (11))){
var inst_13715 = (state_13762[(10)]);
var inst_13701 = (state_13762[(13)]);
var inst_13715__$1 = cljs.core.seq.call(null,inst_13701);
var state_13762__$1 = (function (){var statearr_13786 = state_13762;
(statearr_13786[(10)] = inst_13715__$1);

return statearr_13786;
})();
if(inst_13715__$1){
var statearr_13787_13832 = state_13762__$1;
(statearr_13787_13832[(1)] = (13));

} else {
var statearr_13788_13833 = state_13762__$1;
(statearr_13788_13833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (9))){
var inst_13737 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13789_13834 = state_13762__$1;
(statearr_13789_13834[(2)] = inst_13737);

(statearr_13789_13834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (5))){
var inst_13698 = cljs.core.deref.call(null,mults);
var inst_13699 = cljs.core.vals.call(null,inst_13698);
var inst_13700 = cljs.core.seq.call(null,inst_13699);
var inst_13701 = inst_13700;
var inst_13702 = null;
var inst_13703 = (0);
var inst_13704 = (0);
var state_13762__$1 = (function (){var statearr_13790 = state_13762;
(statearr_13790[(12)] = inst_13702);

(statearr_13790[(13)] = inst_13701);

(statearr_13790[(14)] = inst_13703);

(statearr_13790[(16)] = inst_13704);

return statearr_13790;
})();
var statearr_13791_13835 = state_13762__$1;
(statearr_13791_13835[(2)] = null);

(statearr_13791_13835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (14))){
var state_13762__$1 = state_13762;
var statearr_13795_13836 = state_13762__$1;
(statearr_13795_13836[(2)] = null);

(statearr_13795_13836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (16))){
var inst_13715 = (state_13762[(10)]);
var inst_13719 = cljs.core.chunk_first.call(null,inst_13715);
var inst_13720 = cljs.core.chunk_rest.call(null,inst_13715);
var inst_13721 = cljs.core.count.call(null,inst_13719);
var inst_13701 = inst_13720;
var inst_13702 = inst_13719;
var inst_13703 = inst_13721;
var inst_13704 = (0);
var state_13762__$1 = (function (){var statearr_13796 = state_13762;
(statearr_13796[(12)] = inst_13702);

(statearr_13796[(13)] = inst_13701);

(statearr_13796[(14)] = inst_13703);

(statearr_13796[(16)] = inst_13704);

return statearr_13796;
})();
var statearr_13797_13837 = state_13762__$1;
(statearr_13797_13837[(2)] = null);

(statearr_13797_13837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (10))){
var inst_13702 = (state_13762[(12)]);
var inst_13701 = (state_13762[(13)]);
var inst_13703 = (state_13762[(14)]);
var inst_13704 = (state_13762[(16)]);
var inst_13709 = cljs.core._nth.call(null,inst_13702,inst_13704);
var inst_13710 = cljs.core.async.muxch_STAR_.call(null,inst_13709);
var inst_13711 = cljs.core.async.close_BANG_.call(null,inst_13710);
var inst_13712 = (inst_13704 + (1));
var tmp13792 = inst_13702;
var tmp13793 = inst_13701;
var tmp13794 = inst_13703;
var inst_13701__$1 = tmp13793;
var inst_13702__$1 = tmp13792;
var inst_13703__$1 = tmp13794;
var inst_13704__$1 = inst_13712;
var state_13762__$1 = (function (){var statearr_13798 = state_13762;
(statearr_13798[(12)] = inst_13702__$1);

(statearr_13798[(18)] = inst_13711);

(statearr_13798[(13)] = inst_13701__$1);

(statearr_13798[(14)] = inst_13703__$1);

(statearr_13798[(16)] = inst_13704__$1);

return statearr_13798;
})();
var statearr_13799_13838 = state_13762__$1;
(statearr_13799_13838[(2)] = null);

(statearr_13799_13838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (18))){
var inst_13730 = (state_13762[(2)]);
var state_13762__$1 = state_13762;
var statearr_13800_13839 = state_13762__$1;
(statearr_13800_13839[(2)] = inst_13730);

(statearr_13800_13839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13763 === (8))){
var inst_13703 = (state_13762[(14)]);
var inst_13704 = (state_13762[(16)]);
var inst_13706 = (inst_13704 < inst_13703);
var inst_13707 = inst_13706;
var state_13762__$1 = state_13762;
if(cljs.core.truth_(inst_13707)){
var statearr_13801_13840 = state_13762__$1;
(statearr_13801_13840[(1)] = (10));

} else {
var statearr_13802_13841 = state_13762__$1;
(statearr_13802_13841[(1)] = (11));

}

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
});})(c__7703__auto___13814,mults,ensure_mult,p))
;
return ((function (switch__7628__auto__,c__7703__auto___13814,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_13806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13806[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_13806[(1)] = (1));

return statearr_13806;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_13762){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_13762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e13807){if((e13807 instanceof Object)){
var ex__7632__auto__ = e13807;
var statearr_13808_13842 = state_13762;
(statearr_13808_13842[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13843 = state_13762;
state_13762 = G__13843;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_13762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_13762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___13814,mults,ensure_mult,p))
})();
var state__7705__auto__ = (function (){var statearr_13809 = f__7704__auto__.call(null);
(statearr_13809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___13814);

return statearr_13809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___13814,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args13844 = [];
var len__5507__auto___13847 = arguments.length;
var i__5508__auto___13848 = (0);
while(true){
if((i__5508__auto___13848 < len__5507__auto___13847)){
args13844.push((arguments[i__5508__auto___13848]));

var G__13849 = (i__5508__auto___13848 + (1));
i__5508__auto___13848 = G__13849;
continue;
} else {
}
break;
}

var G__13846 = args13844.length;
switch (G__13846) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13844.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args13851 = [];
var len__5507__auto___13854 = arguments.length;
var i__5508__auto___13855 = (0);
while(true){
if((i__5508__auto___13855 < len__5507__auto___13854)){
args13851.push((arguments[i__5508__auto___13855]));

var G__13856 = (i__5508__auto___13855 + (1));
i__5508__auto___13855 = G__13856;
continue;
} else {
}
break;
}

var G__13853 = args13851.length;
switch (G__13853) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13851.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args13858 = [];
var len__5507__auto___13929 = arguments.length;
var i__5508__auto___13930 = (0);
while(true){
if((i__5508__auto___13930 < len__5507__auto___13929)){
args13858.push((arguments[i__5508__auto___13930]));

var G__13931 = (i__5508__auto___13930 + (1));
i__5508__auto___13930 = G__13931;
continue;
} else {
}
break;
}

var G__13860 = args13858.length;
switch (G__13860) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13858.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7703__auto___13933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___13933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___13933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13899){
var state_val_13900 = (state_13899[(1)]);
if((state_val_13900 === (7))){
var state_13899__$1 = state_13899;
var statearr_13901_13934 = state_13899__$1;
(statearr_13901_13934[(2)] = null);

(statearr_13901_13934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (1))){
var state_13899__$1 = state_13899;
var statearr_13902_13935 = state_13899__$1;
(statearr_13902_13935[(2)] = null);

(statearr_13902_13935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (4))){
var inst_13863 = (state_13899[(7)]);
var inst_13865 = (inst_13863 < cnt);
var state_13899__$1 = state_13899;
if(cljs.core.truth_(inst_13865)){
var statearr_13903_13936 = state_13899__$1;
(statearr_13903_13936[(1)] = (6));

} else {
var statearr_13904_13937 = state_13899__$1;
(statearr_13904_13937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (15))){
var inst_13895 = (state_13899[(2)]);
var state_13899__$1 = state_13899;
var statearr_13905_13938 = state_13899__$1;
(statearr_13905_13938[(2)] = inst_13895);

(statearr_13905_13938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (13))){
var inst_13888 = cljs.core.async.close_BANG_.call(null,out);
var state_13899__$1 = state_13899;
var statearr_13906_13939 = state_13899__$1;
(statearr_13906_13939[(2)] = inst_13888);

(statearr_13906_13939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (6))){
var state_13899__$1 = state_13899;
var statearr_13907_13940 = state_13899__$1;
(statearr_13907_13940[(2)] = null);

(statearr_13907_13940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (3))){
var inst_13897 = (state_13899[(2)]);
var state_13899__$1 = state_13899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13899__$1,inst_13897);
} else {
if((state_val_13900 === (12))){
var inst_13885 = (state_13899[(8)]);
var inst_13885__$1 = (state_13899[(2)]);
var inst_13886 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13885__$1);
var state_13899__$1 = (function (){var statearr_13908 = state_13899;
(statearr_13908[(8)] = inst_13885__$1);

return statearr_13908;
})();
if(cljs.core.truth_(inst_13886)){
var statearr_13909_13941 = state_13899__$1;
(statearr_13909_13941[(1)] = (13));

} else {
var statearr_13910_13942 = state_13899__$1;
(statearr_13910_13942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (2))){
var inst_13862 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13863 = (0);
var state_13899__$1 = (function (){var statearr_13911 = state_13899;
(statearr_13911[(9)] = inst_13862);

(statearr_13911[(7)] = inst_13863);

return statearr_13911;
})();
var statearr_13912_13943 = state_13899__$1;
(statearr_13912_13943[(2)] = null);

(statearr_13912_13943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (11))){
var inst_13863 = (state_13899[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13899,(10),Object,null,(9));
var inst_13872 = chs__$1.call(null,inst_13863);
var inst_13873 = done.call(null,inst_13863);
var inst_13874 = cljs.core.async.take_BANG_.call(null,inst_13872,inst_13873);
var state_13899__$1 = state_13899;
var statearr_13913_13944 = state_13899__$1;
(statearr_13913_13944[(2)] = inst_13874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (9))){
var inst_13863 = (state_13899[(7)]);
var inst_13876 = (state_13899[(2)]);
var inst_13877 = (inst_13863 + (1));
var inst_13863__$1 = inst_13877;
var state_13899__$1 = (function (){var statearr_13914 = state_13899;
(statearr_13914[(7)] = inst_13863__$1);

(statearr_13914[(10)] = inst_13876);

return statearr_13914;
})();
var statearr_13915_13945 = state_13899__$1;
(statearr_13915_13945[(2)] = null);

(statearr_13915_13945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (5))){
var inst_13883 = (state_13899[(2)]);
var state_13899__$1 = (function (){var statearr_13916 = state_13899;
(statearr_13916[(11)] = inst_13883);

return statearr_13916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13899__$1,(12),dchan);
} else {
if((state_val_13900 === (14))){
var inst_13885 = (state_13899[(8)]);
var inst_13890 = cljs.core.apply.call(null,f,inst_13885);
var state_13899__$1 = state_13899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13899__$1,(16),out,inst_13890);
} else {
if((state_val_13900 === (16))){
var inst_13892 = (state_13899[(2)]);
var state_13899__$1 = (function (){var statearr_13917 = state_13899;
(statearr_13917[(12)] = inst_13892);

return statearr_13917;
})();
var statearr_13918_13946 = state_13899__$1;
(statearr_13918_13946[(2)] = null);

(statearr_13918_13946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (10))){
var inst_13867 = (state_13899[(2)]);
var inst_13868 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13899__$1 = (function (){var statearr_13919 = state_13899;
(statearr_13919[(13)] = inst_13867);

return statearr_13919;
})();
var statearr_13920_13947 = state_13899__$1;
(statearr_13920_13947[(2)] = inst_13868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (8))){
var inst_13881 = (state_13899[(2)]);
var state_13899__$1 = state_13899;
var statearr_13921_13948 = state_13899__$1;
(statearr_13921_13948[(2)] = inst_13881);

(statearr_13921_13948[(1)] = (5));


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
}
}
}
});})(c__7703__auto___13933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7628__auto__,c__7703__auto___13933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_13925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13925[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_13925[(1)] = (1));

return statearr_13925;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_13899){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_13899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e13926){if((e13926 instanceof Object)){
var ex__7632__auto__ = e13926;
var statearr_13927_13949 = state_13899;
(statearr_13927_13949[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13950 = state_13899;
state_13899 = G__13950;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_13899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_13899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___13933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7705__auto__ = (function (){var statearr_13928 = f__7704__auto__.call(null);
(statearr_13928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___13933);

return statearr_13928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___13933,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args13952 = [];
var len__5507__auto___14008 = arguments.length;
var i__5508__auto___14009 = (0);
while(true){
if((i__5508__auto___14009 < len__5507__auto___14008)){
args13952.push((arguments[i__5508__auto___14009]));

var G__14010 = (i__5508__auto___14009 + (1));
i__5508__auto___14009 = G__14010;
continue;
} else {
}
break;
}

var G__13954 = args13952.length;
switch (G__13954) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13952.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7703__auto___14012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___14012,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___14012,out){
return (function (state_13984){
var state_val_13985 = (state_13984[(1)]);
if((state_val_13985 === (7))){
var inst_13963 = (state_13984[(7)]);
var inst_13964 = (state_13984[(8)]);
var inst_13963__$1 = (state_13984[(2)]);
var inst_13964__$1 = cljs.core.nth.call(null,inst_13963__$1,(0),null);
var inst_13965 = cljs.core.nth.call(null,inst_13963__$1,(1),null);
var inst_13966 = (inst_13964__$1 == null);
var state_13984__$1 = (function (){var statearr_13986 = state_13984;
(statearr_13986[(9)] = inst_13965);

(statearr_13986[(7)] = inst_13963__$1);

(statearr_13986[(8)] = inst_13964__$1);

return statearr_13986;
})();
if(cljs.core.truth_(inst_13966)){
var statearr_13987_14013 = state_13984__$1;
(statearr_13987_14013[(1)] = (8));

} else {
var statearr_13988_14014 = state_13984__$1;
(statearr_13988_14014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (1))){
var inst_13955 = cljs.core.vec.call(null,chs);
var inst_13956 = inst_13955;
var state_13984__$1 = (function (){var statearr_13989 = state_13984;
(statearr_13989[(10)] = inst_13956);

return statearr_13989;
})();
var statearr_13990_14015 = state_13984__$1;
(statearr_13990_14015[(2)] = null);

(statearr_13990_14015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (4))){
var inst_13956 = (state_13984[(10)]);
var state_13984__$1 = state_13984;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13984__$1,(7),inst_13956);
} else {
if((state_val_13985 === (6))){
var inst_13980 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_13991_14016 = state_13984__$1;
(statearr_13991_14016[(2)] = inst_13980);

(statearr_13991_14016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (3))){
var inst_13982 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13984__$1,inst_13982);
} else {
if((state_val_13985 === (2))){
var inst_13956 = (state_13984[(10)]);
var inst_13958 = cljs.core.count.call(null,inst_13956);
var inst_13959 = (inst_13958 > (0));
var state_13984__$1 = state_13984;
if(cljs.core.truth_(inst_13959)){
var statearr_13993_14017 = state_13984__$1;
(statearr_13993_14017[(1)] = (4));

} else {
var statearr_13994_14018 = state_13984__$1;
(statearr_13994_14018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (11))){
var inst_13956 = (state_13984[(10)]);
var inst_13973 = (state_13984[(2)]);
var tmp13992 = inst_13956;
var inst_13956__$1 = tmp13992;
var state_13984__$1 = (function (){var statearr_13995 = state_13984;
(statearr_13995[(11)] = inst_13973);

(statearr_13995[(10)] = inst_13956__$1);

return statearr_13995;
})();
var statearr_13996_14019 = state_13984__$1;
(statearr_13996_14019[(2)] = null);

(statearr_13996_14019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (9))){
var inst_13964 = (state_13984[(8)]);
var state_13984__$1 = state_13984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13984__$1,(11),out,inst_13964);
} else {
if((state_val_13985 === (5))){
var inst_13978 = cljs.core.async.close_BANG_.call(null,out);
var state_13984__$1 = state_13984;
var statearr_13997_14020 = state_13984__$1;
(statearr_13997_14020[(2)] = inst_13978);

(statearr_13997_14020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (10))){
var inst_13976 = (state_13984[(2)]);
var state_13984__$1 = state_13984;
var statearr_13998_14021 = state_13984__$1;
(statearr_13998_14021[(2)] = inst_13976);

(statearr_13998_14021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13985 === (8))){
var inst_13965 = (state_13984[(9)]);
var inst_13956 = (state_13984[(10)]);
var inst_13963 = (state_13984[(7)]);
var inst_13964 = (state_13984[(8)]);
var inst_13968 = (function (){var cs = inst_13956;
var vec__13961 = inst_13963;
var v = inst_13964;
var c = inst_13965;
return ((function (cs,vec__13961,v,c,inst_13965,inst_13956,inst_13963,inst_13964,state_val_13985,c__7703__auto___14012,out){
return (function (p1__13951_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13951_SHARP_);
});
;})(cs,vec__13961,v,c,inst_13965,inst_13956,inst_13963,inst_13964,state_val_13985,c__7703__auto___14012,out))
})();
var inst_13969 = cljs.core.filterv.call(null,inst_13968,inst_13956);
var inst_13956__$1 = inst_13969;
var state_13984__$1 = (function (){var statearr_13999 = state_13984;
(statearr_13999[(10)] = inst_13956__$1);

return statearr_13999;
})();
var statearr_14000_14022 = state_13984__$1;
(statearr_14000_14022[(2)] = null);

(statearr_14000_14022[(1)] = (2));


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
});})(c__7703__auto___14012,out))
;
return ((function (switch__7628__auto__,c__7703__auto___14012,out){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_14004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14004[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_14004[(1)] = (1));

return statearr_14004;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_13984){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_13984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e14005){if((e14005 instanceof Object)){
var ex__7632__auto__ = e14005;
var statearr_14006_14023 = state_13984;
(statearr_14006_14023[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14024 = state_13984;
state_13984 = G__14024;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_13984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_13984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___14012,out))
})();
var state__7705__auto__ = (function (){var statearr_14007 = f__7704__auto__.call(null);
(statearr_14007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___14012);

return statearr_14007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___14012,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args14025 = [];
var len__5507__auto___14074 = arguments.length;
var i__5508__auto___14075 = (0);
while(true){
if((i__5508__auto___14075 < len__5507__auto___14074)){
args14025.push((arguments[i__5508__auto___14075]));

var G__14076 = (i__5508__auto___14075 + (1));
i__5508__auto___14075 = G__14076;
continue;
} else {
}
break;
}

var G__14027 = args14025.length;
switch (G__14027) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14025.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7703__auto___14078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___14078,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___14078,out){
return (function (state_14051){
var state_val_14052 = (state_14051[(1)]);
if((state_val_14052 === (7))){
var inst_14033 = (state_14051[(7)]);
var inst_14033__$1 = (state_14051[(2)]);
var inst_14034 = (inst_14033__$1 == null);
var inst_14035 = cljs.core.not.call(null,inst_14034);
var state_14051__$1 = (function (){var statearr_14053 = state_14051;
(statearr_14053[(7)] = inst_14033__$1);

return statearr_14053;
})();
if(inst_14035){
var statearr_14054_14079 = state_14051__$1;
(statearr_14054_14079[(1)] = (8));

} else {
var statearr_14055_14080 = state_14051__$1;
(statearr_14055_14080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (1))){
var inst_14028 = (0);
var state_14051__$1 = (function (){var statearr_14056 = state_14051;
(statearr_14056[(8)] = inst_14028);

return statearr_14056;
})();
var statearr_14057_14081 = state_14051__$1;
(statearr_14057_14081[(2)] = null);

(statearr_14057_14081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (4))){
var state_14051__$1 = state_14051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14051__$1,(7),ch);
} else {
if((state_val_14052 === (6))){
var inst_14046 = (state_14051[(2)]);
var state_14051__$1 = state_14051;
var statearr_14058_14082 = state_14051__$1;
(statearr_14058_14082[(2)] = inst_14046);

(statearr_14058_14082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (3))){
var inst_14048 = (state_14051[(2)]);
var inst_14049 = cljs.core.async.close_BANG_.call(null,out);
var state_14051__$1 = (function (){var statearr_14059 = state_14051;
(statearr_14059[(9)] = inst_14048);

return statearr_14059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14051__$1,inst_14049);
} else {
if((state_val_14052 === (2))){
var inst_14028 = (state_14051[(8)]);
var inst_14030 = (inst_14028 < n);
var state_14051__$1 = state_14051;
if(cljs.core.truth_(inst_14030)){
var statearr_14060_14083 = state_14051__$1;
(statearr_14060_14083[(1)] = (4));

} else {
var statearr_14061_14084 = state_14051__$1;
(statearr_14061_14084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (11))){
var inst_14028 = (state_14051[(8)]);
var inst_14038 = (state_14051[(2)]);
var inst_14039 = (inst_14028 + (1));
var inst_14028__$1 = inst_14039;
var state_14051__$1 = (function (){var statearr_14062 = state_14051;
(statearr_14062[(10)] = inst_14038);

(statearr_14062[(8)] = inst_14028__$1);

return statearr_14062;
})();
var statearr_14063_14085 = state_14051__$1;
(statearr_14063_14085[(2)] = null);

(statearr_14063_14085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (9))){
var state_14051__$1 = state_14051;
var statearr_14064_14086 = state_14051__$1;
(statearr_14064_14086[(2)] = null);

(statearr_14064_14086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (5))){
var state_14051__$1 = state_14051;
var statearr_14065_14087 = state_14051__$1;
(statearr_14065_14087[(2)] = null);

(statearr_14065_14087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (10))){
var inst_14043 = (state_14051[(2)]);
var state_14051__$1 = state_14051;
var statearr_14066_14088 = state_14051__$1;
(statearr_14066_14088[(2)] = inst_14043);

(statearr_14066_14088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14052 === (8))){
var inst_14033 = (state_14051[(7)]);
var state_14051__$1 = state_14051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14051__$1,(11),out,inst_14033);
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
});})(c__7703__auto___14078,out))
;
return ((function (switch__7628__auto__,c__7703__auto___14078,out){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_14070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14070[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_14070[(1)] = (1));

return statearr_14070;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_14051){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_14051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e14071){if((e14071 instanceof Object)){
var ex__7632__auto__ = e14071;
var statearr_14072_14089 = state_14051;
(statearr_14072_14089[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14090 = state_14051;
state_14051 = G__14090;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_14051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_14051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___14078,out))
})();
var state__7705__auto__ = (function (){var statearr_14073 = f__7704__auto__.call(null);
(statearr_14073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___14078);

return statearr_14073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___14078,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain values from ch. Consecutive duplicate
 * values will be dropped.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args14091 = [];
var len__5507__auto___14142 = arguments.length;
var i__5508__auto___14143 = (0);
while(true){
if((i__5508__auto___14143 < len__5507__auto___14142)){
args14091.push((arguments[i__5508__auto___14143]));

var G__14144 = (i__5508__auto___14143 + (1));
i__5508__auto___14143 = G__14144;
continue;
} else {
}
break;
}

var G__14093 = args14091.length;
switch (G__14093) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14091.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7703__auto___14146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___14146,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___14146,out){
return (function (state_14117){
var state_val_14118 = (state_14117[(1)]);
if((state_val_14118 === (7))){
var inst_14112 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14119_14147 = state_14117__$1;
(statearr_14119_14147[(2)] = inst_14112);

(statearr_14119_14147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (1))){
var inst_14094 = null;
var state_14117__$1 = (function (){var statearr_14120 = state_14117;
(statearr_14120[(7)] = inst_14094);

return statearr_14120;
})();
var statearr_14121_14148 = state_14117__$1;
(statearr_14121_14148[(2)] = null);

(statearr_14121_14148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (4))){
var inst_14097 = (state_14117[(8)]);
var inst_14097__$1 = (state_14117[(2)]);
var inst_14098 = (inst_14097__$1 == null);
var inst_14099 = cljs.core.not.call(null,inst_14098);
var state_14117__$1 = (function (){var statearr_14122 = state_14117;
(statearr_14122[(8)] = inst_14097__$1);

return statearr_14122;
})();
if(inst_14099){
var statearr_14123_14149 = state_14117__$1;
(statearr_14123_14149[(1)] = (5));

} else {
var statearr_14124_14150 = state_14117__$1;
(statearr_14124_14150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (6))){
var state_14117__$1 = state_14117;
var statearr_14125_14151 = state_14117__$1;
(statearr_14125_14151[(2)] = null);

(statearr_14125_14151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (3))){
var inst_14114 = (state_14117[(2)]);
var inst_14115 = cljs.core.async.close_BANG_.call(null,out);
var state_14117__$1 = (function (){var statearr_14126 = state_14117;
(statearr_14126[(9)] = inst_14114);

return statearr_14126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14117__$1,inst_14115);
} else {
if((state_val_14118 === (2))){
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14117__$1,(4),ch);
} else {
if((state_val_14118 === (11))){
var inst_14097 = (state_14117[(8)]);
var inst_14106 = (state_14117[(2)]);
var inst_14094 = inst_14097;
var state_14117__$1 = (function (){var statearr_14127 = state_14117;
(statearr_14127[(10)] = inst_14106);

(statearr_14127[(7)] = inst_14094);

return statearr_14127;
})();
var statearr_14128_14152 = state_14117__$1;
(statearr_14128_14152[(2)] = null);

(statearr_14128_14152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (9))){
var inst_14097 = (state_14117[(8)]);
var state_14117__$1 = state_14117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14117__$1,(11),out,inst_14097);
} else {
if((state_val_14118 === (5))){
var inst_14097 = (state_14117[(8)]);
var inst_14094 = (state_14117[(7)]);
var inst_14101 = cljs.core._EQ_.call(null,inst_14097,inst_14094);
var state_14117__$1 = state_14117;
if(inst_14101){
var statearr_14130_14153 = state_14117__$1;
(statearr_14130_14153[(1)] = (8));

} else {
var statearr_14131_14154 = state_14117__$1;
(statearr_14131_14154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (10))){
var inst_14109 = (state_14117[(2)]);
var state_14117__$1 = state_14117;
var statearr_14132_14155 = state_14117__$1;
(statearr_14132_14155[(2)] = inst_14109);

(statearr_14132_14155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14118 === (8))){
var inst_14094 = (state_14117[(7)]);
var tmp14129 = inst_14094;
var inst_14094__$1 = tmp14129;
var state_14117__$1 = (function (){var statearr_14133 = state_14117;
(statearr_14133[(7)] = inst_14094__$1);

return statearr_14133;
})();
var statearr_14134_14156 = state_14117__$1;
(statearr_14134_14156[(2)] = null);

(statearr_14134_14156[(1)] = (2));


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
});})(c__7703__auto___14146,out))
;
return ((function (switch__7628__auto__,c__7703__auto___14146,out){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_14138 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14138[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_14138[(1)] = (1));

return statearr_14138;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_14117){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_14117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e14139){if((e14139 instanceof Object)){
var ex__7632__auto__ = e14139;
var statearr_14140_14157 = state_14117;
(statearr_14140_14157[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14158 = state_14117;
state_14117 = G__14158;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_14117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_14117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___14146,out))
})();
var state__7705__auto__ = (function (){var statearr_14141 = f__7704__auto__.call(null);
(statearr_14141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___14146);

return statearr_14141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___14146,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will contain vectors of n items taken from ch. The
 * final vector in the return channel may be smaller than n if ch closed before
 * the vector could be completely filled.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args14159 = [];
var len__5507__auto___14229 = arguments.length;
var i__5508__auto___14230 = (0);
while(true){
if((i__5508__auto___14230 < len__5507__auto___14229)){
args14159.push((arguments[i__5508__auto___14230]));

var G__14231 = (i__5508__auto___14230 + (1));
i__5508__auto___14230 = G__14231;
continue;
} else {
}
break;
}

var G__14161 = args14159.length;
switch (G__14161) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14159.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7703__auto___14233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___14233,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___14233,out){
return (function (state_14199){
var state_val_14200 = (state_14199[(1)]);
if((state_val_14200 === (7))){
var inst_14195 = (state_14199[(2)]);
var state_14199__$1 = state_14199;
var statearr_14201_14234 = state_14199__$1;
(statearr_14201_14234[(2)] = inst_14195);

(statearr_14201_14234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (1))){
var inst_14162 = (new Array(n));
var inst_14163 = inst_14162;
var inst_14164 = (0);
var state_14199__$1 = (function (){var statearr_14202 = state_14199;
(statearr_14202[(7)] = inst_14163);

(statearr_14202[(8)] = inst_14164);

return statearr_14202;
})();
var statearr_14203_14235 = state_14199__$1;
(statearr_14203_14235[(2)] = null);

(statearr_14203_14235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (4))){
var inst_14167 = (state_14199[(9)]);
var inst_14167__$1 = (state_14199[(2)]);
var inst_14168 = (inst_14167__$1 == null);
var inst_14169 = cljs.core.not.call(null,inst_14168);
var state_14199__$1 = (function (){var statearr_14204 = state_14199;
(statearr_14204[(9)] = inst_14167__$1);

return statearr_14204;
})();
if(inst_14169){
var statearr_14205_14236 = state_14199__$1;
(statearr_14205_14236[(1)] = (5));

} else {
var statearr_14206_14237 = state_14199__$1;
(statearr_14206_14237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (15))){
var inst_14189 = (state_14199[(2)]);
var state_14199__$1 = state_14199;
var statearr_14207_14238 = state_14199__$1;
(statearr_14207_14238[(2)] = inst_14189);

(statearr_14207_14238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (13))){
var state_14199__$1 = state_14199;
var statearr_14208_14239 = state_14199__$1;
(statearr_14208_14239[(2)] = null);

(statearr_14208_14239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (6))){
var inst_14164 = (state_14199[(8)]);
var inst_14185 = (inst_14164 > (0));
var state_14199__$1 = state_14199;
if(cljs.core.truth_(inst_14185)){
var statearr_14209_14240 = state_14199__$1;
(statearr_14209_14240[(1)] = (12));

} else {
var statearr_14210_14241 = state_14199__$1;
(statearr_14210_14241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (3))){
var inst_14197 = (state_14199[(2)]);
var state_14199__$1 = state_14199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14199__$1,inst_14197);
} else {
if((state_val_14200 === (12))){
var inst_14163 = (state_14199[(7)]);
var inst_14187 = cljs.core.vec.call(null,inst_14163);
var state_14199__$1 = state_14199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14199__$1,(15),out,inst_14187);
} else {
if((state_val_14200 === (2))){
var state_14199__$1 = state_14199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14199__$1,(4),ch);
} else {
if((state_val_14200 === (11))){
var inst_14179 = (state_14199[(2)]);
var inst_14180 = (new Array(n));
var inst_14163 = inst_14180;
var inst_14164 = (0);
var state_14199__$1 = (function (){var statearr_14211 = state_14199;
(statearr_14211[(7)] = inst_14163);

(statearr_14211[(8)] = inst_14164);

(statearr_14211[(10)] = inst_14179);

return statearr_14211;
})();
var statearr_14212_14242 = state_14199__$1;
(statearr_14212_14242[(2)] = null);

(statearr_14212_14242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (9))){
var inst_14163 = (state_14199[(7)]);
var inst_14177 = cljs.core.vec.call(null,inst_14163);
var state_14199__$1 = state_14199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14199__$1,(11),out,inst_14177);
} else {
if((state_val_14200 === (5))){
var inst_14167 = (state_14199[(9)]);
var inst_14172 = (state_14199[(11)]);
var inst_14163 = (state_14199[(7)]);
var inst_14164 = (state_14199[(8)]);
var inst_14171 = (inst_14163[inst_14164] = inst_14167);
var inst_14172__$1 = (inst_14164 + (1));
var inst_14173 = (inst_14172__$1 < n);
var state_14199__$1 = (function (){var statearr_14213 = state_14199;
(statearr_14213[(12)] = inst_14171);

(statearr_14213[(11)] = inst_14172__$1);

return statearr_14213;
})();
if(cljs.core.truth_(inst_14173)){
var statearr_14214_14243 = state_14199__$1;
(statearr_14214_14243[(1)] = (8));

} else {
var statearr_14215_14244 = state_14199__$1;
(statearr_14215_14244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (14))){
var inst_14192 = (state_14199[(2)]);
var inst_14193 = cljs.core.async.close_BANG_.call(null,out);
var state_14199__$1 = (function (){var statearr_14217 = state_14199;
(statearr_14217[(13)] = inst_14192);

return statearr_14217;
})();
var statearr_14218_14245 = state_14199__$1;
(statearr_14218_14245[(2)] = inst_14193);

(statearr_14218_14245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (10))){
var inst_14183 = (state_14199[(2)]);
var state_14199__$1 = state_14199;
var statearr_14219_14246 = state_14199__$1;
(statearr_14219_14246[(2)] = inst_14183);

(statearr_14219_14246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14200 === (8))){
var inst_14172 = (state_14199[(11)]);
var inst_14163 = (state_14199[(7)]);
var tmp14216 = inst_14163;
var inst_14163__$1 = tmp14216;
var inst_14164 = inst_14172;
var state_14199__$1 = (function (){var statearr_14220 = state_14199;
(statearr_14220[(7)] = inst_14163__$1);

(statearr_14220[(8)] = inst_14164);

return statearr_14220;
})();
var statearr_14221_14247 = state_14199__$1;
(statearr_14221_14247[(2)] = null);

(statearr_14221_14247[(1)] = (2));


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
}
}
});})(c__7703__auto___14233,out))
;
return ((function (switch__7628__auto__,c__7703__auto___14233,out){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_14225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14225[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_14225[(1)] = (1));

return statearr_14225;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_14199){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_14199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e14226){if((e14226 instanceof Object)){
var ex__7632__auto__ = e14226;
var statearr_14227_14248 = state_14199;
(statearr_14227_14248[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14249 = state_14199;
state_14199 = G__14249;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_14199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_14199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___14233,out))
})();
var state__7705__auto__ = (function (){var statearr_14228 = f__7704__auto__.call(null);
(statearr_14228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___14233);

return statearr_14228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___14233,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will contain vectors of items taken from ch. New
 * vectors will be created whenever (f itm) returns a value that differs from
 * the previous item's (f itm).
 * 
 * The output channel is unbuffered, unless buf-or-n is given
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args14250 = [];
var len__5507__auto___14324 = arguments.length;
var i__5508__auto___14325 = (0);
while(true){
if((i__5508__auto___14325 < len__5507__auto___14324)){
args14250.push((arguments[i__5508__auto___14325]));

var G__14326 = (i__5508__auto___14325 + (1));
i__5508__auto___14325 = G__14326;
continue;
} else {
}
break;
}

var G__14252 = args14250.length;
switch (G__14252) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14250.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7703__auto___14328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7703__auto___14328,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7628__auto__ = ((function (c__7703__auto___14328,out){
return (function (state_14294){
var state_val_14295 = (state_14294[(1)]);
if((state_val_14295 === (7))){
var inst_14290 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
var statearr_14296_14329 = state_14294__$1;
(statearr_14296_14329[(2)] = inst_14290);

(statearr_14296_14329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (1))){
var inst_14253 = [];
var inst_14254 = inst_14253;
var inst_14255 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14294__$1 = (function (){var statearr_14297 = state_14294;
(statearr_14297[(7)] = inst_14255);

(statearr_14297[(8)] = inst_14254);

return statearr_14297;
})();
var statearr_14298_14330 = state_14294__$1;
(statearr_14298_14330[(2)] = null);

(statearr_14298_14330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (4))){
var inst_14258 = (state_14294[(9)]);
var inst_14258__$1 = (state_14294[(2)]);
var inst_14259 = (inst_14258__$1 == null);
var inst_14260 = cljs.core.not.call(null,inst_14259);
var state_14294__$1 = (function (){var statearr_14299 = state_14294;
(statearr_14299[(9)] = inst_14258__$1);

return statearr_14299;
})();
if(inst_14260){
var statearr_14300_14331 = state_14294__$1;
(statearr_14300_14331[(1)] = (5));

} else {
var statearr_14301_14332 = state_14294__$1;
(statearr_14301_14332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (15))){
var inst_14284 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
var statearr_14302_14333 = state_14294__$1;
(statearr_14302_14333[(2)] = inst_14284);

(statearr_14302_14333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (13))){
var state_14294__$1 = state_14294;
var statearr_14303_14334 = state_14294__$1;
(statearr_14303_14334[(2)] = null);

(statearr_14303_14334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (6))){
var inst_14254 = (state_14294[(8)]);
var inst_14279 = inst_14254.length;
var inst_14280 = (inst_14279 > (0));
var state_14294__$1 = state_14294;
if(cljs.core.truth_(inst_14280)){
var statearr_14304_14335 = state_14294__$1;
(statearr_14304_14335[(1)] = (12));

} else {
var statearr_14305_14336 = state_14294__$1;
(statearr_14305_14336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (3))){
var inst_14292 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14294__$1,inst_14292);
} else {
if((state_val_14295 === (12))){
var inst_14254 = (state_14294[(8)]);
var inst_14282 = cljs.core.vec.call(null,inst_14254);
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14294__$1,(15),out,inst_14282);
} else {
if((state_val_14295 === (2))){
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14294__$1,(4),ch);
} else {
if((state_val_14295 === (11))){
var inst_14258 = (state_14294[(9)]);
var inst_14262 = (state_14294[(10)]);
var inst_14272 = (state_14294[(2)]);
var inst_14273 = [];
var inst_14274 = inst_14273.push(inst_14258);
var inst_14254 = inst_14273;
var inst_14255 = inst_14262;
var state_14294__$1 = (function (){var statearr_14306 = state_14294;
(statearr_14306[(7)] = inst_14255);

(statearr_14306[(11)] = inst_14272);

(statearr_14306[(12)] = inst_14274);

(statearr_14306[(8)] = inst_14254);

return statearr_14306;
})();
var statearr_14307_14337 = state_14294__$1;
(statearr_14307_14337[(2)] = null);

(statearr_14307_14337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (9))){
var inst_14254 = (state_14294[(8)]);
var inst_14270 = cljs.core.vec.call(null,inst_14254);
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14294__$1,(11),out,inst_14270);
} else {
if((state_val_14295 === (5))){
var inst_14255 = (state_14294[(7)]);
var inst_14258 = (state_14294[(9)]);
var inst_14262 = (state_14294[(10)]);
var inst_14262__$1 = f.call(null,inst_14258);
var inst_14263 = cljs.core._EQ_.call(null,inst_14262__$1,inst_14255);
var inst_14264 = cljs.core.keyword_identical_QMARK_.call(null,inst_14255,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14265 = (inst_14263) || (inst_14264);
var state_14294__$1 = (function (){var statearr_14308 = state_14294;
(statearr_14308[(10)] = inst_14262__$1);

return statearr_14308;
})();
if(cljs.core.truth_(inst_14265)){
var statearr_14309_14338 = state_14294__$1;
(statearr_14309_14338[(1)] = (8));

} else {
var statearr_14310_14339 = state_14294__$1;
(statearr_14310_14339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (14))){
var inst_14287 = (state_14294[(2)]);
var inst_14288 = cljs.core.async.close_BANG_.call(null,out);
var state_14294__$1 = (function (){var statearr_14312 = state_14294;
(statearr_14312[(13)] = inst_14287);

return statearr_14312;
})();
var statearr_14313_14340 = state_14294__$1;
(statearr_14313_14340[(2)] = inst_14288);

(statearr_14313_14340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (10))){
var inst_14277 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
var statearr_14314_14341 = state_14294__$1;
(statearr_14314_14341[(2)] = inst_14277);

(statearr_14314_14341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (8))){
var inst_14258 = (state_14294[(9)]);
var inst_14262 = (state_14294[(10)]);
var inst_14254 = (state_14294[(8)]);
var inst_14267 = inst_14254.push(inst_14258);
var tmp14311 = inst_14254;
var inst_14254__$1 = tmp14311;
var inst_14255 = inst_14262;
var state_14294__$1 = (function (){var statearr_14315 = state_14294;
(statearr_14315[(7)] = inst_14255);

(statearr_14315[(14)] = inst_14267);

(statearr_14315[(8)] = inst_14254__$1);

return statearr_14315;
})();
var statearr_14316_14342 = state_14294__$1;
(statearr_14316_14342[(2)] = null);

(statearr_14316_14342[(1)] = (2));


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
}
}
});})(c__7703__auto___14328,out))
;
return ((function (switch__7628__auto__,c__7703__auto___14328,out){
return (function() {
var cljs$core$async$state_machine__7629__auto__ = null;
var cljs$core$async$state_machine__7629__auto____0 = (function (){
var statearr_14320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14320[(0)] = cljs$core$async$state_machine__7629__auto__);

(statearr_14320[(1)] = (1));

return statearr_14320;
});
var cljs$core$async$state_machine__7629__auto____1 = (function (state_14294){
while(true){
var ret_value__7630__auto__ = (function (){try{while(true){
var result__7631__auto__ = switch__7628__auto__.call(null,state_14294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7631__auto__;
}
break;
}
}catch (e14321){if((e14321 instanceof Object)){
var ex__7632__auto__ = e14321;
var statearr_14322_14343 = state_14294;
(statearr_14322_14343[(5)] = ex__7632__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14344 = state_14294;
state_14294 = G__14344;
continue;
} else {
return ret_value__7630__auto__;
}
break;
}
});
cljs$core$async$state_machine__7629__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7629__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7629__auto____0;
cljs$core$async$state_machine__7629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7629__auto____1;
return cljs$core$async$state_machine__7629__auto__;
})()
;})(switch__7628__auto__,c__7703__auto___14328,out))
})();
var state__7705__auto__ = (function (){var statearr_14323 = f__7704__auto__.call(null);
(statearr_14323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___14328);

return statearr_14323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7705__auto__);
});})(c__7703__auto___14328,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map