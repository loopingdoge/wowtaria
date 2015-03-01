/* Variabile globale che contiene il tipo di annotazione per cui il
 * widget è stato chiamato  */
var lastAnnotationType = "";

// Variabile globale contenente l'oggetto JQuery della finestra modale
var modal;

// Variabile globale settata a true quando una richiesta a DBPedia è in corso
var isLoadingDbpedia = false;

// Array che conterrà i valori da visualizzare nell'instance widget
var instanceValues = new Array();

// Dizionario contenente le opzioni per il choice dictionary
// Espandibile in futuro aggiungendo nuove chiavi
var choiceDictionary = {};
  choiceDictionary['score'] = new Array();
  choiceDictionary['score'].push("very poor");
  choiceDictionary['score'].push("poor");
  choiceDictionary['score'].push("fair");
  choiceDictionary['score'].push("good");
  choiceDictionary['score'].push("excellent");


var widgetDct = {};
  widgetDct['hasAuthor']            = {};
  widgetDct['hasPublisher']         = {};
  widgetDct['denotesPerson']        = {};
  widgetDct['denotesPlace']         = {};
  widgetDct['denotesDisease']       = {};
  widgetDct['hasSubject']           = {};
  widgetDct['hasTitle']             = {};
  widgetDct['hasAbstract']          = {};
  widgetDct['hasComment']           = {};
  widgetDct['hasShortTitle']        = {};
  widgetDct['hasClarityScore']      = {};
  widgetDct['hasOriginalityScore']  = {};
  widgetDct['hasFormattingScore']   = {};
  widgetDct['hasPublicationYear']   = {};
  widgetDct['relatesTo']            = {};
  widgetDct['cites']                = {};
  widgetDct['login']                = {};
  widgetDct['unsaved']              = {};

  // Dizionario che associa il tipo di widget ad un dato tipo di annotazione
  widgetDct['hasAuthor']            ['widget'] = "instance";
  widgetDct['hasPublisher']         ['widget'] = "instance";
  widgetDct['denotesPerson']        ['widget'] = "instance";
  widgetDct['denotesPlace']         ['widget'] = "instance";
  widgetDct['denotesDisease']       ['widget'] = "instance";
  widgetDct['hasSubject']           ['widget'] = "instance";
  widgetDct['hasTitle']             ['widget'] = "longText";
  widgetDct['hasAbstract']          ['widget'] = "longText";
  widgetDct['hasComment']           ['widget'] = "longText";
  widgetDct['hasShortTitle']        ['widget'] = "shortText";
  widgetDct['hasClarityScore']      ['widget'] = "choice";
  widgetDct['hasOriginalityScore']  ['widget'] = "choice";
  widgetDct['hasFormattingScore']   ['widget'] = "choice";
  widgetDct['hasPublicationYear']   ['widget'] = "date";
  widgetDct['relatesTo']            ['widget'] = "dbpedia";
  widgetDct['cites']                ['widget'] = "citation";
  widgetDct['login']                ['widget'] = "login";
  widgetDct['unsaved']              ['widget'] = "unsaved";

  // Dizionario che associa il titolo ad un dato tipo di annotazione
  widgetDct['hasAuthor']            ['title']  = "Author";
  widgetDct['hasPublisher']         ['title']  = "Publisher";
  widgetDct['denotesPerson']        ['title']  = "Person";
  widgetDct['denotesPlace']         ['title']  = "Place";
  widgetDct['denotesDisease']       ['title']  = "Disease";
  widgetDct['hasSubject']           ['title']  = "Subject";
  widgetDct['hasTitle']             ['title']  = "Title";
  widgetDct['hasAbstract']          ['title']  = "Abstract";
  widgetDct['hasComment']           ['title']  = "Comment";
  widgetDct['hasShortTitle']        ['title']  = "Short Title";
  widgetDct['hasClarityScore']      ['title']  = "Clarity Score";
  widgetDct['hasOriginalityScore']  ['title']  = "Originality Score";
  widgetDct['hasFormattingScore']   ['title']  = "Formatting Score";
  widgetDct['hasPublicationYear']   ['title']  = "Date";
  widgetDct['relatesTo']            ['title']  = "Dbpedia";
  widgetDct['cites']                ['title']  = "Citation";

/* Dizionario in cui vengono associate le funzioni di getHTML,
 * inizializzazione, submit e modifica per ogni widget */
var widgetFn = {};
  widgetFn['instance']  = getInstanceWidget;
  widgetFn['longText']  = getLongTextWidget;
  widgetFn['shortText'] = getShortTextWidget;
  widgetFn['choice']    = getChoiceWidget;
  widgetFn['date']      = getDateWidget;
  widgetFn['dbpedia']   = getDbpediaWidget;
  widgetFn['citation']  = getCitationWidget;
  widgetFn['login']     = getLoginWidget;
  widgetFn['unsaved']   = getUnsavedWidget;
  widgetFn['instance']  ['init'] = initInstance;
  widgetFn['longText']  ['init'] = initText;
  widgetFn['shortText'] ['init'] = initText;
  widgetFn['choice']    ['init'] = initChoice;
  widgetFn['date']      ['init'] = initDate;
  widgetFn['dbpedia']   ['init'] = initDbpedia;
  widgetFn['citation']  ['init'] = initCitation;
  widgetFn['login']     ['init'] = initLogin;
  widgetFn['unsaved']   ['init'] = initUnsavedWidget;
  widgetFn['instance']  ['submit'] = submitInstance;
  widgetFn['longText']  ['submit'] = submitText;
  widgetFn['shortText'] ['submit'] = submitText;
  widgetFn['choice']    ['submit'] = submitChoice;
  widgetFn['date']      ['submit'] = submitDate;
  widgetFn['dbpedia']   ['submit'] = submitDbPedia;
  widgetFn['citation']  ['submit'] = submitCitation;
  widgetFn['login']     ['submit'] = submitLogin;
  widgetFn['unsaved']   ['submit'] = submitUnsaved;
  widgetFn['instance']  ['modify'] = modifyInstance;
  widgetFn['longText']  ['modify'] = modifyText;
  widgetFn['shortText'] ['modify'] = modifyText;
  widgetFn['choice']    ['modify'] = modifyChoice;
  widgetFn['date']      ['modify'] = modifyDate;
  widgetFn['dbpedia']   ['modify'] = modifyDbPedia;
  widgetFn['citation']  ['modify'] = modifyCitation;

