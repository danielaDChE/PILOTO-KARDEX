(function(){
  const KEY='sedeges_kardex_prototipo_v1';
  const defaults={
    profile: JSON.parse(JSON.stringify(window.KARDEX_DATA.demo)),
    checklist: window.KARDEX_DATA.requirements.map((nombre,i)=>({numero:i+1,nombre,estado:'PENDIENTE',observacion:''})),
    preregistro:{fecha_notificacion:'',fecha_revision:'',estado:'BORRADOR',memo_numero:'',memo_fecha:'',rrhh_confirmado:false},
    hojaVida:{bachillerato:[],formacion:[],cursos:[],experiencia:[],referencias:[],fecha_presentacion:''},
    formularios:{
      posesion:{ciudad:'La Paz',fecha:'',hora:'',cargo:'',numero_item:''},
      induccion:{inmediato_superior:'',dependencia:'',numero_item:'',fecha:'',documentos:window.KARDEX_DATA.inductionDocs.map(x=>({nombre:x,entregado:false}))},
      doble:{percibe_recursos:false,tipo_ingreso:'',otro_tipo:'',entidad:'',fecha_inicio:'',importe:'',regimen_pension:'',entidad_aguinaldo:'',es_jubilado:false,tramite_cese:false,fecha_declaracion:''},
      incompatibilidad:{acepta:false,fecha_declaracion:''}
    },
    familiares:[],
    cajaSalud:[],
    vacaciones:[],
    certificados:[],
    accidentes:[],
    historial:[{fecha:new Date().toISOString().slice(0,10),tipo:'SISTEMA',detalle:'Prototipo iniciado con registro de demostración'}],
    ui:{activeView:'dashboard'}
  };
  function load(){
    try{const raw=localStorage.getItem(KEY); return raw?Object.assign({},defaults,JSON.parse(raw)):defaults;}catch(e){return defaults;}
  }
  let state=load();
  function save(){localStorage.setItem(KEY,JSON.stringify(state));}
  function reset(){localStorage.removeItem(KEY);state=JSON.parse(JSON.stringify(defaults));save();location.reload();}
  function get(){return state;}
  function set(path,value){
    const parts=path.split('.'); let obj=state;
    for(let i=0;i<parts.length-1;i++){ if(!obj[parts[i]])obj[parts[i]]={}; obj=obj[parts[i]]; }
    obj[parts[parts.length-1]]=value; save();
  }
  function push(path,value){
    const parts=path.split('.'); let obj=state;
    for(let i=0;i<parts.length;i++){ if(i===parts.length-1){if(!Array.isArray(obj[parts[i]]))obj[parts[i]]=[];obj[parts[i]].push(value);}else{if(!obj[parts[i]])obj[parts[i]]={};obj=obj[parts[i]];} }
    save();
  }
  window.KARDEX_STORE={get,set,push,save,reset};
})();
