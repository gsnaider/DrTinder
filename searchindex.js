Search.setIndex({envversion:49,filenames:["android/compile","android/development","android/index","android/libraries","android/userManual","appServer/Docker","appServer/api","appServer/buildSinDocker","appServer/config","appServer/coverage","appServer/implementacion","appServer/index","appServer/knownBugs","ar/uba/fi/drtinder/ChatFragment","ar/uba/fi/drtinder/ChatSession","ar/uba/fi/drtinder/DrTinderLogger","ar/uba/fi/drtinder/ImageResourcesHandler","ar/uba/fi/drtinder/LocationHandler","ar/uba/fi/drtinder/LoginActivity","ar/uba/fi/drtinder/MainActivity","ar/uba/fi/drtinder/MatchesListener","ar/uba/fi/drtinder/MessagesListener","ar/uba/fi/drtinder/MessagesService","ar/uba/fi/drtinder/MessagesService-LocalBinder","ar/uba/fi/drtinder/SelectionFragment","ar/uba/fi/drtinder/ServerUrlWrapper","ar/uba/fi/drtinder/StringResourcesHandler","ar/uba/fi/drtinder/StringResourcesHandler-CallbackOperation","ar/uba/fi/drtinder/TinderFInstanceIdService","ar/uba/fi/drtinder/UserDetailsActivity","ar/uba/fi/drtinder/UserHandler","ar/uba/fi/drtinder/UserProfileActivity","ar/uba/fi/drtinder/Utility","ar/uba/fi/drtinder/package-index","index","packages","sharedServer/dbDiagram","sharedServer/documentation","sharedServer/index","sharedServer/userManual"],objects:{"ar.uba.fi":{drtinder:[33,0,1,""]},"ar.uba.fi.drtinder":{ChatFragment:[13,1,1,""],ChatSession:[14,1,1,""],DrTinderLogger:[15,1,1,""],ImageResourcesHandler:[16,1,1,""],LocationHandler:[17,1,1,""],LoginActivity:[18,1,1,""],MainActivity:[19,1,1,""],MatchesListener:[20,1,1,""],MessagesListener:[21,1,1,""],MessagesService:[22,1,1,""],SelectionFragment:[24,1,1,""],ServerUrlWrapper:[25,1,1,""],StringResourcesHandler:[26,1,1,""],TinderFInstanceIdService:[28,1,1,""],UserDetailsActivity:[29,1,1,""],UserHandler:[30,1,1,""],UserProfileActivity:[31,1,1,""],Utility:[32,1,1,""]},"ar.uba.fi.drtinder.ChatFragment":{"onCreateView(LayoutInflater, ViewGroup, Bundle)":[13,2,1,""]},"ar.uba.fi.drtinder.ChatSession":{"addResponse(String, String)":[14,2,1,""],"onCreate(Bundle)":[14,2,1,""],"onStart()":[14,2,1,""],"onStop()":[14,2,1,""],EXTRA_FRIEND_ID:[14,3,1,""],EXTRA_FRIEND_NAME:[14,3,1,""]},"ar.uba.fi.drtinder.DrTinderLogger":{"writeLog(int, String)":[15,2,1,""],DEBG:[15,3,1,""],ERRO:[15,3,1,""],INFO:[15,3,1,""],NET_DEBG:[15,3,1,""],NET_ERRO:[15,3,1,""],NET_INFO:[15,3,1,""],NET_WARN:[15,3,1,""],WARN:[15,3,1,""]},"ar.uba.fi.drtinder.ImageResourcesHandler":{"clearCache(Context)":[16,2,1,""],"fillImageResource(String, int, String, ImageView, Context)":[16,2,1,""],"freeCachedResource(String, int, Context)":[16,2,1,""],"prefetch(String, int, String, Context)":[16,2,1,""],RES_INTEREST_IMG:[16,3,1,""],RES_USER_IMG:[16,3,1,""]},"ar.uba.fi.drtinder.LocationHandler":{"getLocationString(Activity)":[17,2,1,""],LOCATION_FAILED:[17,3,1,""],PERMISSION_MISSING:[17,3,1,""]},"ar.uba.fi.drtinder.LoginActivity":{"onCreate(Bundle)":[18,2,1,""],"onCreateLoader(int, Bundle)":[18,2,1,""],"onLoadFinished(Loader, Cursor)":[18,2,1,""],"onLoaderReset(Loader)":[18,2,1,""]},"ar.uba.fi.drtinder.MainActivity":{"onBackPressed()":[19,2,1,""],"onCreate(Bundle)":[19,2,1,""],"onCreateOptionsMenu(Menu)":[19,2,1,""],"onDestroy()":[19,2,1,""],"onNavigationItemSelected(MenuItem)":[19,2,1,""],"onOptionsItemSelected(MenuItem)":[19,2,1,""],"onStart()":[19,2,1,""],"onStop()":[19,2,1,""]},"ar.uba.fi.drtinder.MatchesListener":{"startListening(String, Context)":[20,2,1,""],"stopListening()":[20,2,1,""]},"ar.uba.fi.drtinder.MessagesListener":{"startListening(String, Context, ChatSession)":[21,2,1,""],"stopListening()":[21,2,1,""]},"ar.uba.fi.drtinder.MessagesService":{"onMessageReceived(RemoteMessage)":[22,2,1,""],"setSession(ChatSession)":[22,2,1,""],LocalBinder:[23,1,1,""]},"ar.uba.fi.drtinder.MessagesService.LocalBinder":{"getService()":[23,2,1,""]},"ar.uba.fi.drtinder.SelectionFragment":{"onCreateView(LayoutInflater, ViewGroup, Bundle)":[24,2,1,""],"onStart()":[24,2,1,""],"onStop()":[24,2,1,""]},"ar.uba.fi.drtinder.ServerUrlWrapper":{"getServerUrl()":[25,2,1,""],"setServerUrl(String)":[25,2,1,""]},"ar.uba.fi.drtinder.StringResourcesHandler":{"executeQuery(String, int, String, CallbackOperation)":[26,2,1,""],"executeQuery(int, String, CallbackOperation)":[26,2,1,""],CallbackOperation:[27,1,1,""],INTEREST_DATA_DIVIDER:[26,3,1,""],INTEREST_DIVIDER:[26,3,1,""],SERVICE_CHAT:[26,3,1,""],SERVICE_MATCHES:[26,3,1,""],USER_CANDIDATES:[26,3,1,""],USER_CHAT:[26,3,1,""],USER_INFO:[26,3,1,""],USER_MATCHES:[26,3,1,""]},"ar.uba.fi.drtinder.StringResourcesHandler.CallbackOperation":{"execute(List)":[27,2,1,""]},"ar.uba.fi.drtinder.TinderFInstanceIdService":{"onTokenRefresh()":[28,2,1,""]},"ar.uba.fi.drtinder.UserDetailsActivity":{"onCreate(Bundle)":[29,2,1,""],EXTRA_USER_AGE:[29,3,1,""],EXTRA_USER_BIO:[29,3,1,""],EXTRA_USER_ID:[29,3,1,""],EXTRA_USER_INTS:[29,3,1,""],EXTRA_USER_NAME:[29,3,1,""]},"ar.uba.fi.drtinder.UserHandler":{"deleteProfile(String)":[30,2,1,""],"getLoginToken(String, String, String)":[30,2,1,""],"getToken()":[30,2,1,""],"getUserEmail()":[30,2,1,""],"getUsername()":[30,2,1,""],"getUsernameFrom(String)":[30,2,1,""],"isLoggedIn()":[30,2,1,""],"isValidEmail(String)":[30,2,1,""],"isValidPassword(String)":[30,2,1,""],"logout()":[30,2,1,""],"sendLike(String, String, boolean)":[30,2,1,""],"sendMessage(String, String, String)":[30,2,1,""],"signUp(String, String, Map)":[30,2,1,""],"updateInfo(String, Map)":[30,2,1,""],"uploadProfilePicture(Bitmap, String)":[30,2,1,""],ERROR_TOKEN:[30,3,1,""],FAILED_TOKEN:[30,3,1,""],SIGNUP_FAILED:[30,3,1,""],SIGNUP_SUCCESS:[30,3,1,""],SIGNUP_USEREXIST:[30,3,1,""]},"ar.uba.fi.drtinder.UserProfileActivity":{"onActivityResult(int, int, Intent)":[31,2,1,""],"onCreate(Bundle)":[31,2,1,""],PROFILE_ACTION_CREATE:[31,3,1,""],PROFILE_ACTION_UPDATE:[31,3,1,""],PROFILE_EXTRA_ACTION:[31,3,1,""],USER_EXTRA_USEREMAIL:[31,3,1,""],USER_EXTRA_USERNAME:[31,3,1,""]},"ar.uba.fi.drtinder.Utility":{"getViewgroup(Activity)":[32,2,1,""],"hideKeyboard(Activity)":[32,2,1,""],"showMessage(String, View)":[32,2,1,""],"showMessage(String, View, String)":[32,2,1,""],"showMessage(String, View, String, int)":[32,2,1,""],"showMessage(String, View, int)":[32,2,1,""]}},objnames:{"0":["java","package","Java package"],"1":["java","type","Java type"],"2":["java","method","Java method"],"3":["java","field","Java field"]},objtypes:{"0":"java:package","1":"java:type","2":"java:method","3":"java:field"},terms:{"1a9363e0906c":5,"\u00faltimo":37,"administraci\u00f3n":[10,37],"aplicaci\u00f3n":37,"autenticaci\u00f3n":10,"autom\u00e1ticament":37,"boolean":[19,30],"c\u00f3digo":37,"c\u00f3mo":10,"case":1,"catch":1,"composici\u00f3n":37,"configuraci\u00f3n":8,"const":[15,16,30],"construcci\u00f3n":37,"continuaci\u00f3n":5,"contrase\u00f1a":10,"creaci\u00f3n":34,"debi\u00f3":10,"default":[8,36],"definici\u00f3n":37,"dejar\u00e1":[5,7],"delete":6,"descripci\u00f3n":10,"despu\u00e9":7,"documentaci\u00f3n":8,"enum":36,"espec\u00edfica":10,"est\u00e1":[5,37],"est\u00e9n":37,"final":[14,15,16,17,20,21,25,26,29,30,31,32],"gr\u00e1fica":37,"implementaci\u00f3n":[7,10],"informaci\u00f3n":[10,37],"instal\u00f3":37,"int":[1,15,16,18,26,31,32],"librer\u00eda":7,"llam\u00f3":10,"long":17,"m\u00e1quina":5,"m\u00e9todo":10,"manteni\u00e9ndolo":37,"mi_contrase\u00f1a":6,"n\u00famero":8,"new":[1,18,20,21,22,25,26,30,31],"null":[1,13,14,18,19,24,29,31],"podr\u00e1":37,"podr\u00edamo":8,"public":[1,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"qu\u00e9":10,"return":[1,13,17,18,19,24,25,30,32],"se\u00f1al":37,"ser\u00eda":[5,37],"static":[14,15,16,17,20,21,22,25,26,29,30,31,32],"super":[1,14],"switch":1,"tomar\u00e1":8,"trav\u00e9":5,"true":[19,30],"try":1,"utiliz\u00f3":[7,8,10],"ven\u00eda":10,"void":[1,14,15,16,18,19,20,21,22,24,25,26,27,28,29,30,31,32],"while":[3,18,30],aaa:6,aaaaaa:6,aaronbond:3,abarcan:7,abra:7,abstraerno:10,access:[1,3],account:1,across:3,act:1,action:31,activ:[1,14,16,17,18,19,23,29,30,31,32],activiti:[1,17,18,24,29,31,32],activo:5,actualment:[8,37],add:[1,13,14,24],addinterest:1,adema:10,administr:38,after:[14,18,19,29,31],again:[14,16],agregar:8,algo:5,alguno:[8,11],alia:[6,36],all:[1,3,7,14,16,19],allow:[1,18,34],almacenando:10,alreadi:30,also:[1,2],amalgam:7,android:[0,1],ani:[1,3,13,18,24],anterior:5,any:[6,18],anywai:1,apagar:5,api:0,apk:0,aplic:2,app:[1,5],appcompatact:[14,19,29,31],applic:[3,18,34,38],apt:[7,37],apuntan:7,aqui:5,archivo:[5,7,8,37],argument:18,arrai:27,asegurars:37,assert:1,associ:[22,23],attach:[13,24],auth:16,author:[3,6],autoconf:7,autogen:7,autom:1,automat:[1,3],avail:2,backdrop:1,backport:3,bad_token:6,band:36,base:[10,18,34,37],bash:37,basic:18,beach:36,been:14,befor:[1,3],bellow:3,best:3,between:[1,14,26,34],bin:37,bind:21,binder:23,biographi:29,bitmap:30,bodi:[6,37],boring_jen:5,both:1,bug:11,build:[1,3],buildear:7,buildscript:3,built:2,bumptech:3,bundl:[13,14,18,19,24,29,31],busca:8,button:32,buttonstr:32,cach:[1,3,5,16,19],call:[13,14,16,17,18,19,22,24,29,31,38],callback:[26,27],callbackoper:[1,26],caller:[18,32],can:[0,1,2,13,18,24],candid:[1,26,30],candidateid:30,cant:1,cargar:8,carpeta:[7,37],caso:5,categori:36,cerrado:7,cerrar:37,certain:16,cesanta:10,chardatabasemanag:10,chat:[1,6,10,12,13,14,22,26,34],chatfrag:1,chatlist:19,chatsess:1,check:[1,3,25,30],checkstyl:1,choos:24,cierr:7,cierra:37,circular:1,circularimageview:3,clase:7,clave:[8,10],clean:1,clear:[1,16,19],clearcach:1,click:5,client:1,clone:7,close:1,cloud:3,cmake:7,code:0,columna:5,com:[3,6,7,8,10],comando:[5,7,37],comfort:1,comma:3,commit:18,common:[1,32],commun:34,como:[7,8,10,37],compat:3,compon:3,comunica:11,con:[1,5,7,8],concatena:10,conexion:[1,12],conf:8,configur:7,configurar:8,connect:1,connection:36,consist:[2,34,38],constant:16,construct:[13,24],contact:1,contain:[1,5,13,14,18,19,24,29,30,31],container:5,contar:5,contenga:37,context:[16,20,21,32],continu:2,contrib:37,contribut:1,coordin:32,coordinatorlayout:32,core:3,corra:[7,37],correcto:7,correr:[5,7,8,10,37],correspond:32,corresponden:37,corriendo:[5,7],corriera:8,could:[1,2],cpp:[7,10],creada:[5,7],creado:37,creando:37,crear:[10,37],crearon:10,creat:[1,18,19,30,31],create:36,createdb:37,creation:31,cree:8,css:37,csv:3,csvparser:10,cual:[7,10],cualquier:5,cuatro:10,cuenta:37,curl:[7,10],current:30,cursor:18,cursorload:18,custom:3,database:36,database_url:37,databasemanag:10,date:34,dbname:37,dcmake_build_type:7,debe:[5,7,8,10,37],debug:[1,7,8,15],decid:10,decir:37,deck:1,definicion:34,deja:5,dejelo:7,deliv:3,dentro:8,dependiendo:10,deployar:5,deployea:37,deriv:[1,14],desarrollo:37,descargar:5,descripcion:10,descript:3,desd:37,desea:8,despliegu:5,destroi:19,detach:26,detail:[1,29],determinada:37,dev:7,devic:17,devuelv:5,difer:26,diferenciando:10,direccion:8,directori:37,directorio:[5,8],discoveri:34,displaytim:32,dispon:37,distinta:8,distinto:7,divertida:6,divid:26,doc:3,dockerfil:5,documentacion:34,doe:1,dond:[5,37],doubl:36,down:[1,14,18,19,29,31],download:[0,1,2,3,4,39],draw:3,drop:36,drtinder:[1,7],drtinderlogg:1,dure:1,dynam:1,easylog:8,either:14,ejecut:[7,37],ejecutada:5,ejecutar:[5,37],ejemplo:[8,10,37],eliminar:37,ello:[7,37],email:[30,31,36],encuentra:[5,7,37],encuentran:[8,11],enough:1,ensur:1,entir:1,entr:7,entri:1,enumeran:5,env:34,envio:10,equal:1,era:10,erro:1,escribiendo:7,escribir:37,est:[5,8,10,37],esta:[8,37],estara:37,este:[7,8,10,11],esto:[5,7,8,10],evant:3,even:1,everi:1,exampl:1,except:14,execut:[1,26],executequeri:1,exist:30,exists:36,exit:37,exitosa:5,express:[3,37],extend:[13,14,18,19,22,23,24,28,29,31],extern:[1,3],external:1,extra:[11,14,29,31],extra_user_id:1,facilit:34,fail:[1,17,30],falla:12,fals:30,falta:8,featur:1,feel:1,female:1,fetch:[1,16,30],file:[0,1,8,16,37],fill:[1,16],fillimageresourc:1,findbug:1,findviewbyid:1,finish:[18,26],firebas:1,firebaseinstanceidservic:28,firebasemessagingservic:22,fix:38,flag:8,focus:3,follow:[1,3,14],food:[6,36],forc:1,foreign:36,forma:[5,7,8],format:17,formato:[8,37],found:[1,2],fragment:[1,13,14,18,19,24],framework:3,freecachedresourc:1,frenar:5,friend:14,from:[0,1,2,4,13,16,24,30,32,39],fue:37,funcionalidad:7,further:1,gcov:7,gener:[0,1,13,18,24],gent:6,get:[1,6,7,17,23,25,30,32,37],getbasecontext:1,getbitmap:1,getcontentresolv:1,getcontext:1,getdata:1,getstringextra:1,getviewgroup:1,git:[1,7],github:[0,1,3,7,10],given:[13,18,24],glide:1,global:30,good:6,googl:3,googletest:7,gpl3:1,gradl:[1,3],group:26,gtest:7,guarda:10,guardar:[10,12],guardo:11,guava:1,guid:1,hacer:[7,8,10],had:14,haga:5,hai:37,handl:[1,30],handler:[1,16,17,20,21],happen:[1,18],have:[13,24],header:6,help:16,here:[1,4,13,24,39],heroku:37,herokuapp:8,hide:32,higesoft:3,highli:1,hizo:10,html:[7,37],http:[3,6,7,8],ide:1,ignora:8,igual:7,imag:[1,3,16,29],image:[1,5,16],imageid:16,imagen:5,imageresourceshandl:1,imageuri:1,imageview:1,imgview:16,implement:[14,18,19],implementada:37,imposs:1,improv:[1,16],includ:[1,3],incom:22,income:22,incorrecto:6,index:[7,18],indica:37,indiqu:8,individual:10,inflat:[13,24],info:[1,2],inform:[1,2],informat:[15,26],iniciara:8,init:7,initi:[14,18,19,29,31],inject:3,insert:36,instal:[7,37],instalado:[7,10,37],instalar:37,instanc:18,instancest:18,instanti:[13,24],instantiat:18,instruccion:5,integ:36,intent:[1,14,31],interes:37,interesan:6,interest1:1,interest:[1,16,26,29,34],interest_data_divider:1,interest_divider:1,interest_t:36,interfac:[13,24,27,38],interfaz:37,intern:1,ioerror:1,ioexception:1,irrelev:1,item:19,itself:[13,24],jam:36,java:[1,3],javadoc:[1,34],javascript:37,json:[8,37],jsoncpp:[7,10],jsonpars:10,jsonschema:37,kei:[29,37],key:36,keyboard:32,keystor:0,kill:5,known:11,lambda:3,last:2,lat:17,later:[0,2,14],latest:[2,4,39],latitud:36,layout:32,layoutinflat:[13,24],layoutparam:[13,24],lcov:7,length_:32,levant:7,levantar:37,level:[0,15],lib:7,libboost:7,libbz2:7,libcurl4:7,libgflag:7,librari:1,libreria:[7,10],libsnappi:7,libssl:7,libtool:7,licenc:1,lifecycl:24,like:[1,10,12,24,30],likesdatabasemanag:10,limit:36,link:8,lint:1,linux:7,list:[1,3,13,15,16,17,26,27,30],listen:[20,21,22],llamando:10,llevar:7,load:[3,18],loader:[14,18,19],loadercallback:18,local:[1,6,7,34],localhost:[8,37],localizado:37,localment:[8,37],locat:[17,30,34],location_t:36,locationhandl:1,log:1,logcnf:8,logfil:[8,15],logger:[1,15],login:1,loginact:1,logscnf:8,longer:[14,24],longitud:36,looking_for_db:10,lookingfor:1,low:1,luego:[7,10,37],mage:1,mail:10,main:[1,19],mainactiv:1,maintain:[1,3],mainten:3,make:[1,7,18,23],male:1,man:[6,36],manag:[3,16],mandar:37,manera:10,manual:2,map:[29,30],match:1,matcheslisten:1,mayor:7,meat:[6,36],media:1,mediant:[10,11],mediastor:1,medida:7,medir:7,mejor:7,mencionada:7,menu:[1,19],menuitem:19,mere:1,messag:[1,3,14,15,22,30,32],messagehandl:10,messageslisten:1,mi_token:6,mi_usernam:6,mismo:[8,37],miss:[17,19],mobil:2,model:34,modifi:1,modo:7,momento:5,mongoos:10,more:[2,3],most:[1,14,18,19,29,31,32],mostrado:8,mprofileimag:1,mprofilep:1,mrtazz:10,msearchingfemal:1,msearchingmal:1,msexfemal:1,msexmal:1,mtoken:1,muestra:7,multipl:1,musernam:1,music:[6,36],must:14,mutual:34,mylog:8,name:[6,14,29,31,36],names:5,navig:19,navigationview:19,necesario:[5,7,10,37],need:[0,1,16,22],net:3,network:[1,15,16],never:16,next:14,ninguna:8,nivel:7,node:34,nodej:37,nombr:37,nombre_del_contain:5,non:[1,13,24],nope:30,nor:3,normal:18,nosql:10,note:[14,18,19,29,31],noth:14,notifi:22,now:14,npm:34,nueva:8,object:[13,24],occur:30,ocupa:10,offlin:1,onactivityresult:1,once:26,ondestroi:[1,14],one:[15,16,26],onlin:1,onnavigationitemselectedlisten:19,onrestart:14,onresum:14,onsaveinstancest:[14,18,19,29,31],opcion:8,opencsv:1,opensourc:1,openssl:7,oper:[2,26],option:19,order:[0,16],orfjack:3,org:10,organ:1,origin:3,otherwis:[14,18,19,29,30,31],otra:7,our:1,outdoor:36,output:8,overrid:1,own:0,page:0,paquet:37,para:[5,7,8,10,12,37],param:[1,6],paramet:[13,14,15,16,17,18,19,20,21,22,24,25,26,27,29,30,31,32],parametro:8,parametros:6,parars:5,parent:[13,24],parseando:10,parser:[3,37],part:10,particular:7,pasaramo:8,pasarla:10,paselo:8,paso:5,pass:[6,30,37],password:30,payload:1,pdf:[4,39],pearl:36,perform:[1,3,14],permiss:17,permit:[8,10],photo:6,photo_64:6,photo_profil:36,pick_image:1,pictur:30,pkmmte:3,place:1,platform:3,pleas:1,plugin:3,pmd:1,poco:10,poder:[5,7,10,37],point:[1,18],por:[5,10,37],port:[8,37],possibl:[1,23,30],post:6,postgr:34,postgresql:37,precis:36,predeterminado:8,prefijo:10,present:1,previament:5,previou:[13,24],previous:[14,18,19,29,31],primary:36,primero:[7,8,37],principalment:10,priv:1,privat:1,probar:7,procesamiento:7,procesan:10,procesarlo:10,profil:[1,30,31],profilepictur:30,profundizar:10,profusernam:1,prompt:37,protect:[1,14,18,19,29,31],provid:1,proyecto:[8,37],psql:37,pued:[5,8,37],pueden:7,puerto:[5,8,37],pull:1,purpos:31,pushear:37,put:6,python:7,qualiti:1,que:[5,7,8,10,11,37],queri:[1,26,27],quit:7,radlew:1,ram:1,rate:1,readi:18,realiza:5,realizado:37,receiv:[3,14,22,30],receiverid:30,recent:[14,18,19,29,31],rechazo:12,reciben:10,recibir:37,recommend:1,refer:[18,19,36],references:36,refresh:28,reiniciar:37,reject:1,relat:[3,15],releas:2,relev:1,reliabl:3,remotemessag:22,remov:[16,18],repositori:2,repositorio:[5,7,37],repres:[14,31],request:1,requestcod:[1,31],requesthandl:10,requesttyp:26,res_:16,res_id:6,res_user_img:1,reset:18,resid:26,resourc:[1,16,26],resourcetyp:16,resourv:16,respect:3,respectiva:7,respetando:8,respondiera:37,respons:[1,3,14],respuesta:[6,37],rest:1,restclient:[7,10],result:[17,30],result_ok:1,resultcod:[1,31],retrolambda:1,rock:[6,36],rocksdb:[7,10],rol:34,rule:[1,30],run:[5,36],same:1,save:[13,18,24],sbin:37,scon:7,screen:[1,18],script:[1,7],scroll:3,sdk:0,section:[1,2],seguir:37,select:[1,19,24],selectionfrag:1,send:[1,30],sender:14,separ:3,ser:5,serial:36,server:[1,5,6,7,8],serverurlwrapp:1,servic:[17,22,23,26,34,38],servidor:1,session:[1,14,16,21,22,26,30],set:[22,25],setcheck:1,setear:37,setimageuri:1,settext:1,setuserimag:1,sex:[1,36],sexo:36,shape:1,share:8,should:[3,13,18,24,25,32],show:[1,32],showmessag:1,shown:1,shut:[14,18,19,29,31],siendo:37,sigint:37,sign:[0,30],siguient:[5,7,8,37],similar:5,simpl:[3,10],sinc:18,singleton:25,sino:8,sistema:10,site:2,sitio:37,siyam:3,slow:1,small:1,smooth:3,snackbar:[1,32],snippet:1,sobr:5,sobrepasar:8,social:34,soft:32,sole:3,solo:[8,37],some:[1,17],someon:24,son:8,sourc:[0,2,3,7],sourcecod:1,sourceforg:3,specif:[16,30],split:1,sport:36,spring:1,sql:37,stabl:2,standard:[8,30],start:[18,19,20,21,24,29,31],state:[13,18,24],still:3,stop:[14,20,21],storag:[1,38],store:[1,25],strict:1,string:[1,14,15,16,17,20,21,25,26,27,29,30,31,32],stringresourceshandl:1,studio:[1,18],submodul:7,success:30,sudo:37,suppli:[14,18,19,29,31],support:3,sure:16,swift:7,swiften_installdir:7,swipe:1,swipeabl:3,system:[1,2,30],tabla:5,table:36,tag:1,tal:10,tambien:[7,37],target:1,task:30,templat:18,tener:[7,8,10,37],tenerlo:10,tenni:36,termin:[7,37],termina:37,test:3,testpythonappapitest:7,text:36,textview:1,thank:1,thei:14,them:1,thi:[1,2,3,13,14,18,19,24,25,29,31],thread:26,three:1,through:14,thrown:14,thu:18,tien:10,time:[1,32],tinder:[1,2,3,8,15,19,34,36,37],tipo:8,toda:7,todo:8,token:1,toma:[8,10],tool:1,trabajando:5,traducir:10,transact:[3,18],transfer:1,transpar:1,travel:36,travi:1,two:1,type:[16,26,36],uba:1,una:[5,7,8,10,11,37],unavail:18,under:1,unique:36,unit:7,unittest:7,uno:7,updat:[7,30,31,37],update:30,upload:[1,30],uri:[1,10],url:3,usag:1,usan:37,usar:10,user:[1,2],user_id:1,user_info:1,user_name:1,userdata:30,userdetailsact:1,userhandl:1,userid:[1,14,37],usernam:[1,6,30],usernameview:1,userprofileact:1,users_interest:36,users_t:36,using:1,uso:10,usr:[7,37],usrid:37,util:1,utiliti:1,utiliza:[10,37],utilizada:[8,10],utilizan:10,utilizaron:[7,37],utilizo:[7,10],valid:30,validar:37,valor:[8,10],valu:[3,30,36,37],values:36,varchar:36,variabl:37,verb:6,veri:3,verificar:7,version:[2,3,4,7,37,39],vez:[7,8,37],via:1,view:[3,13,16,24,32],viewgroup:[13,24,32],visibl:[14,24,32],visualizar:7,wai:1,want:2,web:[3,10,37,38],when:[1,14,16,18,19,22,24,28,29,31],where:[1,24,32],which:[1,37],whose:18,without:1,woman:36,work:1,would:1,wrapper:1,write:15,writelog:1,you:[0,1,2,3,14,24,32],zlib1g:7},titles:["Project Compile","Project Development","Android Client","External libraries","User Manual","Docker build","API","Build AppServer sin Docker","Configuracion AppServer","Coverage","Implementacion AppServer","App Server","Known Bugs","ChatFragment","ChatSession","DrTinderLogger","ImageResourcesHandler","LocationHandler","LoginActivity","MainActivity","MatchesListener","MessagesListener","MessagesService","MessagesService.LocalBinder","SelectionFragment","ServerUrlWrapper","StringResourcesHandler","StringResourcesHandler.CallbackOperation","TinderFInstanceIdService","UserDetailsActivity","UserHandler","UserProfileActivity","Utility","ar.uba.fi.drtinder","Welcome to DrTinder&#8217;s project documentation!","Javadoc","Shared Server DB Model","Documentacion","Shared Server","User Manual - Shared Server"],titleterms:{"class":1,"conexi\u00f3n":10,"creaci\u00f3n":37,"instalaci\u00f3n":[5,37],"recepci\u00f3n":10,addrespons:14,almacenamiento:10,android:[2,3],apagado:5,api:[1,6],app:11,appserver:[7,8,10],architectur:1,bad:6,bug:12,build:[5,7],callbackoper:27,cambiar:6,chatfrag:13,chatsess:14,circular:3,clearcach:16,client:2,code:1,compil:0,con:10,concretado:6,configuracion:[8,37],coverag:[7,9],data:1,dato:[6,10],debg:15,deck:3,definicion:36,del:[5,37],delet:6,deleteprofil:30,depend:1,develop:1,displai:1,docker:[5,7],document:34,documentacion:37,drtinder:[33,34],drtinderlogg:15,english:4,env:37,environ:1,erro:15,error:1,error_token:30,execut:27,executequeri:26,external:3,extra_friend_id:14,extra_friend_name:14,extra_user_age:29,extra_user_bio:29,extra_user_id:29,extra_user_ints:29,extra_user_name:29,failed_token:30,field:[14,15,16,17,26,29,30,31],fillimageresourc:16,firebas:[3,10],foto:6,freecachedresourc:16,getlocationstr:17,getlogintoken:30,getserverurl:25,getservic:23,gettoken:30,getuseremail:30,getusernam:30,getusernamefrom:30,getviewgroup:32,glide:3,guava:3,guid:4,hidekeyboard:32,http:10,imageresourceshandl:16,imageview:3,implementacion:10,index:34,info:[6,15],interest_data_divider:26,interest_divider:26,isloggedin:30,isvalidemail:30,isvalidpassword:30,javadoc:35,known:12,librari:3,local:37,localbind:23,location_failed:17,locationhandl:17,log:8,login:6,loginact:18,logout:30,mainactiv:19,manual:[4,39],marcha:[5,37],match:6,matcheslisten:20,mensaj:10,messageslisten:21,messagesservic:[22,23],method:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],model:36,modificar:6,net_debg:15,net_erro:15,net_info:15,net_warn:15,node:37,npm:37,nuevo:6,onactivityresult:31,onbackpress:19,oncreat:[14,18,19,29,31],oncreateload:18,oncreateoptionsmenu:19,oncreateview:[13,24],ondestroi:19,onloaderreset:18,onloadfinish:18,onmessagereceiv:22,onnavigationitemselect:19,onoptionsitemselect:19,onstart:[14,19,24],onstop:[14,19,24],ontokenrefresh:28,opencsv:3,permission_missing:17,polici:1,postgr:37,prefetch:16,procesamiento:10,profile_action_create:31,profile_action_update:31,profile_extra_action:31,project:[0,1,34],puesta:[5,37],request:6,res_interest_img:16,res_user_img:16,retrolambda:3,rol:37,selectionfrag:24,sendlik:30,sendmessag:30,server:[10,11,36,38,39],serverurlwrapp:25,service_chat:26,service_matches:26,servidor:5,setserverurl:25,setsess:22,shape:3,share:[10,36,38,39],showmessag:32,signup:[6,30],signup_failed:30,signup_success:30,signup_userexist:30,sin:7,spanish:4,spring:3,startlisten:[20,21],stoplisten:[20,21],stringresourceshandl:[26,27],style:1,swipe:3,test:7,tinderfinstanceidservic:28,token:6,uba:33,updateinfo:30,uploadprofilepictur:30,url:6,user:[4,6,39],user_candidates:26,user_chat:26,user_extra_useremail:31,user_extra_username:31,user_info:26,user_matches:26,userdetailsact:29,userhandl:30,userprofileact:31,usuario:6,utiliti:32,ver:4,warn:15,welcom:34,writelog:15}})