/* Dizionario di utilità per ottenere informazioni utili per ogni widget,
 * come l'URI di istanza o il titolo da visualizzare */
var instanceType = {};
  instanceType['hasAuthor']       = {};
  instanceType['hasPublisher']    = {};
  instanceType['denotesPerson']   = {};
  instanceType['denotesPlace']    = {};
  instanceType['denotesDisease']  = {};
  instanceType['hasSubject']      = {};
  instanceType['cites']           = {};
  instanceType['cites']         ['addNewTitle'] = "Add new Document";
  instanceType['hasAuthor']     ['classType']   = "person";
  instanceType['hasPublisher']  ['classType']   = "publisher";
  instanceType['denotesPerson'] ['classType']   = "person";
  instanceType['denotesPlace']  ['classType']   = "place";
  instanceType['denotesDisease']['classType']   = "disease";
  instanceType['hasSubject']    ['classType']   = "subject";
  instanceType['hasAuthor']     ['addNewTitle'] = "Add new Author";
  instanceType['hasPublisher']  ['addNewTitle'] = "Add new Publisher";
  instanceType['denotesPerson'] ['addNewTitle'] = "Add new Person";
  instanceType['denotesPlace']  ['addNewTitle'] = "Add new Place";
  instanceType['denotesDisease']['addNewTitle'] = "Add new Disease";
  instanceType['hasSubject']    ['addNewTitle'] = "Add new Subject";
  instanceType['hasAuthor']     ['instanceURI'] = "http://vitali.web.cs.unibo.it/AnnOtaria/person/";
  instanceType['hasPublisher']  ['instanceURI'] = "http://vitali.web.cs.unibo.it/AnnOtaria/organization/";
  instanceType['denotesPerson'] ['instanceURI'] = "http://vitali.web.cs.unibo.it/AnnOtaria/person/";
  instanceType['denotesPlace']  ['instanceURI'] = "http://dbpedia.org/resource/";
  instanceType['denotesDisease']['instanceURI'] = "http://vitali.web.cs.unibo.it/AnnOtaria/disease/";
  instanceType['hasSubject']    ['instanceURI'] = "http://vitali.web.cs.unibo.it/AnnOtaria/subject/";

/**
 * Restituisce il tipo di widget
 * @param type: Tipo di annotazione
*/
function getAppropriateWidget(type){
  return widgetDct[type]['widget'];
}

/**
 * Restituisce il titolo del widget
 * @param type: Tipo di annotazione
*/
function getTitle(type){
  return widgetDct[type]['title'];
}

/**
 * Restituisce la funzione per ottenere l'HTML del widget
 * @param type: Tipo di widget
*/
function getWidgetFn(type){
  return widgetFn[type];
}

/**
 * Restituisce la funzione per inizializzare il widget
 * @param type: Tipo di widget
*/
function getInitFn(type){
  return widgetFn[type]['init'];
}

/**
 * Restituisce la funzione che gestische il submit
 * @param type: Tipo di widget
*/
function getSubmitFn(type){
  return widgetFn[type]['submit'];
}

/**
 * Restituisce la funzione che gestisce la modifica di un'annotazione
 * precedentemente salvata
 * @param type: Tipo di widget
*/
function getModifyFn(type){
  return widgetFn[type]['modify'];
}

function getAddNewTitle(type){
  return instanceType[type]['addNewTitle'];
}

function getClassType(type){
  return instanceType[type]['classType'];
}

function getInstanceURI(type){
  return instanceType[type]['instanceURI'];
}

/**
 * Entry point: la funzione crea il widget in modo appropriato e lo mostra
 * @param modalWindow: Oggetto JQuery della finestra modale
 * @param type: Tipo di annotazione
 * @param start: Indice di inizio dell'annotazione relativo ad id
 * @param end: Indice di fine dell'annotazione relativo ad id
 * @param id: ID dell'elemento su cui creare l'annotazione
 * @param subject: Filename del documento su cui creare l'annotazione
*/
function showWidget(modalWindow, type, start, end, id, subject){
  if(type == null) return;
  modal = modalWindow;
  var newDiv;
  // Vengono ottenute le funzioni appropriate per il widget
  var widgetType = getAppropriateWidget(type);
  var widgetGet = getWidgetFn(widgetType);
  var widgetInit = getInitFn(widgetType);
  var widgetSubmit = getSubmitFn(widgetType);
  // In newDiv viene memorizzato l'HTML da visualizzare
  newDiv = widgetGet();
  modal.find(".modal-body").html(newDiv);
  // Viene inizializzato il widget
  if(widgetType == "unsaved"){
    widgetInit(subject);
  } else {
    initGeneral(start, end, id, widgetSubmit, type);
    widgetInit(type, subject);
  }
  modal.on('hidden.bs.modal', hideWidget);
}

/**
 * Funzione richiamata quando il widget viene chiuso
 */
function hideWidget(event){
  instanceValues = new Array();
  modal.find(".modal-body").html("");
}

