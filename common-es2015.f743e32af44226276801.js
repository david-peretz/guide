(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{lzRr:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("lJxs"),r=i("AytR");class s{constructor(t,e,i){this.httpClient=t,this.endpoint=e,this.serializer=i}create(t){return this.httpClient.post(`${r.a.apiUrl}/${this.endpoint}`,this.serializer.toJson(t)).pipe(Object(n.a)(t=>this.serializer.fromJson(t)))}update(t){return this.httpClient.put("https://reqres.in/api/users/2",this.serializer.toJson(t)).pipe(Object(n.a)(t=>this.serializer.fromJson(t)))}read(t){return this.httpClient.get(`${r.a.uri}/${this.endpoint}/${t}`).pipe(Object(n.a)(t=>this.serializer.fromJson(t)))}list(t){return this.httpClient.get(`${r.a.uri}/${this.endpoint}${t?t.toQueryString():""}`).pipe(Object(n.a)(t=>this.convertData(t.data)))}delete(t){return this.httpClient.delete(`${r.a.uri}/${this.endpoint}/${t}`)}convertData(t){return t.map(t=>this.serializer.fromJson(t))}}},mrSG:function(t,e,i){"use strict";function n(t,e,i,n){return new(i||(i=Promise))(function(r,s){function o(t){try{u(n.next(t))}catch(e){s(e)}}function a(t){try{u(n.throw(t))}catch(e){s(e)}}function u(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}u((n=n.apply(t,e||[])).next())})}i.d(e,"a",function(){return n})},uhAp:function(t,e,i){"use strict";i.d(e,"a",function(){return n});class n{}}}]);