/**************************************************************************************
*                                Instance Widget                                      *
**************************************************************************************/
  dictionaryIT['filter']              = 'Filtra';
  dictionaryIT['selectavalue']        = 'Seleziona un valore';
  dictionaryIT['name']                = 'Nome';
  dictionaryIT['namesurname']         = 'Nome';
  dictionaryIT['add']                 = 'Aggiungi';
  dictionaryIT['details']             = 'Dettagli';
  dictionaryIT['search']              = 'Cerca';


  dictionaryIT['selecthasAuthor']     = 'Seleziona un Autore';
  dictionaryIT['selecthasPublisher']  = 'Seleziona un Editore';
  dictionaryIT['selectdenotesPerson'] = 'Seleziona una Persona';
  dictionaryIT['selectdenotesPlace']  = 'Seleziona un Luogo';
  dictionaryIT['selectdenotesDisease']= 'Seleziona una Malattia';
  dictionaryIT['selecthasSubject']    = 'Seleziona un Argomento';

  dictionaryIT['selectcites']         = 'Seleziona un Documento';
  dictionaryIT['insertdbpr']          = 'Inserisci l\'URI di una risorsa Wikipedia...';
  dictionaryIT['writehere']           = 'Scrivi quel che cerchi o che vuoi aggiungere...';



  dictionaryEN['selecthasAuthor']     = 'Select an Author';
  dictionaryEN['selecthasPublisher']  = 'Select a Publisher';
  dictionaryEN['selectdenotesPerson'] = 'Select a Person';
  dictionaryEN['selectdenotesPlace']  = 'Select a Place';
  dictionaryEN['selectdenotesDisease']= 'Select a Disease';
  dictionaryEN['selecthasSubject']    = 'Select a Subject';

  dictionaryEN['selectcites']         = 'Select a Document';
  dictionaryEN['insertdbpr']          = 'Insert a Wikipedia resource URI...';
  dictionaryEN['writehere']           = 'Write wat r u luking 4 or wat u want 2 add...';

  dictionaryEN['filter']              = 'Filter';
  dictionaryEN['selectavalue']        = 'Select a value';
  dictionaryEN['name']                = 'Name';
  dictionaryEN['namesurname']         = 'Name';
  dictionaryEN['add']                 = 'Add';
  dictionaryEN['details']             = 'Details';
  dictionaryEN['search']              = 'Search';

function getTranslation(key){
  return dictionary[$(document.body).attr('data-language')][key];
}

function getInstanceWidget(){
  var widget = '<div class="input-group instance-widget"> \
                  <div class="input-group-btn"> \
                    <a class="btn btn-default dropdown-toggle btn-select" data-toggle="dropdown" href="#" data-translation="" uri> \
                      <span class="caret"></span> \
                    </a> \
                    <ul class="dropdown-menu"> \
                    </ul> \
                  </div> \
                  <input type="text" class="form-control dropdown-filter new-instance-label" data-translation="writehere" placeholder="'+getTranslation('writehere')+'"> \
                  <div class="input-group-btn"> \
                     <button class="btn btn-default new-instance" type="button" data-translation="add">'+getTranslation('add')+'</button> \
                  </div> \
                </div> \
                <div id="instance-detail" style="display:none"> \
                </div>';
  return widget;
}

function initInstance(annotationType){
  var classType   = "";
  modal.find(".new-instance").click({"annotationType":annotationType}, newInstanceClick);
  modal.find(".instance-detail-btn").click(instanceDetailClick);
  modal.find(".dropdown-filter").keyup({"annotationType":annotationType}, filterKeyUp);
  classType   = getClassType(annotationType);
  // Chiamata AJAX per ottenere tutte le istanze della classe appropriata
  $.ajax({
    url: "annotations/class/" + classType,
    dataType: "json",
    success: function(data){
      $.each(data.results.bindings, function(key, value){
        var temp = new Object();
        temp['uri'] = value.instance.value;
        temp['label'] = toTitleCase(value.label.value);
        instanceValues.push(temp);
      });
      instanceValues = sortAndClean(instanceValues);
      createList(instanceValues);
      modal.find(".dropdown-menu li a").click({"annotationType":annotationType}, dropDownClick);
    }
  });
  modal.find('a.dropdown-toggle.btn-select').attr('data-translation', 'select'+annotationType);
  modal.find('a.dropdown-toggle.btn-select').html('<span class="caret"></span>'+getTranslation('select'+annotationType));
  modal.find('.modal-title').attr('data-translation', annotationType);
  modal.find('.modal-title').text(getTranslation(annotationType));
}

/**
 * Aggiunge le istanze di una classe ottenute via AJAX alla lista del dropdown
 * @param array: Array contenente uri e label delle istanze di una classe
 */
function createList(array){
  modal.find(".dropdown-menu").html("");
  for(var i=0; i<array.length; i++){
    modal.find(".dropdown-menu").append('<li><a href="#" uri="' + array[i]['uri'] + '">'+ array[i]['label'] +'</a></li>');
  }
}

/**
 * Ordina e pulisce l'array
 * @param array: Array contenente uri e label delle istanze di una classe
 * @return array: Array riordinato.
 */
function sortAndClean(array){
  // Ordina l'array
  array.sort(function(a, b){
    if(a.label < b.label){
      return -1;
    } else if(a.label > b.label){
      return 1;
    } else {
      return 0;
    }
  });
  var temp = new Array();
  // Elimina i doppioni
  for(var i=0; i<array.length-1; i++){
    if(array[i]['label'] == array[i+1]['label']) {continue}
    temp[temp.length]=array[i];
  }
  array = temp;
  return array;
}

/**
 * Cambia il valore selezionato.
 * @param text:           String - Nuovo testo
 * @param annotationType: String - Tipo di annotazione
 * @param uri:            String - URI dell'elemento
 */
function changeValue(text, annotationType, uri){
  if(text!=''){
    modal.find(".btn-select").html('<span class="caret"></span>'+text);
    modal.find(".btn-select").attr("uri", uri);
    $("#instance-detail").html(' \
      <h3 style="margin-top:25px" data-translation="details">'+getTranslation('details')+'</h3> \
      <div><strong>Label:</strong></br> ' + text + '</div> \
      <div><strong>URI:</strong></br> ' + uri + '</div> \
    ');
    $("#instance-detail").fadeIn();
  }else{
    modal.find(".btn-select").html('<span class="caret"></span>'+getTranslation('select'+annotationType));
    modal.find(".btn-select").attr('uri', '');
    $("#instance-detail").fadeOut();
  }
}

function instanceDetailClick(){
  $("#instance-detail").slideToggle();
}

function filterKeyUp(event){
  modal.find();
  var text = modal.find(".dropdown-filter").val();
  modal.find(".dropdown-menu li").filter(function(){
    return !($(this).text().toLowerCase().startsWith(text.toLowerCase()));
  }).css("display", "none");
  modal.find(".dropdown-menu li").filter(function(){
    return ($(this).text().toLowerCase().startsWith(text.toLowerCase()));
  }).css("display", "block");
  var first = modal.find(".dropdown-menu li").filter(function(){
    return ($(this).css("display") == "block");
  }).first();
  var label = first.text();
  if(text==''){
    label = '';
  }
  var uri = first.find("a").attr("uri");
  changeValue(label, event.data.annotationType, uri);
}

function dropDownClick(event){
  var selText = $(this).text();
  var uri = $(this).attr("uri");
  changeValue(selText, event.data.annotationType, uri);
}

function newInstanceClick(event){
  if(modal.find(".new-instance-label").val() == ""){
    showAlert("Insert a name!");
  } else {
    removeAlert();
    var uri = modal.find(".new-instance-label").val().replace(/ /g, "-").toLowerCase();
    var label = modal.find(".new-instance-label").val();
    if(event.data.annotationType == "denotesPlace"){
      uri = uri.replace(/-/g, "_");
      uri = uri.charAt(0).toUpperCase() + uri.slice(1);
    }
    uri = removeSymbolsURI(uri);
    uri = getInstanceURI(event.data.annotationType) + uri;
    instanceValues.push({"uri":uri, "label":label});
    sortAndClean(instanceValues);
    createList(instanceValues);
    modal.find(".dropdown-menu li a").click({"annotationType":event.data.annotationType}, dropDownClick);
    changeValue(label, event.data.annotationType, uri);
    showAlert("Value added and selected!", "success");
    addUnsavedInstance(getClassType(event.data.annotationType), uri, label);
  }
}

function instanceCheck(){
  var correct = false;
  var label = modal.find(".btn-select").text();
  var uri = modal.find(".btn-select").attr("uri");
  //if(label == "" || label == "Select a Value"){
  if(uri == ''){
    showAlert("Select a value!");
  } else {
    removeAlert();
    correct = true;
  }
  return correct;
}

function submitInstance(event){
  if(instanceCheck()){
    var label = modal.find(".btn-select").text();
    var object = modal.find(".btn-select").attr("uri");
    modal.modal("hide");
    if(event.data != null && event.data.start !== undefined && event.data.end !== undefined && event.data.id !== undefined){
      newUnsavedAnnotation(lastAnnotationType, object, label, event.data.start, event.data.end, event.data.id);
    } else {
      newUnsavedAnnotation(lastAnnotationType, object, label);
    }
  }
}

function modifyInstance(event){
  if(instanceCheck()){
    var label = modal.find(".btn-select").text();
    var object = modal.find(".btn-select").attr("uri");
    var modifiedAnnotation = event.data.annotation;
    modifiedAnnotation['label'] = label;
    modifiedAnnotation['object'] = object;
    setUnsavedAnnotation(modifiedAnnotation, event.data.index);
    afterModify(modifiedAnnotation['subject'], modifiedAnnotation);
  }
}

/**************************************************************************************
*                        Short-Text and Long-Text Widgets                             *
**************************************************************************************/

function getShortTextWidget(){
  var widget = '<div class="input-group"> \
                  <span class="input-group-addon"></span> \
                  <input type="text" class="form-control" placeholder="" maxLength="80"> \
                </div>';
  return widget;
}

function getLongTextWidget(){
  var widget = '<div class="input-group"> \
                  <span class="input-group-addon"></span> \
                  <input type="text" class="form-control" placeholder=""> \
                </div>';
  return widget;
}

function initText(annotationType){
  //var title = "";
  /*switch(annotationType){
    case "hasAbstract":
      title = "Abstract";
      break;
    case "hasTitle":
      title = "Title";
      break;
    case "hasComment":
      title = "Comment";
      break;
    case "hasShortTitle":
      title = "Short Title";
      break;
  }*/
  modal.find('.modal-title').attr('data-translation', annotationType);
  modal.find('.modal-title').text(getTranslation(annotationType));
  modal.find('.input-group-addon').attr('data-translation', annotationType);
  modal.find('.input-group-addon').text(getTranslation(annotationType));
}

function checkText(){
  var correct = false;
  var label = modal.find('input[type="text"]').val();
  if(label == "" || !label){
    var alert = "Insert a " + modal.find('.modal-title').text().toLowerCase();
    showAlert(alert);
  } else {
    removeAlert();
    correct = true;
  }
  return correct;
}

function submitText(event){
  if(checkText()){
    var label = modal.find('input[type="text"]').val();
    var object = "'" + label + "'^^xsd:string"; 
    modal.modal("hide");
    if(event.data != null && event.data.start !== undefined && event.data.end !== undefined && event.data.id !== undefined){
      newUnsavedAnnotation(lastAnnotationType, object, label, event.data.start, event.data.end, event.data.id);
    } else {
      newUnsavedAnnotation(lastAnnotationType, object, label);
    }
  }
}

function modifyText(event){
  if(checkText()){
    var text = modal.find('input[type="text"]').val();
    var object = "'" + text + "'^^xsd:string"; 
    var modifiedAnnotation = event.data.annotation;
    modifiedAnnotation['label'] = text;
    modifiedAnnotation['object'] = object;
    setUnsavedAnnotation(modifiedAnnotation, event.data.index);
    afterModify(modifiedAnnotation['subject'], modifiedAnnotation);
  }
}

/**************************************************************************************
*                                Choice Widget                                        *
**************************************************************************************/

function getChoiceWidget(){
  var widget = '<div class="btn-group">  \
                    <span class="input-group-addon"></span> \
                    <div id="choice-container" style="width: 100%; text-align: center"> \
                    </div> \
                </div>';
  return widget;
}

function initChoice(annotationType){
  //var title = "";
  var dictionary = '';
  if(annotationType == 'hasClarityScore' || annotationType == 'hasOriginalityScore' || annotationType == 'hasFormattingScore'){
    dictionary = 'score';
    for(var i=0; i<choiceDictionary['score'].length; i++){
      $("#choice-container").append(' \
        <label style="margin: 2px 5px"> \
          <input type="radio" name="choice" data-value="'+choiceDictionary[dictionary][i]+'" data-translation="'+choiceDictionary[dictionary][i]+'"> \
          '+getTranslation(choiceDictionary[dictionary][i])+' \
        </label> \
      ');
    }
  }
  /*
  switch(annotationType){
    case "hasClarityScore":
      title = "Clarity Score";
      dictionary = "score";
      break;
    case "hasOriginalityScore":
      title = "Originality Score";
      dictionary = "score";
      break;
    case "hasFormattingScore":
      title = "Formatting Score";
      dictionary = "score";
      break;
  }*/
  //$("#choice-dropdown li a").click(choiceDropdownClick);

  modal.find('.modal-title').attr('data-translation', annotationType);
  modal.find('.modal-title').text(getTranslation(annotationType));
  modal.find('.input-group-addon').attr('data-translation', annotationType);
  modal.find('.input-group-addon').text(getTranslation(annotationType));
}

/*function choiceDropdownClick(){
  var selText = $(this).text();
  modal.find(".btn-select").html(selText+' <span class="caret"></span>');
}*/

function checkChoice(){
  /*var correct = false;
  var label = modal.find(".btn-select").text();
  if(label == "" || label == "..."){
    showAlert("Select a value!");
  } else {
    removeAlert();
    correct = true;
  }
  return correct;*/
  var correct = false;
  if($('#choice-container>label>input:checked').length){
    removeAlert();
    correct = true;
  } else {
    showAlert("Select a value!");
  }
  return correct;
}

function submitChoice(event){
  if(checkChoice()){
    //var label = modal.find(".btn-select").text();
    var label = modal.find('#choice-container>label>input:checked').attr('data-value');
    var object = "'" + label + "'"; 
    modal.modal("hide");
    if(event.data != null && event.data.start !== undefined && event.data.end !== undefined && event.data.id !== undefined){
      newUnsavedAnnotation(lastAnnotationType, object, label, event.data.start, event.data.end, event.data.id);
    } else {
      newUnsavedAnnotation(lastAnnotationType, object, label);
    }
  }
}

function modifyChoice(event){
  if(checkChoice()){
    var label = modal.find('#choice-container>label>input:checked').attr('data-value');
    var object = "'" + label + "'"; 
    var modifiedAnnotation = event.data.annotation;
    modifiedAnnotation['label'] = label;
    modifiedAnnotation['object'] = object;
    setUnsavedAnnotation(modifiedAnnotation, event.data.index);
    afterModify(modifiedAnnotation['subject'], modifiedAnnotation);
  }
}

/**************************************************************************************
*                                 Date Widget                                         *
**************************************************************************************/

function getDateWidget(){
  widget = '\
          <div class="input-group"> \
            <span class="input-group-addon">Date</span> \
            <input type="text" placeholder="Select date..." class="datepicker" id="datepicker-modal"> \
          </div> \
  ';
  return widget;
}

function initDate(annotationType){
  if(annotationType == "hasPublicationYear"){
    $("#datepicker-modal").datepicker({
      format: " yyyy",
      viewMode: "years", 
      minViewMode: "years"
    });
  }
  modal.find('.modal-title').text("Date");
  modal.find('.input-group-addon').text("Date");
}

function checkDate(){
  var correct = false;
  var label = modal.find('input[type="text"]').val().trim();
  if(label == "" || !label){
    var alert = "Insert a date";
    showAlert(alert);
  } else {
    if(!(/^\d+$/.test(label)) || label.length > 4){
      var alert = "Insert a valid date";
      showAlert(alert);
    } else {
      removeAlert();
      correct = true;
    }
  }
  return correct;
}

function submitDate(event){
  if(checkDate()){
    var label = modal.find('input[type="text"]').val();
    var object = "'" + label + "'^^xsd:gYear"; 
    modal.modal("hide");
    if(event.data != null && event.data.start !== undefined && event.data.end !== undefined && event.data.id !== undefined){
      newUnsavedAnnotation(lastAnnotationType, object, label, event.data.start, event.data.end, event.data.id);
    } else {
      newUnsavedAnnotation(lastAnnotationType, object, label);
    }
  }
}

function modifyDate(event){
  if(checkDate()){
    var text = modal.find('input[type="text"]').val();
    var object = "'" + text + "'^^xsd:gYear"; 
    var modifiedAnnotation = event.data.annotation;
    modifiedAnnotation['label'] = text;
    modifiedAnnotation['object'] = object;
    setUnsavedAnnotation(modifiedAnnotation, event.data.index);
    afterModify(modifiedAnnotation['subject'], modifiedAnnotation);
  }
}

/**************************************************************************************
*                                DBPedia Widget                                       *
**************************************************************************************/

function getDbpediaWidget(){
  var widget = '<div class="input-group"> \
                  <input type="text" class="form-control" data-translation="insertdbpr" placeholder="'+getTranslation('insertdbpr')+'"> \
                  <span class="input-group-btn"> \
                    <button class="btn btn-default" type="button" data-translation="search">'+getTranslation('search')+'</button> \
                  </span> \
                </div> \
                <div id="dbPediaAbstract" style="display:none"> \
                  <h4>Abstract</h4> \
                </div>';
  return widget;
}

function initDbpedia(annotationType){
  var title = "";
  modal.find(".input-group-btn > button").click(dbPediaSearchClick);
  switch(annotationType){
    case "relatesTo":
      title = "Wikipedia";
      break;
  }
  /*modal.find('.modal-title').text(title);
  modal.find('.input-group-addon').text(title);*/
  modal.find('.modal-title').attr('data-translation', annotationType);
  modal.find('.modal-title').text(getTranslation(annotationType));
  modal.find('.input-group-addon').attr('data-translation', annotationType);
  modal.find('.input-group-addon').text(getTranslation(annotationType));
}

function dbPediaSearchClick(event){
  if(!isLoadingDbpedia){
    $("#dbPediaAbstract").slideUp(function(){
      $("#dbPediaAbstract").text("");
    });
    var resource = modal.find("input[type='text']").val();
    if(resource === undefined || resource == ""){
      showAlert("Insert a resource!");
    } else {
      removeAlert();
      var url = "annotations/dbpedia/" + resource.replace(/ /g, "_");
      $.ajax({
        url: url,
        dataType: "json",
        beforeSend: function(){
          isLoadingDbpedia = true;
          var loadingImg = $("#loading").html();
          modal.find(".modal-body > .input-group").after(loadingImg);
          modal.find(".modal-body .loadingDoge").fadeIn(function(){
            modal.find(".modal-body .loadingDoge").load();
          });
        },
        success: function(data){
          modal.find(".modal-body .loadingDoge").fadeOut(function(){
            modal.find(".modal-body .loadingDoge").stop();
            modal.find(".modal-body .loadingDoge").remove();
          });
          if(data.results.bindings[0] === undefined){
            showAlert("We're sorry, no resource found.","warning");
          } else {
            var abstract = data.results.bindings[0].abstract.value;
            $("#dbPediaAbstract").text(abstract);
            $("#dbPediaAbstract").prepend("<h4>Abstract</h4>");
            $("#dbPediaAbstract").slideDown();
          }
          isLoadingDbpedia = false;
        }
      });
    }
  }
}

function checkDbPedia(){
  var correct = false;
  var label = modal.find("input[type='text']").val();
  if(label == ""){
    showAlert("Insert a resource!");
  } else {
    removeAlert();
    if($("#dbPediaAbstract").text() != ""){
      removeAlert();
      correct = true;
    } else {
      showAlert("Insert a valid resource!");
    }
  }
  return correct;
}

function submitDbPedia(event){
  if(checkDbPedia()){
    var label = modal.find("input[type='text']").val();
    var object = '<http://dbpedia.org/resource/' + label + '>';
    modal.modal("hide");
    if(event.data != null && event.data.start !== undefined && event.data.end !== undefined && event.data.id !== undefined){
      newUnsavedAnnotation(lastAnnotationType, object, label, event.data.start, event.data.end, event.data.id);
    } else {
      newUnsavedAnnotation(lastAnnotationType, object, label);
    }
  }
}

function modifyDbPedia(event){
  if(checkDbPedia()){
    var label = modal.find("input[type='text']").val();
    var object = '<http://dbpedia.org/resource/' + label + '>';
    var modifiedAnnotation = event.data.annotation;
    modifiedAnnotation['label'] = label;
    modifiedAnnotation['object'] = object;
    setUnsavedAnnotation(modifiedAnnotation, event.data.index);
    afterModify(modifiedAnnotation['subject'], modifiedAnnotation);
  }
}

/**************************************************************************************
*                                 Citation Widget                                     *
**************************************************************************************/

function getCitationWidget(){
  var widget = '<div class="input-group instance-widget"> \
                  <div class="input-group-btn"> \
                    <a class="btn btn-default dropdown-toggle btn-select" data-toggle="dropdown" href="#" data-translation uri> \
                      <span class="caret"></span> \
                    </a> \
                    <ul class="dropdown-menu"> \
                    </ul> \
                  </div> \
                  <input type="text" class="form-control dropdown-filter new-instance-url" data-translation="writehere" placeholder="Insert the document URL if you want to add a new one"> \
                </div> \
                <div id="instance-label" class="input-group" style="display:none"> \
                  <input type="text" class="form-control new-instance-label" placeholder="Insert the document title here"> \
                  <div class="input-group-btn"> \
                     <button class="btn btn-default new-instance" type="button" data-translation="add">'+getTranslation('add')+'</button> \
                  </div> \
                </div> \
                <div id="instance-detail" style="display:none"> \
                </div>';
  return widget;
}

function initCitation(annotationType){
  //var title = "";
  modal.find(".new-instance").click({"annotationType": annotationType}, newCitationClick);
  modal.find(".dropdown-filter").keyup({"annotationType": annotationType}, filterKeyUp);
  /*switch(annotationType){
    case "cites":
      title = "Citazione";
      break;
  }*/
  $.ajax({
    url: "documents/",
    dataType: "json",
    success: function(data){
      $.each(data.docs, function(key, value){
        modal.find(".dropdown-menu").append('<li><a href="#" uri="http://annotaria.web.cs.unibo.it/documents/' + value.filename + '">'+ value.title +'</a></li>');
        instanceValues.push({'uri': 'http://annotaria.web.cs.unibo.it/documents/'+value.filename, 'label': value.title});
      });
      modal.find(".dropdown-menu li a").click({"annotationType":annotationType}, dropDownClick);
    }
  });
  modal.find('.new-instance-url').click(function(){
    $('#instance-label').fadeIn();
  });
  modal.find('a.dropdown-toggle.btn-select').attr('data-translation', 'select'+annotationType);
  modal.find('a.dropdown-toggle.btn-select').html('<span class="caret"></span>'+getTranslation('select'+annotationType));
  modal.find('.modal-title').attr('data-translation', annotationType);
  modal.find('.modal-title').text(getTranslation(annotationType));
}

function newCitationClick(event){
  if(modal.find(".new-instance-url").val() == "" || modal.find(".new-instance-label").val() == ""){
    showAlert("Insert a URL/Title!");
  } else {
    removeAlert();
    var uri = modal.find(".new-instance-url").val();
    uri = removeSymbolsURI(uri);
    var label = modal.find(".new-instance-label").val();
    instanceValues.push({"uri":uri, "label":label});
    sortAndClean(instanceValues);
    createList(instanceValues);
    modal.find(".dropdown-menu li a").click({"annotationType":event.data.annotationType}, dropDownClick);
    //modal.find(".dropdown-menu").append('<li><a href="#" uri="'+ uri +'">'+ uri +'</a></li>');
    //modal.find(".dropdown-menu li:last-child").click({"annotationType":'cites'}, dropDownClick);
    changeValue(label, 'cites', uri);
    //$(".new-instance-url").val("");
    showAlert("Value added and selected!", "success");
  }
}

function checkCitation(){
  var correct = false;
  var uri = modal.find(".btn-select").attr('uri');
  var label = modal.find(".btn-select").text();
  if(label == "" || label == "Select a Document"){
    showAlert("Select a value!");
  } else {
    removeAlert();
      if(uri==''){
      showAlert("Select a value!");
    } else {
      removeAlert();
      correct = true;
    }
  }
  return correct;
}

function submitCitation(event){
  if(checkCitation()){
    var label = modal.find(".btn-select").text();
    var object = modal.find(".btn-select").attr("uri");
    modal.modal("hide");
    if(event.data != null && event.data.start !== undefined && event.data.end !== undefined && event.data.id !== undefined){
      newUnsavedAnnotation(lastAnnotationType, object, label, event.data.start, event.data.end, event.data.id);
    } else {
      newUnsavedAnnotation(lastAnnotationType, object, label);
    }
  }
}

function modifyCitation(event){
  if(checkCitation()){
    var label = modal.find(".btn-select").text();
    var object = modal.find(".btn-select").attr("uri");
    var modifiedAnnotation = event.data.annotation;
    modifiedAnnotation['label'] = label;
    modifiedAnnotation['object'] = object;
    setUnsavedAnnotation(modifiedAnnotation, event.data.index);
    afterModify(modifiedAnnotation['subject'], modifiedAnnotation);
  }
}

/**************************************************************************************
*                                   Login Widget                                      *
**************************************************************************************/

function getLoginWidget(){
  var widget = '<div class="input-group"> \
                  <span class="input-group-addon" data-translation="namesurname">'+getTranslation('namesurname')+'</span> \
                  <input type="text" class="form-control" placeholder="Such Name" maxLength="80" value=""> \
                </div> \
                <div class="input-group"> \
                  <span class="input-group-addon">E-mail</span> \
                  <input type="text" class="form-control" placeholder="verymaily@so.wow" maxLength="80" value=""> \
                </div>';
  return widget;
}

function initLogin(){
  var title = "Login";
  modal.find('.modal-title').text(title);
}

function submitLogin(){
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var name = modal.find('input[type="text"]:first').val();
  var email = modal.find('input[type="text"]:last').val();
  if(name == undefined || name == ""){
    showAlert("Insert a name!");
  } else if(email == undefined || email == ""){
    showAlert("Insert an email!");
  } else if(!regex.test(email)){
    showAlert("Insert a valid email!");
  } else {
    removeAlert();
    setUsername(name);
    setUsermail(email);
    onAnnotator();
  }
}

/**************************************************************************************
*                            Unsaved Annotations Widget                               *
**************************************************************************************/

function getUnsavedWidget(){
  var widget = '';
  return widget;
}

function initUnsavedWidget(subject){
  var annotations = getUnsavedAnnotations(subject);

  if(annotations != undefined && annotations.length != 0){
    var table = buildAnnotationsTable(annotations);
    addTableToBody(table, annotations);
  } else {
    modal.find(".modal-body").html("<h4>No annotations in this document, u fgt!</h4>");
  }
  modal.find(".modal-submit").unbind('click');
  modal.find(".modal-submit").click({"subject":subject}, submitUnsaved);
}

/**
 * Restituisce la tabella in cui sono visualizzate le annotazioni
 * @param annotations: Array delle annotazioni (vedi il file annotaria.js)
 */
function buildAnnotationsTable(annotations){
  var table = "<table class='table table-hover table-bordered'>";
  table += "<tr><th>Time</th><th>Type</th><th>Label</th><th>Actions</th></tr>";
  // Aggiunge tutte le annotazioni contenute nell'array alla tabella
  for(var i=0; i<annotations.length; i++){
    var datetime = new Date(annotations[i]['annotatedAt']);
    table += "<tr>";
    table += "<td>" + datetimeToDate(datetime) + " - " + datetimeToTime(datetime) + "</td>";
    table += "<td>";
    if(fragao[annotations[i]["type"]]){
        table += '<div class="square '+annotations[i]["type"]+'" />';
    }  
    table += ""+ getTitle(annotations[i]['type']) + "</td>";
    table += "<td>" + annotations[i]['label'] + "</td>";
    table += "<td>" + '<button class="modify-annotation-btn" index="' + i + '"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></button> \
                       <button class="remove-annotation-btn" index="' + i + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'
           + "</td>";
    table += "</tr>";
  }
  table += "</table>";
  return table;
}

/**
 * Aggiunge al corpo del widget la tabella
 * @param table: HTML della tabella
 * @param annotations: Array delle annotazioni (vedi il file annotaria.js)
 */
function addTableToBody(table, annotations){
  modal.find(".modal-body").html(table);
  modal.find(".modal-body table tr > td:nth-child(4), .modal-body table tr > th:nth-child(4)").css("width", "38px");
  modal.find(".modal-body .modify-annotation-btn").click({"annotations": annotations}, modifyAnnotationClick);
  modal.find(".modal-body .remove-annotation-btn").click({"annotations": annotations}, removeAnnotationClick);
}

/**
 * Gestione del click sul bottone di modifica.
 */
function modifyAnnotationClick(event){
  var i = $(this).attr("index");
  // Ripristina il click listener originale agli altri bottoni
  modal.find(".modify-annotation-btn").unbind('click').click({"annotations": event.data.annotations}, modifyAnnotationClick);
  // Se viene ri-clickato il bottone di modifica, il pannello verrà chiuso.
  $(this).unbind('click').click({"annotations": event.data.annotations}, cancelModifyClick);
  var annotation = event.data.annotations[i];
  var wgtType = getAppropriateWidget(annotation["type"]);
  // Ottengo l'HTML del widget appropriato
  var modifyWidget = getWidgetFn(wgtType)();
  modal.find(".modify-annotation").remove();
  // Appendo l'HTML
  modal.find(".modal-body").append("<div class='modify-annotation' style='display:none'><hr><h4>Modify your Annotation</h4></div>");
  modal.find(".modify-annotation").append(modifyWidget);
  modal.find(".modify-annotation").append('<div class="modify-buttons"><button type="button" class="btn btn-default">Cancel</button> \
                                           <button type="button" class="btn btn-primary">Modify</button></div><hr>');
  modal.find(".modify-buttons > button:first").click({"annotations": event.data.annotations}, cancelModifyClick);
  // Ottengo la funzione per la gestione della modifica appropriata
  var modifyFn = getModifyFn(wgtType);
  modal.find(".modify-buttons > button:last").click({"annotation": annotation, "index":i}, modifyFn);
  getInitFn(wgtType)(annotation['type']);
  modal.find(".modify-annotation").slideDown();
}

/**
 * Funzione generica chiamata dopo la modifica/cancellazione di un'annotazione.
 * @param subject: Filename del documento.
 */
function afterModify(subject){
  // Se non ci sono più annotazioni su questo documento viene chiusa la tabella.
  if(isEmptyAnnotations(subject)){
    modal.modal("hide");
  } else {
    // Altrimenti viene ricostruita la tabella
    var annotations = getUnsavedAnnotations(subject);
    var table = buildAnnotationsTable(annotations);
    modal.find(".modal-body").slideUp(function(){
      modal.find(".modify-annotation").remove();
      modal.find(".modal-body table").remove();
      modal.find(".modal-body").html(table);
      addTableToBody(table, annotations);
      modal.find(".modal-body").slideDown();
    });
  }
}

/**
 * Gestione del click sul bottone di Cancel della modifica.
 */
function cancelModifyClick(event){
  // Ripristina al bottone di modifica l'apertura del pannello di modifica
  modal.find(".modal-body .modify-annotation-btn").unbind('click').click({"annotations": event.data.annotations}, modifyAnnotationClick);
  // Fa un'animazione di slideUp e rimuove il pannello di modifica
  modal.find(".modify-annotation").slideUp(function(){
    modal.find(".modify-annotation").remove();
  });
}

/**
 * Gestione del click sul bottone di rimozione di un'annotazione.
 */
function removeAnnotationClick(event){
  // Ottiene l'indice sul quale è stata chiamata la rimozione
  var i = $(this).attr("index");
  var annotation = event.data.annotations[i];
  removeUnsavedAnnotationFromDoc(annotation);
  // Rimuove effettivamente l'annotazione
  removeUnsavedAnnotation(annotation, i);
  afterModify(annotation['subject']);
}

/**
 * Gestione del click sul bottone di submit delle annotazioni.
 */
function submitUnsaved(event){
  modal.modal("hide"); // Chiude la finestra modale
  saveAnnotations(event.data.subject); // Manda al triple store le annotazioni.
}

/**************************************************************************************
*                                Utility Functions                                    *
**************************************************************************************/

/**
 * Funzione di inizializzazione dei widget generica (viene chiamate per tutti i widget)
 * @param start: Indice di inizio dell'annotazione rispetto ad id
 * @param end: Indice di fine dell'annotazione rispetto ad id
 * @param id: Id dell'elemento che contiene l'annotazione
 * @param submitFunction: Funzione di submit
 * @param annotationType: Il tipo dell'annotazione
 */
function initGeneral(start, end, id, submitFunction, annotationType){
  var submit = modal.find(".modal-submit");
  lastAnnotationType = annotationType;
  submit.unbind('click');
  // Se start ed end sono definiti vengono passati alla funzione di submit
  if((start !== undefined && end !== undefined && id !== undefined) && (start != end)){
    submit.click({"start":start, "end":end, "id":id}, submitFunction);
  } else {
    submit.click(submitFunction);
  }
  // Binda la pressione del tasto enter come un click submit
  modal.find("input").keypress(function(e) {
    if(e.which == 13) {
        submit.click();
    }
  });
}

/*
 * Mostra un'alert
 * @param text: Testo da mostrare
 * @param type: success || info || warning || danger
 */
function showAlert(text, type){
  if(type === undefined){
    type = "danger";
  }
  removeAlert(0);
  return modal.find(".modal-body").addAlert(text, type);
}

/*
 * Rimuove un alert
 * @param time: Durata dell'animazione 
 */
function removeAlert(time){
  if(time === undefined) time = 250;
  return modal.find(".modal-body").removeAlert(time);
}

$.fn.extend({
  /*
   * Mostra un'alert
   * @param text: Testo da mostrare
   * @param type: success || info || warning || danger
   */
  addAlert: function(text, type){
    var alert = '<div class="alert alert-'+ type +'" role="alert" style="display:none">'+ text +'</div>';
    $(this).append(alert);
    $(this).find(".alert").fadeIn();
    return this;
  },
  /*
   * Rimuove un alert
   * @param time: Durata dell'animazione 
   */
  removeAlert: function(time){
    $(this).find(".alert").fadeOut(time, function(){$(this).remove()});
    return this;
  }
});

/**
 * Rende la prima lettera maiuscola
 * @param str: stringa
 */
function toTitleCase(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}