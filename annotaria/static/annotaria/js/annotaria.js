/**************************************************************************************
*                       DIZIONARI                                                     *
**************************************************************************************/
var dictionary = {};
var dictionaryIT = {}; 
var dictionaryEN = {}; 
var dictionaryES = {}; 
var dictionaryDE = {}; 
var dictionaryFR = {}; 
  dictionary['gb'] = dictionaryEN;
  dictionary['it'] = dictionaryIT;
  dictionary['es'] = dictionaryES;
  dictionary['de'] = dictionaryDE;
  dictionary['fr'] = dictionaryFR;

  /* Header */
  dictionaryIT['about']               = 'Info';
  /* Modal */
  dictionaryIT['cancel']              = 'Cancella';
  dictionaryIT['submit']              = 'Conferma';
  dictionaryIT['open']                = 'Apri un nuovo documento...';
  dictionaryIT['addFragao']           = 'Nuova Annotazione su Frammento';
  dictionaryIT['addDocao']            = 'Nuova Annotazione sul Documento';
  dictionaryIT['suchsuchwow']         = 'Cerca scrivendo il nome di un documento o il suo titolo...';
  /* Choice */
  dictionaryIT['very poor']           = 'Molto Scarso';
  dictionaryIT['poor']                = 'Scarso';
  dictionaryIT['fair']                = 'Sufficiente';
  dictionaryIT['good']                = 'Buono';
  dictionaryIT['excellent']           = 'Eccellente';
  /* Istancetype */
  dictionaryIT['addcites']            = "Nuovo Documento";
  dictionaryIT['addhasAuthor']        = "Nuovo Autore";
  dictionaryIT['addhasPublisher']     = "Nuovo Editore";
  dictionaryIT['adddenotesPerson']    = "Nuova Persona";
  dictionaryIT['adddenotesPlace']     = "Nuovo Luogo";
  dictionaryIT['adddenotesDisease']   = "Nuova Malattia";
  dictionaryIT['addhasSubject']       = "Nuovo Argomento";
  /* DOCANNOTATIONS */
  dictionaryIT['hasAuthor']           = 'Autore';
  dictionaryIT['hasPublisher']        = 'Editore';
  dictionaryIT['hasPublicationYear']  = 'Anno di pubblicazione';
  dictionaryIT['hasTitle']            = 'Titolo';
  dictionaryIT['hasAbstract']         = 'Riassunto';
  dictionaryIT['hasShortTitle']       = 'Titolo Breve';
  dictionaryIT['hasComment']          = 'Commento personale';
  /* FRAGMENT */
  dictionaryIT['cites']               = 'Citazione';
  dictionaryIT['denotesDisease']      = 'Malattia';
  dictionaryIT['denotesPerson']       = 'Persona';
  dictionaryIT['denotesPlace']        = 'Luogo';
  dictionaryIT['hasClarityScore']     = 'Chiarezza';
  dictionaryIT['hasFormattingScore']  = 'Presentazione';
  dictionaryIT['hasOriginalityScore'] = 'Originalita';
  dictionaryIT['hasSubject']          = 'Argomento principale';
  dictionaryIT['relatesTo']           = 'Risorsa DBPedia';
  /* Annotarea */
  dictionaryIT['filters']             = 'Filtri';
  dictionaryIT['docao']               = 'Annotazioni sul Documento';
  dictionaryIT['fgmtao']              = 'Annotazioni sul Frammento';
  dictionaryIT['filterByType']        = 'Filtra per Tipo';
  dictionaryIT['filterByAuthor']      = 'Filtra per Autore';
  dictionaryIT['filterByDate']        = 'Filtra per Data';
  /* DOGE */
  dictionaryIT['hailthedoge']         = 'Venera il Doge';
  dictionaryIT['unchainthedoge']      = 'Scatena il Doge';

  /* Header */
  dictionaryEN['about']               = 'About';
  /* Modal */
  dictionaryEN['cancel']              = 'Cancel';
  dictionaryEN['submit']              = 'Submit';
  dictionaryEN['open']                = 'Open a new document...';
  dictionaryEN['addFragao']           = 'Add Fragment Annotation';
  dictionaryEN['addDocao']            = 'Add Document Annotation';
  dictionaryEN['suchsuchwow']         = 'Search typing a file name or his title...';
  /* Choice */
  dictionaryEN['very poor']           = 'Very Poor';
  dictionaryEN['poor']                = 'Poor';
  dictionaryEN['fair']                = 'Fair';
  dictionaryEN['good']                = 'Good';
  dictionaryEN['excellent']           = 'Excellent';

  dictionaryEN['addcites']            = "Add new Document";
  dictionaryEN['addhasAuthor']        = "Add new Author";
  dictionaryEN['addhasPublisher']     = "Add new Publisher";
  dictionaryEN['adddenotesPerson']    = "Add new Person";
  dictionaryEN['adddenotesPlace']     = "Add new Place";
  dictionaryEN['adddenotesDisease']   = "Add new Disease";
  dictionaryEN['addhasSubject']       = "Add new Subject";
  /* DOCANNOTATIONS */
  dictionaryEN['hasAuthor']           = 'Author';
  dictionaryEN['hasPublisher']        = 'Publisher';
  dictionaryEN['hasPublicationYear']  = 'Publication Year';
  dictionaryEN['hasTitle']            = 'Title';
  dictionaryEN['hasAbstract']         = 'Abstract';
  dictionaryEN['hasShortTitle']       = 'Short Title';
  dictionaryEN['hasComment']          = 'Comment';
  /* FRAGMENT */
  dictionaryEN['cites']               = 'Cite';
  dictionaryEN['denotesDisease']      = 'Disease';
  dictionaryEN['denotesPerson']       = 'Person';
  dictionaryEN['denotesPlace']        = 'Place';
  dictionaryEN['hasClarityScore']     = 'Clarity Score';
  dictionaryEN['hasFormattingScore']  = 'Presentation Score';
  dictionaryEN['hasOriginalityScore'] = 'Originality Score';
  dictionaryEN['hasSubject']          = 'Subject';
  dictionaryEN['relatesTo']           = 'DBPedia Resource';
  /* Annotarea */
  dictionaryEN['filters']             = 'Filtri';
  dictionaryEN['docao']               = 'Document Annotations';
  dictionaryEN['fgmtao']              = 'Fragment Annotations';
  dictionaryEN['filterByType']        = 'Filter by Type';
  dictionaryEN['filterByAuthor']      = 'Filter by Author';
  dictionaryEN['filterByDate']        = 'Filter by Date';
  /* DOGE */
  dictionaryEN['hailthedoge']         = 'Hail the Doge';
  dictionaryEN['unchainthedoge']      = 'Unchain the Doge';

  /* Header */
  dictionaryFR['about']               = 'Bijoux';
  /* Modal */
  dictionaryFR['cancel']              = 'Marseille';
  dictionaryFR['submit']              = 'Croupion';
  dictionaryFR['open']                = 'Quatre vingt dix huit-...';
  dictionaryFR['addFragao']           = 'Savoir-faire';
  dictionaryFR['addDocao']            = 'Notre Dame';
  dictionaryFR['suchsuchwow']         = 'Gargoille de la creme...';
  /* DOCANNOFRTIONS */
  dictionaryFR['hasAuthor']           = 'Baguettte';
  dictionaryFR['hasPublisher']        = 'Nouvelle';
  dictionaryFR['hasPublicationYear']  = 'Stromae';
  dictionaryFR['hasTitle']            = 'First MID';
  dictionaryFR['hasAbstract']         = 'Relevè';
  dictionaryFR['hasShortTitle']       = 'Avec La Crème';
  dictionaryFR['hasComment']          = 'Bohemè';
  /* FRAGMENt*/
  dictionaryFR['cites']               = 'Paris';
  dictionaryFR['denotesDisease']      = 'Malattia';
  dictionaryFR['denotesPerson']       = 'Tour Eiffel';
  dictionaryFR['denotesPlace']        = 'Toilette';
  dictionaryFR['hasClarityScore']     = 'Soubrette';
  dictionaryFR['hasFormattingScore']  = 'François';
  dictionaryFR['hasOriginalityScore'] = 'Argent de poche';
  dictionaryFR['hasSubject']          = 'Cousine';
  dictionaryFR['relatesTo']           = 'Jambon';
  /* AnnotarFR */
  dictionaryFR['filters']             = 'Croquenbouche';
  dictionaryFR['docao']               = 'Croissant';
  dictionaryFR['fgmtao']              = 'Decoltè';
  dictionaryFR['filterByType']        = 'Diòr';
  dictionaryFR['filterByAuthor']      = 'Gourmet';
  dictionaryFR['filterByDate']        = 'Lingerie';
  /* DOGE */
  dictionaryFR['hailthedoge']         = 'Allor on Doge';
  dictionaryFR['unchainthedoge']      = 'Baguette de Doge';

    /* Header */
  dictionaryDE['about']               = 'NEIN';
  dictionaryDE['cancel']              = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['submit']              = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['open']                = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['addFragao']           = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['addDocao']            = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['suchsuchwow']         = 'NEIN NEIN NEIN NEIN NEIN...';
  dictionaryDE['hasAuthor']           = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasPublisher']        = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasPublicationYear']  = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasTitle']            = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasAbstract']         = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasShortTitle']       = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasComment']          = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['cites']               = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['denotesDisease']      = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['denotesPerson']       = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['denotesPlace']        = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasClarityScore']     = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasFormattingScore']  = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasOriginalityScore'] = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hasSubject']          = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['relatesTo']           = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['filters']             = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['docao']               = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['fgmtao']              = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['filterByType']        = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['filterByAuthor']      = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['filterByDate']        = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['hailthedoge']         = 'NEIN NEIN NEIN NEIN NEIN';
  dictionaryDE['unchainthedoge']      = 'NEIN NEIN NEIN NEIN NEIN';

  dictionaryES['about']               = 'Infos';
  dictionaryES['cancel']              = 'Cancellas';
  dictionaryES['submit']              = 'Confermas';
  dictionaryES['open']                = 'Apris uns nuovos documentos...';
  dictionaryES['addFragao']           = 'Nuovas Annotasziones suls Frammentos';
  dictionaryES['addDocao']            = 'Nuovas Annotaziones suls Documentos';
  dictionaryES['suchsuchwow']         = 'Cercas scrivendos ils nomes dis uns documentos os ils suos titolos.s.s.s';
  dictionaryES['hasAuthor']           = 'Autores';
  dictionaryES['hasPublisher']        = 'Editores';
  dictionaryES['hasPublicationYear']  = 'Annos dis pubblicaziones';
  dictionaryES['hasTitle']            = 'Titolos';
  dictionaryES['hasAbstract']         = 'Riassuntos';
  dictionaryES['hasShortTitle']       = 'Titolos Breves';
  dictionaryES['hasComment']          = 'Commentos personales';
  dictionaryES['cites']               = 'Citaziones';
  dictionaryES['denotesDisease']      = 'Malattias';
  dictionaryES['denotesPerson']       = 'Personas';
  dictionaryES['denotesPlace']        = 'Luogos';
  dictionaryES['hasClarityScore']     = 'Chiarezzas';
  dictionaryES['hasFormattingScore']  = 'Presentaziones';
  dictionaryES['hasOriginalityScore'] = 'Originalitas';
  dictionaryES['hasSubject']          = 'Argomentos principales';
  dictionaryES['relatesTo']           = 'Risorsas DBPedias';
  dictionaryES['filters']             = 'Filtris';
  dictionaryES['docao']               = 'Annotazionis suls Documentos';
  dictionaryES['fgmtao']              = 'Annotazionis suls Frammentos';
  dictionaryES['filterByType']        = 'Filtras pers Tipos';
  dictionaryES['filterByAuthor']      = 'Filtras pers Autores';
  dictionaryES['filterByDate']        = 'Filtras pers Datas';
  dictionaryES['hailthedoge']         = 'Veneras ils Doges';
  dictionaryES['unchainthedoge']      = 'Scatenas ils Doges';

//TEMP TODO
  dictionaryIT['filter']              = 'Filtra';
  dictionaryIT['selectavalue']        = 'Seleziona un Valore';

  dictionaryEN['filter']              = 'Filter';
  dictionaryEN['selectavalue']        = 'Select a value';
/**************************************************************************************
*                       VARIABILI                                                     *
**************************************************************************************/
/* Posizione dell'href che se cliccato porta ad un ancora interna al documento. Si usa 
   per tornare su */
var goupto;
/* Contatore delle tab dei documenti aperti, escluso il + */
var tabCounter=4;
/* Scatena il potere del doge settandolo a true */
var dogepocalypse = false;
/* Interval dell'animazione del doge volante */
var flyingDogeInterval;
/*  */
var annotationId = 0;
/* Non brava Giovanna, Non Brava */
var enableErrorAlert = false;
/* Document annotations */
var docao = {};
  docao['hasAuthor'] = 'Autore';
  docao['hasPublisher'] = 'Editore';
  docao['hasPublicationYear'] = 'Anno di pubblicazione';
  docao['hasTitle'] = 'Titolo';
  docao['hasAbstract'] = 'Riassunto';
  docao['hasShortTitle'] = 'Titolo Breve';
  docao['hasComment'] = 'Commento personale';
/* Fragment annotations */
var fragao = {};
  fragao['cites'] = 'Citazione';
  fragao['denotesDisease'] = 'Malattia';
  fragao['denotesPerson'] = 'Persona';
  fragao['denotesPlace'] = 'Luogo';
  fragao['hasClarityScore'] = 'Chiarezza';
  fragao['hasComment'] = 'Commento personale';
  fragao['hasFormattingScore'] = 'Presentazione';
  fragao['hasOriginalityScore'] = 'Originalita';
  fragao['hasSubject'] = 'Argomento principale';
  fragao['relatesTo'] = 'Risorsa DBPedia';
/* Last start selection index */
var lastStart = 0;
/* Last start selection index */
var lastEnd = 0;
var lastId = "";

var username = "";
var usermail = "";

var unsavedAnnotations = new Object();
var unsavedInstances = new Object();

var animated = false;
var lastAnnotationDisplayed;

//La sirtaki!!
var audio; 
/**************************************************************************************
*                     GESTIONE DEGLI SCROLL                                           *
**************************************************************************************/
/* VARIABILI */

// height di titolo
var offset = $('#titolo').height();
// duranta generica per animazioni
var duration = 500;

/*  Estensione per rilevare l'evento scroll end */
$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

/* SCROLL END */
$(window).scrollEnd(function(){
        /* Se a fine scroll sono arrivato in alto "barra per andare in alto" */
        if ($(this).scrollTop() <= offset) {
            $('.up').slideUp(duration);
        }
}, 200);

/* SCROLL GENERICO */
$(window).scroll(function() {
  /* Nascono il menu del tasto destro */
  hideRightClickMenu();

  /* Mostro/Nascondo il titolo del documento nell'header */
  if ($(this).scrollTop() > offset) {
    if($('#header-titolo').text()==""){
      $('#header-titolo').text($('#titolo').text()); 
      $('#header-titolo').animate({opacity: 1});
    }
    $('header').css("border-bottom", "3px solid #428BCA");
    //ROD$('#filterli').css("margin-right", "40px");

    var x = $(this).scrollTop()+$(window).height();
    var y = $(document).height() -70;
    var z = x-y;
    if(x > y){
      $('#annotarea-body').css("max-height", ""+$(window).height()-160-z);
    } else{
      $('#annotarea-body').css("max-height", ""+$(window).height()-160);
    }

  } else {
    $('#annotarea-body').css("max-height", ""+$(window).height()-160-$('#titolo').height()+$(this).scrollTop());
    if($('#header-titolo').text()!=""){
      $('#header-titolo').stop(true, false);
      $('#header-titolo').css("opacity", "0");
      $('#header-titolo').text("");
    } 
    $('header').css("border-bottom-width", "0");
    //ROD$('#filterli').css("margin-right", "15px");
  }
});


/**************************************************************************************
*                     CLICK EVENTS                                                    *
**************************************************************************************/

/* Gestione tabs TODO: troppi*/
//$('#myTab>li>a').click(onOpenTabClick);
$('.closeTab').click(onCloseTabClick);
/* Apre un nuovo documento */
$('a.list-group-item').click(newTab);


/* Pulsante "Torna in cima" */
$('#header-titolo').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, duration);
  $('.up').fadeOut(); //DAVIDE
  goupto=null;
  return false;
});

/* Pulsante "torna all'ultima ancora" */
$('.up').click(function(){
  $('.up').fadeOut();
  $('html, body').animate({scrollTop: goupto.offset().top-75}, duration);
  goupto=null;
});


$('#filterli').click(function(){
  if(!$(this).hasClass('active')){
    openAnnotarea('open-ao');
  }else{
    var id = $('#myTab>li.active>a').attr('href').substring(1);
    if(id.substring(id.length-5,id.length)=="-meta"){
      annotId=id.substring(0,id.length-5);
    }
    openAnnotarea(id+'-ao');
  }
});

/* Handler per il click sulla tab per aprire un nuovo documento */
function onDocumentLinkClick(event){
  event.preventDefault();
  var id = $(this).attr("href");
  $('html, body').animate({scrollTop: 0}, duration);
  if($('#tab'+id).length){
    /* Se la tab è fra gli extra*/
    if($('#extrali>ul').has($('#tab'+id).length)){
      $('#myTab>li:last').appendTo('#extrali>ul');
    }
    openTab('#tab'+id);
  }else{
    var doc = $(this).attr("filename");
    loadDocument(doc, id);
  }
}


/**************************************************************************************
*                             CARICAMENTO DOCUMENTI                                   *
**************************************************************************************/

// Richiesta AJAX per il titolo del documento
function loadDocumentTitle(doc, tabId){
  return $.ajax({
    url: "documents/" + doc + "/title",
    dataType: "json",
    success: function(data){
      $("#"+tabId + "-title").html(data.title);
      setCurrentTitle();
      //adjustElemFontInto('#doc-title', '#titolo', 0, 40);
    },
    error: function(request, state){
      if(enableErrorAlert){
        alert("Non riesco a caricare il titolo del documento " + stato);
      }
    }
  });
}

/* Carica il body del documento passato per parametro */
function loadDocumentBody(doc, tabId){
  return $.ajax({
    url: "documents/" + doc + "/body",
    dataType: "json",

    success: function(data){

      $("#"+tabId).html(data.html);
      $("#"+tabId+" img").each(function(){
        $(this).attr("src", "http://annotaria.web.cs.unibo.it/documents/" + $(this).attr("src"));
        $(this).addClass('img-responsive');
      });
      rewriteAnchors("#"+tabId);
      $('table').wrap("<div class='pane'></div>");
      $('.pane').css("overflow-x","auto");
      // Nasconde i rowspan vuoti
      $("table td").filter(function(){
        return ($(this).attr("rowspan") == 1) && ($(this).attr("colspan") == 12) && ($(this).text().trim() == "")
      }).css("display","none");

    },
    error: function(request, state){
      if(enableErrorAlert){
        alert("Non riesco a caricare il corpo del documento " + state);
      }
    }
  });
}

function loadAbstract(doc, tabId){
  return $.ajax({
    url: "documents/" + doc + "/abstract",
    dataType: "json",
    success: function(data){
      $("#"+tabId+"-meta").html(data.html);
      rewriteAnchors("#"+tabId+"-meta");
    },
    error: function(request, state){
      if(enableErrorAlert){
        alert("Non riesco a caricare i meta dati del documento " + state);
      }
    }
  });
}

/* Carica le annotazioni sul documento intero */
function loadDocumentAnnotations(doc, tabId){
  return $.ajax({
    url: "documents/" + doc + "/annotations",
    dataType: "json",
    success: function(data){
      createAoArea(tabId);
      $.each(data.results.bindings, function(key, value){
        insertAoEntry(tabId, convertJsonValues(value));
      });
    },
    error: function(request, state){
      if(enableErrorAlert){
        alert("Non riesco a caricare le annotazioni del documento " + state);
      }
    }
  });
}

//Id univoco per identificare le varie fragment annotations
var aofgmtid = 0;
/**
  Chiamata AJAX che carica le annotazioni sui frammenti di testo di un documento
  @param doc:   string - Nome del documento da caricare
  @param tabId: string - Id della tab in cui è presente l'HTML del documento
*/
function loadFragmentsAnnotations(doc, tabId){  
  return $.ajax({
    url: "documents/" + doc + "/annotationsFragments",
    dataType: "json",
    success: function(data){
      var dictionary = new Object();
      $.each(data.results.bindings, function(key, value){
        // Id del frammento su cui fare l'annotazione
        var id = tabId + value.id.value;
        var startIndex = value.start.value;
        var endIndex = value.end.value;
        var range = document.createRange();
        var parent = document.getElementById(id);
        var values = new Object();
        values['type'] = value.type.value;        
        values['aofgmtid'] = aofgmtid; // Id della annotazione
        aofgmtid++;
        values['annotatedAt'] = value.annotatedAt.value;
        values['annotatedBy'] = value.annotatedBy.value;
        values['annotatedAt'] = value.annotatedAt.value;
        values['label'] = value.label.value;
        values['object'] = value.object.value;
        values['startIndex'] = startIndex;
        values['endIndex'] = endIndex;
        if(parent == null){
          id = tabId + "meta-" + value.id.value;
          parent = document.getElementById(id);
        }
        if(parent != null){
          if(dictionary[parent.id] == undefined){
            dictionary[parent.id] = new Array();
          }
          dictionary[parent.id].push(values);
        }
      });
      for(var key in dictionary){
        dictionary[key].sort(function(a, b){
          if(a.startIndex > b.startIndex){
            return -1;
          } else if(a.startIndex < b.startIndex){
            return 1;
          } else {
            if(a.endIndex < b.endIndex){
              return -1;
            } else if(a.endIndex > b.endIndex){
              return 1;
            } else {
              return 0;
            }
          }
        });
        for(var i=0; i<dictionary[key].length; i++){
          createAnnotationOnDocument(document.getElementById(key), dictionary[key][i].startIndex, dictionary[key][i].endIndex, dictionary[key][i]);
        }
      }
      // Rimuove le annotazioni che non hanno testo dentro
      $("span").filter(function(index){
        if($(this).attr("id") === undefined){
          return false;
        } else {
          if($(this).attr("id").substring(0,7) != "ao-fgmt"){
            return false;
          }
        }
        var text = $(this).text().replace(/(\r\n|\n|\r)/gm,"").trim();
        if(text == ""){
          return true;
        } else {
          return false;
        }
      }).css("display", "none");

      $(".ao-fgmt .ao-fgmt").unbind("click");
    },
    error: function(request, state){
      if(enableErrorAlert){
        alert("Non riesco a caricare le annotazioni sui frammenti del documento " + state);
      }
    }
  });
}

/**
 * Carica tutte le parti di un documento
 */
function loadDocument(doc, id){
  var tabId = "tab"+id;
  newTab(doc, tabId);
  loading();
  $.when( loadDocumentTitle(doc, tabId), loadDocumentBody(doc, tabId), loadAbstract(doc, tabId) ).done(function(){
    $.when( loadDocumentAnnotations(doc, tabId), loadFragmentsAnnotations(doc, tabId+"-") ).done(function(){
      openTab('#'+tabId);
      stopLoading();
      manageExtrali();
      setCurrentTitle();
    });
  });
}

/**************************************************************************************
*                               GESTIONE ANNOTAREA                                    *
**************************************************************************************/

/**
 * Handler click sui gruppi di annotazioni (Author ecc..)
 */
$(document).on('click', '.ao-group>.ao-panel-heading', function(e){
  /* Se il click è avvenuto sul pulsante add-annotation */
  if(!$(e.target).closest('span').hasClass('add-annotation') && !$(this).hasClass('empty')){
    if(!$(this).hasClass('panel-collapsed')) {
      $(this).parent().find('.ao-panel-body').slideUp();
      $(this).addClass('panel-collapsed');
      $(this).find('i.glyphicon-chevron-up').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    } else {
      $(this).parent().find('.ao-panel-body').slideDown();
      $(this).removeClass('panel-collapsed');
      $(this).find('i.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }
  }
});

/** 
 * Handler click sui pannelli dei filtri (Name, Type, Date) 
 */
$(document).on('click', '.panel-primary.ao-filter', function(){
  openAnnotarea('filter-ao-'+$(this).attr('data-filterby'));
});

/**
 *Crea un nuovo gruppo annotazioni (Author, Cites, ecc..) 
 */
function createAoHeading(aoAreaId, type){
  $(aoAreaId).append('\
      <div class="panel panel-primary ao-group" data-type="'+type+'"> \
        <div class="panel-heading ao-panel-heading ao-clickable panel-collapsed empty"> \
          <span class="pull-left annotator-only add-annotation" data-toggle="modal" data-target="#doc-ao-modal" data-type="'+type+'"><i class="glyphicon glyphicon-edit"></i></span> \
          <span class="panel-title ao-panel-title" data-translation="'+type+'">'+ dictionary[$(document.body).attr('data-language')][type] +'</span> \
          <span class="pull-right"><i class="glyphicon glyphicon-chevron-down"></i></span> \
        </div> \
        <div class="panel-body ao-panel-body"> \
        </div> \
      </div> ');
}

/**
 * Crea un pannello in annotarea per un documento 
 */
function createAoArea(tabId){
  $('#sidebar').append('\
    <div id="'+tabId+'-ao" class="doc-ao ao-active noselect" style="display:none"></div> \
  ');
  for( key in docao){
    createAoHeading('#'+tabId+'-ao', key);
  }
}


/**
 * Crea lo spazio per visualizzare una annotazione su documento
 */
function insertAoEntry(tabId, value){
  /* Creo la entry */
  var annotation = '<div class="ao-entry" detail="ao-det-'+ annotationId+'"> \
                      <div class="ao-details" \
                        data-type="'+value.type+'" \
                        data-annotator="'+value.annotatedBy+'" \
                        data-date="'+value.annotatedAt +'" >\
                      </div>\
                      <span class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></span> \
                      <p class="ao-label">'+value.label+'</p> \
                    </div>';
  /* Cerco il body nel quale metterla*/
  var entry = $('#'+tabId+'-ao>.panel-primary[data-type="'+value.type+'"]>.ao-panel-body');
  /* Se l'ao-header è vuoto, gli tolgo la classe empty */
  if($('#'+tabId+'-ao>.panel-primary[data-type="'+value.type+'"]>.ao-panel-heading').hasClass('empty')){
    $('#'+tabId+'-ao>.panel-primary[data-type="'+value.type+'"]>.ao-panel-heading').removeClass('empty');
  }
  /* Ce la metto */
  entry.append(annotation);
  /* Associo alla entry un evento click */
  entry.find('.ao-entry[detail="ao-det-'+ annotationId+'"]').click(onAnnotationClick);
  annotationId++;
  return "ao-det-" + (annotationId-1);
}

/* Toglie la visualizzazione di una annotazione su documento */
function removeAoEntry(tabId, detId){
  $("#"+tabId+"-ao").find(".ao-entry[detail='"+ detId +"']").remove();
}

/* Crea dinamicamente le pagine dei filtri */
function createFilterPage(){
  $('#sidebar').append('\
    <div id="open-ao" class="doc-ao ao-active noselect"></div> \
  ');

  /* Crea la finestra dei filtri per l'annotarea*/
  $('#open-ao').append(' \
      <div class="panel panel-primary ao-filter" data-filterby="type"> \
        <div class="panel-heading ao-panel-heading ao-clickable"> \
          <span class="panel-title ao-panel-title" data-translation="filterByType">'+ dictionary[$(document.body).attr('data-language')]['filterByType'] +'</span> \
          <span class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></span> \
        </div> \
      </div> \
      <div class="panel panel-primary ao-filter" data-filterby="author"> \
        <div class="panel-heading ao-panel-heading ao-clickable"> \
          <span class="panel-title ao-panel-title" data-translation="filterByAuthor">'+ dictionary[$(document.body).attr('data-language')]['filterByAuthor'] +'</span> \
          <span class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></span> \
        </div> \
      </div> \
      <div class="panel panel-primary ao-filter" data-filterby="date"> \
        <div class="panel-heading ao-panel-heading ao-clickable"> \
          <span class="panel-title ao-panel-title" data-translation="filterByDate">'+ dictionary[$(document.body).attr('data-language')]['filterByDate'] +'</span> \
          <span class="pull-right"><i class="glyphicon glyphicon-chevron-right"></i></span> \
        </div> \
      </div> \
  ');

  /* Crea la pagina dei filtri per tipo */ 
  $('#sidebar').append('\
      <div id="filter-ao-type" class="panel panel-primary det-ao sliding noselect" data-parent="open-ao"> \
        <div class="panel-heading ao-panel-heading"> \
          <span class="panel-title ao-panel-title" data-translation="filterByType">'+ dictionary[$(document.body).attr('data-language')]['filterByType'] +'</span> \
        </div> \
        <div class="panel-body ao-panel-body"> \
          <div class="row"> \
            <div id="filter-type-left" class="col-md-6"> \
            </div> \
            <div id="filter-type-right" class="col-md-6"> \
              </div> \
            </div> \
          </div> \
        </div> \
      </div> \
  ');
  /* La popola con i tipi di annotazioni sui frammenti */
  var i = 0;
  var target;
  for (key in fragao){
    if(i%2==0){
      target = $('#filter-type-left');
    }else{
      target = $('#filter-type-right');
    }
    target.append(' \
      <input type="checkbox" value="'+key+'" data-type="filter-type" class="filter"> \
        <div class="square '+key+'" /> \
        <label data-translation="'+key+'">'+ dictionary[$(document.body).attr('data-language')][key] +'</label> \
      </input></br>' );
    i++;
  }

  /* Crea la pagina dei filtri per autore */
  $('#sidebar').append('\
    <div id="filter-ao-author" class="panel panel-primary det-ao sliding noselect" data-parent="open-ao"> \
      <div class="panel-heading ao-panel-heading"> \
        <span class="panel-title ao-panel-title"  data-translation="filterByAuthor">'+ dictionary[$(document.body).attr('data-language')]['filterByAuthor'] +'</span> \
      </div> \
      <div class="panel-body ao-panel-body"> \
        <div class="input-group"> \
          <input id="suchsuchfilter" type="text" class="form-control" placeholder="Search"> \
          <div id="suchsuchfilter-label" class="input-group-addon" style="padding:0px 7px 0px 7px"> \
            <span class="glyphicon glyphicon-search " aria-hidden="true"></span> \
          </div> \
        </div> \
        <div class="row"> \
          <div id="filter-author-left" class="col-md-6"> \
          </div> \
          <div id="filter-author-right" class="col-md-6"> \
          </div> \
        </div> \
      </div> \
    </div> \
  ');

  /* Gestisce la barra di ricerca dei filtri per autore */
  $("#suchsuchfilter").keyup(filterKeyUp3);
  function filterKeyUp3(event){
    var text = $("#suchsuchfilter").val();
    $('input[data-type="filter-author"]').each(function(){      
      if(($(this).attr('value').toLowerCase().indexOf(text.toLowerCase())!=(-1) || $(this).parent().text().toLowerCase().indexOf(text.toLowerCase())!=(-1)) ) {
        $(this).parent().parent().show();
      }else{
        $(this).parent().parent().hide();
      }
    });
    balanceFilterAuthor();
  }
  /* Bilancia i filtri in due colonne */
  function balanceFilterAuthor(){
    var autori = [];
    $('.filterPopup:visible').each(function(){
      autori.push($(this));
    });
    autori.sort(function(a, b){
      if($(a).children('label').text().toLowerCase() < $(b).children('label').text().toLowerCase()) return -1;
      if($(a).children('label').text().toLowerCase() > $(b).children('label').text().toLowerCase()) return 1;
      return 0;      
    });
    var target;
    for(var a=0; a<autori.length; a++){
      if(a<(autori.length)/2){
        target = '#filter-author-left';
      }else{
        target = '#filter-author-right';
      }
      autori[a].detach().appendTo(target);
    }
  }

  /* Popola la pagina dei filtri per autore */
  i=0;
  $.ajax({
    url: "annotations/class/annotators",
    dataType: "json",
    success: function(data){
      var persone = [];
      var doge = 0;
      $.each(data.results.bindings, function(key, value){
        if(!value.name){
          value.name = {};
          if(doge<10){
            filler = '00';
          }else if(doge<100){
            filler = '0';
          }
          value.name['value'] = "DOGE "+filler+doge;
          doge++;
        }
        persone.push(value);
      });
      persone.sort(function(a, b){
        if(a.name.value.toLowerCase() < b.name.value.toLowerCase()) return -1;
        if(a.name.value.toLowerCase() > b.name.value.toLowerCase()) return 1;
        return 0;
      });
      for(var p=0; p<persone.length; p++){
        if(p<(persone.length+1)/2){
          target = $('#filter-author-left');
        }else{
          target = $('#filter-author-right');
        }
        target.append(' \
          <p class="filterPopup"> \
            <label style="word-wrap: break-word;overflow: hidden;display: inline;"> \
              <input type="checkbox" value="'+ persone[p].annotator.value +'" data-type="filter-author" class="filter"/> \
              '+ persone[p].name.value +' \
            </label> \
          </p> \
        ');
      }  
      /* Gestisce il popup sui filtri per autore */
      $('p.filterPopup').each(function(){
        $(this).mouseenter(function(){
          $('#filterPopup').text($(this).find('input').attr('value'));
          $('#filterPopup').show();
        }).mouseleave(function(){
          $('#filterPopup').hide();
        });
      });

      /* Sposta il popup sui filtri per autore */
      $(window).mousemove(function (e) {
        if($('#filterPopup:visible').length){ 
            var x = e.clientX,
              y = e.clientY;
            $('#filterPopup').css('top', (y+15) + 'px');
            $('#filterPopup').css('left', (x+10) + 'px');
          if(detectmob()){
            $('#filterPopup').css('left', (x-60) + 'px');  
          }
          
        }  
      });
      filterHandler();
    }
  });

  /* Crea la pagina del filtro per data */
  $('#sidebar').append('\
      <div id="filter-ao-date" class="panel panel-primary det-ao sliding noselect" data-parent="open-ao"> \
        <div class="panel-heading ao-panel-heading"> \
          <span class="panel-title ao-panel-title"  data-translation="filterByDate">'+ dictionary[$(document.body).attr('data-language')]['filterByDate'] +'</span> \
        </div> \
        <div class="panel-body ao-panel-body"> \
          <button id="clear-filter-date" class="disabled"> \
            <span class="glyphicon glyphicon-remove"></span> \
          </button> \
          <input readonly="readonly" type="text" placeholder="Select date..." class="datepicker"  id="datepicker">\
          <div class="datepicker dropdown-menu"></div> \
          <button id="apply-filter-date" class="disabled"> \
            <span class="glyphicon glyphicon-ok"></span> \
          </button> \
        </div> \
      </div> \
  ');

  /* Setta datepicker */
  $("#datepicker").datepicker({
    format: "yyyy-mm-dd",
    viewMode: "years", 
    minViewMode: "days"
  });
  
  /* Abilita il pulsante "apply" quando viene scelta una data */
  $('.datepicker.dropdown-menu').each(function(){
    $(this).click(function(){
      if($('#datepicker').val()!=''){
        $('#apply-filter-date').removeClass('disabled');
      }
    });
  });

  /* Pulsante clear */
  $('#clear-filter-date').click(function(){
    $('#datepicker').val("");
    $('#clear-filter-date').addClass('disabled');
    $('#apply-filter-date').addClass('disabled');
    $('.clearStyleDate').each(function(){
      $(this).removeClass('clearStyleDate');
    });
  });

  //Pulsante per applicare il filtri
  $('#apply-filter-date').click(function(){
    //Rimuove un eventuale filtro di data precedente
    $('.clearStyleDate').each(function(){
      $(this).removeClass('clearStyleDate');
    });
    var data=$('#datepicker').val();
    //prende tutti i fragment con data precedente alla scelta e li nasconde
    $('.ao-fgmt').filter(function(){
      return $(this).attr('ao-annotatedat').substring(0,10) < data;
    }).each(function(){
      $(this).addClass('clearStyleDate');
    });
    $('#apply-filter-date').addClass('disabled');
    $('#clear-filter-date').removeClass('disabled');
  });

$("selector").filter(function() {
    return  $(this).attr("my-attr") > 123;
});


  //-----------------------scroll manage
  var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}
  //------------------------------------
  $('#datepicker').datepicker().on("show", function(e){
      //disable scroll
      if (window.addEventListener) {
          window.addEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = wheel;
      document.onkeydown = keydown;
  });

  $('#datepicker').datepicker().on("hide", function(e){
        if (window.removeEventListener) {
          window.removeEventListener('DOMMouseScroll', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
    });  
}

var tl = new TimelineMax({paused:true});
var runningAnimation = false;
var detailIdNumber = 0;

/**
 * Mostra i dettagli di una annotazione nella annotarea o in una finestra modale se la finestra è piccola
 * @param annotations: 
 */
function showAnnotationDetails(annotations){
  var deferreds = [];
  var parent;
  var node;
  var id;
  // Guardo se si tratta di ao-det o ao-fgmt
  if(annotations[0]['aoFgmId'].substring(0,6) == "ao-det"){
    id = "ao-det-";
  } else {
    id = "ao-fgmt-";
  }
  id += detailIdNumber + "-detail";
  // Se lo schermo è piccolo uso una modale
  if(isBreakpoint('sm') || isBreakpoint('xs')){
    parent = $('#modal-annotation .modal-body');
  } else {
    parent = $("#sidebar");
  }
  // Creo un nodo invisibile e lo appendo all'annotarea/modale
  node = $("<div id='" + id + "' class='panel panel-primary det-ao ao-active sliding' data-parent="+ $('.ao-active').attr('id') +"></div>").appendTo(parent);
  loadlogo();
  for(var i=0; i<annotations.length; i++){
    var detailId  = annotations[i]['aoFgmId'];
    var person    = annotations[i]['annotatedBy'];
    var datetime  = new Date(annotations[i]['annotatedAt']);
    var type      = annotations[i]['type'];
    var testo     = annotations[i]['label'];
    var date      = datetimeToDate(datetime);
    var time      = datetimeToTime(datetime);
    // Per ogni annotazione faccio una chiamata AJAX per ottenere i dati sulla persona
    deferreds.push(
      $.ajax({
        url: "annotations/person/" + adjustURI(person),
        dataType: "json",
        success: appendAnnotationDetails(detailId, person, type, testo, date, time, node),
        error: function(request, state){
          if(enableErrorAlert){
            alert("Non riesco a caricare i dati dell'annotazione " + state);
          }
        }
    }));
  }
  // Quando tutte le chiamate AJAX finiscono
  $.when.apply(null, deferreds).done(function() {
   stoploadlogo();
    if(isBreakpoint('sm') || isBreakpoint('xs')){
      $("#"+id).removeClass("sliding");
      $('#modal-annotation').modal("show");
    } else {
      $("#annotarea-body").css("max-height", $("#annotarea-body").height());
      openAnnotarea(id);
    }
  });
  detailIdNumber++;
}

/**
 * Chiamata solo da showAnnotationDetails.
 * Appende a node i dettagli dell'annotazione.
 */
var appendAnnotationDetails = function(detailId, person, type, testo, date, time, node) {
  return function(data) {
    var combo = "";
    var annotationType = []; // Tutti i tipi di annotazione
    $.extend(annotationType, docao);
    $.extend(annotationType, fragao);
    if(data.results.bindings[0] != undefined){
      var name = data.results.bindings[0].name.value;
      var mail = data.results.bindings[0].mail.value;
      combo = name + " - " + mail;
    } else {
      combo = deAdjustURI(person);
    }
    var newDiv = ' \
                  <div id="'+ detailId + '"> \
                    <div class="panel-heading ao-panel-heading"> \
                      <span class="panel-title ao-panel-title">Annotation Details</span> \
                    </div> \
                    <div class="panel-body ao-panel-body"> \
                      <div class="detail-row"> \
                        <div class="detail-title">Author</div> \
                        <div class="detail-value">'+ combo +'</div> \
                      </div> \
                      <div class="detail-row"> \
                        <div class="detail-title">Time</div> \
                        <div class="detail-value">'+ date +' - '+ time +'</div> \
                      </div> \
                      <div class="detail-row"> \
                        <div class="detail-title">Type</div> \
                        <div class="detail-value">';
    if(fragao[type]){
                          newDiv += '<div class="square '+type+'" />     ';
    }  
    newDiv +=             annotationType[type]+'</div> \
                      </div> \
                      <div class="detail-row"> \
                        <div class="detail-title">Label</div> \
                        <div class="detail-value">'+ testo +'</div> \
                      </div> \
                    </div> \
                  </div> \
                  ';
    node.append(newDiv);
  };
};

function onAnnotationClick(){
  if($(this).find('.ao-details').attr('data-date') != lastAnnotationDisplayed){
    if(!animated || !runningAnimation){
      lastAnnotationDisplayed = $(this).find('.ao-details').attr('data-date');
      runningAnimation = true;
      var annotations = new Array();
      var obj = new Object();
      obj['aoFgmId'] = $(this).attr("detail");
      obj['annotatedBy']   = $(this).find('.ao-details').attr('data-annotator');
      obj['annotatedAt'] = new Date($(this).find('.ao-details').attr('data-date'));
      obj['type']     = $(this).find('.ao-details').attr('data-type');
      obj['label']    = $(this).find('.ao-label').text();
      annotations.push(obj);
      showAnnotationDetails(annotations);
    }
  }
}

/**
 * Cambia la pagina visualizzata nell'annotarea con animazione o senza
 */
function switchTab(firstId, secondId){
  var first = $("#"+firstId);
  var second = $("#"+secondId);
  if(animated){
    var animationTime = 0.5;
    tl = new TimelineMax({
      paused:true, 
      onComplete:function(){
        runningAnimation= false;
      },
      onReverseComplete: function(){
        runningAnimation = false;
        if(firstId!='open-ao'){
          $('#'+secondId).remove();
        }
        $("#annotarea-body").css("max-height", $("#"+firstId).height() + 100);
      }
    });
    tl.set($("#annotarea-body"), {"overflow-y":"hidden"});
    tl.set($("#"+firstId), {position:"relative"});
    tl.set($("#"+secondId),{"display":"none", position:"relative"}); //2area invisibile -real

    tl.set($("#"+secondId), {className:'-=ao-active'}); //2area posizionamento
    tl.set($("#"+secondId), {className:'+=ao-active'}); //2area posizionamento
    tl.set($("#"+firstId), {className:'+=ao-active'}); //2area posizionamento 
    tl.set($("#"+firstId), {className:'-=ao-active'}); //2area posizionamento
    tl.fromTo($("#"+firstId), animationTime, {display:"block"}, {x:-($("#"+firstId).width() + 50), ease:Power2.easeOut, display:"none"}); //1area movimento a sinistra e scomparsa
    tl.set($("#"+firstId),{x:0}); //1area riposizionamento
    tl.fromTo($("#"+secondId), animationTime, {x:+($("#"+firstId).width()), y:-($("#"+firstId).height()+5), ease:Power2.easeOut}, //-real
                                                      {x:0,y:-($("#"+firstId).height()+5), display:"block"},"-="+animationTime); //2area movimento a sinistra
    tl.set($("#"+secondId), {y:0}); //2area riposizionamento +"-real"

    tl.to($("#annotarea-body"), animationTime, {maxHeight:$("#"+secondId).height()+30}, "-="+animationTime); //ridimensionamento blocco +"-real"
    tl.set($("#"+secondId),{"overflow-y":"hidden"}); //2area overflow-y hidden -real
    tl.set($("#annotarea-body"), {"overflow-y":"scroll"}); // overflow scroll tutto il blocco
    if(firstId.substring(0,7) == "ao-fgmt" || firstId.substring(0,6) == "ao-det"){
      tl.eventCallback("onComplete", function(){
        tl.clear();
        runningAnimation= false;
        initBackAnimation();
        $("#"+firstId).remove();
        mustReturnToTab0 = true;
      });
    }
    tl.play();
  } else {
    first.fadeOut(250, function(){
      second.fadeIn(250);
    });
    first.removeClass("ao-active");
    second.addClass("ao-active");
    second.css("position", "relative");
  }
}

function initBackAnimation(){
  var animationTime = 0.5;
  var currentTab = $(".ao-active");
  var firstTab = $("#"+getCurrentTabId()+"-ao");
  tl = new TimelineMax({
    paused:true, 
    onComplete:function(){
      runningAnimation = false;
      currentTab.remove();
      $("#annotarea-body").css("max-height", firstTab.height() + 100);
      firstTab.addClass("ao-active");
    }
  });
  tl.set($("#annotarea-body"), {"overflow-y":"hidden"});

  tl.set(firstTab, {"display":"none"});
  tl.set(firstTab, {className: '+=ao-active'});
  tl.set(currentTab, {className: '-=ao-active'});
  tl.set(currentTab, {y:-(firstTab.height())});
  tl.to(currentTab, animationTime, {x:+(currentTab.width() +50), ease:Power2.easeOut, display:"none"});
  tl.set(currentTab, {x:0});

  tl.fromTo(firstTab, animationTime, {x:-(currentTab.width()), y:0, ease:Power2.easeOut},
                                 {x:0, display:"block", position:"relative"}, "-="+animationTime);
  tl.set(firstTab, {y:0});

  tl.to($("#annotarea-body"), animationTime, {maxHeight: firstTab.height()+30}, "-="+animationTime);

  tl.set($("#annotarea-body"), {"overflow-y":"scroll"}); // overflow scroll tutto il blocco
}

var mustReturnToTab0 = false;

/* Gestione del back dell'annotarea */
function annotareaBackClick(){
  if($(this).hasClass('active')){
    $("#backli").animate({opacity: 0});
    $('#backli').removeClass('active');
    if(animated){
      if(mustReturnToTab0){
        runningAnimation = true;
        tl.play();
        mustReturnToTab0 = false;
      } else {
        tl.reverse();
      }
    } else {
      var nextTab = "";
      if($(".ao-active").attr("id").substring(0,6) == "filter"){
        nextTab = "open-ao";
      } else {
        nextTab = getCurrentTabId()+"-ao";
      }
      switchTab($(".ao-active").attr("id"), nextTab);
    }
    lastAnnotationDisplayed = "";
  }
}

/**************************************************************************************
*                         GESTIONE ANNOTAZIONI FRAMMENTI                              *
**************************************************************************************/
/** int - Id incrementale per i frammenti di annotazione */
var annotationsFragmentsId = 0;

function getLastTextNodesIn(node){
  return node.childNodes[node.childNodes.length-1];
}

/** 
  Restituisce un array di nodi di tipo text all'interno di un nodo del DOM 
  @param node: Node object
  @returns textNodes: Array
*/
function getTextNodesIn(node){
  var textNodes = [];

  function getTextNodes(node){
    // Se è un un nodo di tipo text e non è vuoto lo aggiunge
    if(node != null && node.nodeType == 3){
      if(node.nodeValue.length!=0){
        textNodes.push(node);
      }
    // Altrimenti aggiunge tutti i nodi in esso
    } else {
      for(var i = 0; i < node.childNodes.length; i++){
        getTextNodes(node.childNodes[i]);
      }
    }
  }

  getTextNodes(node);
  return textNodes;
}

/**
  Restituisce un array di nodi che vanno dal primo in cui è contenuta l'annotazione
  fino ad arrivare all'ultimo.
  @param nodes:     Node object (nodeType=text)
  @param start:     int - Indice di inizio dell'annotazione
  @param end:       int - Indice di fine dell'annotazione
  @returns range:   Object[] -  range.node  = Node object
                                range.index = int - Se di tipo start indica l'offset di inizio
                                                    inizio dell'annotazione.
                                                    Negli altri casi l'offset di fine.
                                range.type  = string - "start" | "middle" | "end"
*/
function getRangeNodes(nodes, start, end){
  // Numero di caratteri letti scorrendo i nodi
  var charRead = 0;
  var range = new Array();
  var startFound = false;
  var endFound = false;
  // Scorro tutti i nodi o finché non trovo quello finale
  for(var i=0; (i < nodes.length) && (!endFound); i++){
    // Non ho ancora trovato il nodo iniziale
    if(!startFound){
      // Ho trovato il nodo di inizio
      if(start - charRead <= nodes[i].length){
        startFound = true;
        var node = new Object();
        node['node'] = nodes[i];
        node['index'] = start - charRead;
        node['type'] = "start";
        range.push(node);
      }
      // Ho appena trovato quello iniziale, guardo se contiene anche quello finale
      if(end <= charRead + nodes[i].length){
        endFound = true;
        var node = new Object();
        node['node'] = nodes[i];
        node['index'] = end - charRead;
        node['type'] = "end";
        range.push(node);
      }
    } else {
      // E' un nodo intermedio
      if(charRead + nodes[i].length < end){
        var node = new Object();
        node['node'] = nodes[i];
        node['index'] = nodes[i].length;
        node['type'] = "middle";
        range.push(node);
      } else {
      // E' il nodo finale
        endFound = true;
        var node = new Object();
        node['node'] = nodes[i];
        node['index'] = end - charRead;
        node['type'] = "end";
        range.push(node);
      }
    }
    // Incremento i caratteri letti ad ogni ciclo
    charRead += nodes[i].length;
  }
  return range;
}

function createAnnotationOnDocument(parent, startIndex, endIndex, value){
  var startId = "ao-fgmt-" + annotationsFragmentsId;
  // Ottengo i nodi di testo del nodo dove fare l'annotazione
  var nodes = getTextNodesIn(parent);
  // Ottengo un array di nodi che va dall'inizio alla fine dell'annotazione
  var rangeNodes = getRangeNodes(nodes, startIndex, endIndex);
  // Se ottengo solo 2 nodi, ed hanno lo stesso parent, posso aggiungere lo span
  if( (rangeNodes.length == 2) && (rangeNodes[0].node.parentNode == rangeNodes[1].node.parentNode) ){
    value['next'] = "end";
    createSpanAnnotation(rangeNodes[0], rangeNodes[1], value);
  } else {
    // Altrimenti creo uno span per ogni nodo
    for(var i=0; i<rangeNodes.length; i++){
      var tempNode = new Object();
      tempNode['node'] = rangeNodes[i].node;
      tempNode['type'] = rangeNodes[i].type;
      tempNode['index'] = rangeNodes[i].index;
      if(rangeNodes[i].type == "start"){
        tempNode.index = tempNode.node.length;
        value['next'] = "ao-fgmt-" + (annotationsFragmentsId + 1);
        createSpanAnnotation(rangeNodes[i], tempNode, value);
      } else if(rangeNodes[i].type == "middle"){
        tempNode.index = 0;
        value['next'] = "ao-fgmt-" + (annotationsFragmentsId + 1);
        createSpanAnnotation(tempNode, rangeNodes[i], value);
      } else if(rangeNodes[i].type == "end"){
        tempNode.index = 0;
        value['next'] = "end";
        createSpanAnnotation(tempNode, rangeNodes[i], value);
      }
    }
  }
  return startId;
}

/**
  Crea uno span con le informazioni dell'annotazione attorno al nodo di inizio e di fine
  @param start: Node object - Nodo di inizio
  @param end:   Node object - Nodo di fine
  @param value: Object - Oggetto contenente le informazioni sull'annotazione
*/
function createSpanAnnotation(start, end, value){
  // Creo un range
  var range = document.createRange();
  range.setStart(start.node, start.index);
  range.setEnd(end.node, end.index);
  // Creo lo span con le informazioni necessarie
  var span = document.createElement("span");
  var aoFgmId = "ao-fgmt-" + annotationsFragmentsId;
  span.setAttribute("id", aoFgmId);
  span.setAttribute("class", "ao-fgmt " + value.type);
  span.setAttribute("ao-fgmt-id", ""+value.aofgmtid);
  span.setAttribute("ao-annotatedAt", value.annotatedAt);
  span.setAttribute("ao-annotatedBy", value.annotatedBy);
  span.setAttribute("ao-type", value.type);
  span.setAttribute("ao-label", value.label);
  span.setAttribute("ao-object", "<"+value.object+">");
  span.setAttribute("next", value.next);
  // Lo inserisco attorno ai nodi desiderati
  range.surroundContents(span);
  annotationsFragmentsId++;
  // Aggiungo il click listener sull'annotazione
  $("#"+aoFgmId).click(onFragmentAnnontationClick);
}

/**
  Click listener su un'annotazione.
*/
function onFragmentAnnontationClick(){
  if($(this).attr("ao-annotatedat") != lastAnnotationDisplayed){
    if(!animated || !runningAnimation){
      lastAnnotationDisplayed = $(this).attr("ao-annotatedat");
      if(!$(this).hasClass('clearStyleType') || !$(this).hasClass('clearStyleAuthor') || !$(this).hasClass('clearStyleDate')){
        var annotations = new Array();
        var obj = new Object();
        var curNode = $(this);
        runningAnimation = true;

        obj['aoFgmId']      = $(this).attr("id");
        obj['annotatedAt']  = $(this).attr("ao-annotatedat");
        obj['annotatedBy']  = $(this).attr("ao-annotatedby");
        obj['type']         = $(this).attr("ao-type");
        obj['label']        = $(this).attr("ao-label");
        obj['object']       = $(this).attr("ao-object");
        obj['datetime']     = new Date(obj['annotatedAt']);
        annotations.push(obj);
        while(curNode.has("span").length != 0){
          obj = new Object();
          curNode = curNode.find("span").first();
          obj['aoFgmId']      = curNode.attr("id");
          obj['annotatedAt']  = curNode.attr("ao-annotatedat");
          obj['annotatedBy']  = curNode.attr("ao-annotatedby");
          obj['type']         = curNode.attr("ao-type");
          obj['label']        = curNode.attr("ao-label");
          obj['object']       = curNode.attr("ao-object");
          obj['datetime']     = new Date(obj['annotatedAt']);
          annotations.push(obj);
        }
        showAnnotationDetails(annotations);
      }
    }
  }
}

/**************************************************************************************
*                               EVENTI GENERICI                                       *
**************************************************************************************/

// WINDOW RESIZE 
$(window).resize(function(){
  if ($(this).scrollTop() > offset) {
    $('#annotarea-body').css("max-height", ""+$(window).height()-160);
  }else{   
    $('#annotarea-body').css("max-height", ""+$(window).height()-160-$('#titolo').height()+$(this).scrollTop());
  }
  $('#container').css('min-height', $(window).height());
  adjustElemFontInto('#doc-title','#titolo', 0, 40);
  var w = $(window).width() - 60;
  if(w>=400){
    w=400;
  }
  $('#extrali>ul>li>a').css('max-width', w);
  manageExtrali();
});

$('#annotarea').on('affix.bs.affix', function (){
  $('#annotarea-body').css("max-height", ""+$(window).height()-160);//parseFloat($('#annotarea').css("top"))-80);
});

/**************************************************************************************
*                      GESTIONE LINGUETTE DEI DOCUMENTI APERTI                        *
**************************************************************************************/


$('#myTab').click(manageExtrali);

/* "Visualizza" tutte le sezioni legate al documento con l'id selezionato */
function openTab(id){
  /* Nasconde tutti i div dei documenti aperti*/
  $('#tab-content-document .active').each(function(){
    $(this).removeClass('active in');
  });
  $('.tab-pane').css("display","none");
  /* Deseleziona la linguetta selezionata */
  $('li.active').removeClass('active');
  /* Se esiste l'id del doc selezionato */
  if($('li>a[href="'+id+'"]').length){
    /* Seleziono la sua linguetta */
    $('li>a[href="'+id+'"]').parent().show();
    $('li>a[href="'+id+'"]').parent().addClass('active');
    /* Visualizzo il corpo del doc */
    $(id).css("display", "block");
    $(id).addClass("active in");

    if(id=='#open'){
      $('#filterli').addClass('active');
      $('#add-annotation').addClass('disabled');
    }else{
      $('#add-annotation').removeClass('disabled');
    }
  } else{
    alert("Documento inesistente");
    return 0;
  }
  setCurrentTitle();
  
  /* Correggo l'id perchè possa funzionare con l'annotarea */
  var annotId = id;
  if(id.substring(id.length-5,id.length)=="-meta"){
    annotId=id.substring(0,id.length-5);
  }
  if($(".ao-active").attr('id') != annotId.substring(1)+'-ao'){
    openAnnotarea(annotId.substring(1)+'-ao');
  }
  manageExtrali();
}

/* Handler del click su una linguetta*/
function onOpenTabClick(event){
  /* Ricavo l'id del documento */
  var targetId = $(this).attr("href");
  if(targetId!='#extrali'){
    openTab(targetId);
  }
}

//Funzione per chiudere la scheda di un documento
function onCloseTabClick(){
  if(unsavedAnnotations[getCurrentFilename()] != undefined && unsavedAnnotations[getCurrentFilename()].length > 0){
    var willClose = confirm("There are some unsaved annotations, if you close this tab you will lose them!\nAre you sure you wanna close it?");
    if(!willClose){
      return;
    }
  }
  var tabContentId = $(this).parent().attr("href");
  /* If the tab is the selected one */
  if($(this).parent().parent().hasClass('active')){
    var i = $(this).parent().parent().index()+1; //Get the index of the following tab
    /* If the tab is the last one */
    if($(this).parent().parent().is(":last-child")){
      i-=2;
    }
    /* Take the id of the new tab */
    var newContentId = $('#myTab>li:eq('+i+')>a').attr("href");
    /* Shows the new tab */
    openTab(newContentId);
  }
  $(tabContentId).remove(); //remove respective tab content
  $(tabContentId+"-meta").remove();
  $(this).parent().parent().remove(); //remove li of tab
  $(tabContentId+'-ao').remove();
  unsavedAnnotations[getCurrentFilename()] = new Array();
  tabCounter--;
}

/* Handler del click del pulsante per visualizzare i meta-dati */
function onMetaTabClick(){
  var icona = $(this).find("span");
  var parent = $(this).parent();
  if(icona.hasClass("glyphicon-info-sign")){
    icona.removeClass("glyphicon-info-sign").addClass("glyphicon-book");
    parent.attr("href", parent.attr("href")+"-meta");
  }else if(icona.hasClass("glyphicon-book")){
    icona.removeClass("glyphicon-book").addClass("glyphicon-info-sign");
    var last = parent.attr("href").length-5; //meno "-meta" length
    parent.attr("href", parent.attr("href").substring(0, last)); //gli tolgo "-meta" in fondo
  }
}

/* Crea tutti gli elementi per un nuovo documento */
function newTab(title, tabId){
  tabCounter++;
  /* Crea la linguetta */
    $('#myTab li:nth-child(2)').after(' \
    <li> \
      <a href="#'+tabId+'" data-toggle="tab"> \
        <button class="metaTab nav-tab-button pull-left" type="button"> \
          <span class="glyphicon glyphicon-info-sign"></span> \
        </button> \
        <span class="pull-left extraTab"><i class="fa fa-reply"></i></span> \
        <p id="'+tabId+'-title"></p> \
        <button class="closeTab nav-tab-button pull-right" type="button" > \
          <span class="glyphicon glyphicon-remove"></span> \
        </button> \
        <button data-toggle="modal" data-target="#doc-ao-modal" data-type="unsaved" class="saveTab nav-tab-button pull-right annotator-only" type="button"> \
          <span class="glyphicon glyphicon-floppy-disk"></span> \
        </button> \
      </a> \
    </li>');/* Crea il div per il documento */
  $('.tab-content').append('<div class="tab-pane fade" id="' + tabId + '"></div>');
  /* Crea il div per i meta del documento */
  $('.tab-content').append('<div class="metaDiv tab-pane fade" id="' + tabId + '-meta"></div>');
  /* Seleziona la prima tab */
  var lastTab = $('#myTab li:eq(2) a');
  lastTab.parent().hide();
  //lastTab.click(onOpenTabClick);
  lastTab.find(".closeTab").click(onCloseTabClick);
  lastTab.find(".metaTab").click(onMetaTabClick);
  return tabId;
}

function setCurrentTitle(){
  $("#doc-title").html($("li.active>a>p").html());
  adjustElemFontInto('#doc-title', '#titolo', 0, 40);
}

/**************************************************************************************
*                          GESTIONE CLICK DESTRO                                      *
**************************************************************************************/

/* Restituisce un oggetto contenente l'indice di inizio e di fine della selezione
   indexes.start = startIndex;
   indexes.end = endIndex;
 */
function findMarginIndexes(nodes, startNode, startOffset, endNode, endOffset){
  var i = 0;
  var charRead = 0;
  var endFound = false;
  var indexes = new Object();
  for(i=0; (i < nodes.length) && (!endFound); i++){
    // Nodo iniziale
    if(nodes[i] == startNode){
      indexes.start = charRead + startOffset;
    }
    // Nodo finale
    if(nodes[i] == endNode){
      endFound == true;
      indexes.end = charRead + endOffset;
    }
    charRead += nodes[i].length;
  }
  // Se l'utente ha effettuato la selezione al contrario swappo gli indici
  if(indexes.start > indexes.end){
    var temp = indexes.end;
    indexes.end = indexes.start;
    indexes.start = temp;
  }
  return indexes;
}

// Restituisce la selezione fatta dall'utente
function getSelectionRange() {
    var selection;
    if (window.getSelection) {
        selection = window.getSelection();
    } else if (document.selection && document.selection.type != "Control") {
        selection = document.selection.createRange();
    }
    return selection;
}

/**
 * Chiude il tooltip del click destro
 */
function hideRightClickMenu(){
  $("#right-click").fadeOut(250);
}

/**
 * Apre il tooltip del click destro
 */
function showRightClickMenu(){
  $("#right-click").fadeIn(250);
}

// Left click listener
$(document).click(function(e) { 
    // Check for left button
    if (e.button == 0) {
      hideRightClickMenu();
    }
});

// Right click listener on document ,'.tab-content'
$("body").on('contextmenu', function(e){
  if($("body").hasClass("mode-annotator")){
    if($("#"+e.target.id).parents('#document').length > 0) {
      e.preventDefault();
      var posx = 0;
      var posy = 0;
      posx = e.clientX;
      posy = e.clientY;  
      $("#right-click").css("display", "none");
      wWindow = $(window).width();
      wdiv = $("#right-click").width();
      hWindow = $(window).height();
      hdiv = $("#right-click").height();
      // Check if the new div will exit from the right of the page
      if((wWindow - posx) <= wdiv){
        posx = posx - (wWindow - posx);
      }
      // Check if the new div will exit from the bottom of the page
      if((hWindow - posy) <= hdiv){
        posy = posy - hdiv;
      }
      $("#right-click").css({
        left: posx,
        top: posy
      });
      $("#right-click-list").html(annotationList());
      showRightClickMenu();
    } else {
      hideRightClickMenu();
    }
  }
});


/**************************************************************************************
*                     GESTIONE ANCORE NEI DOCUMENTI                                   *
**************************************************************************************/

// Modifica gli id degli elementi cliccabili di un documento e i relativi href
function rewriteAnchors(pageid){
  //Riscrivo tutti gli id con davanti il pageid
  $(pageid+' *[id]').each(function(){
    $(this).attr('id', pageid.substring(1)+'-'+$(this).attr('id'));
  });

  //Riscrivo tutti gli href agli id nella pagina, con davanti il pageid
  $(pageid+' a[href^=#B], '+pageid+' a[href^=#fig], '+pageid+' a[href^=#tab], '+pageid+' a[href^=#T], '+pageid+' a[href^=#I]').each(function(){
    var txt = $(this).attr("href").substring(1);
    $(this).attr("href", pageid+txt);
    var ancora = $(pageid+' a[id='+pageid.substring(1)+'-'+txt+']');
  //Funzione per correggere lo scroll
    $(this).click(function(){
      var headerHeight = 75;//$("#header").height() +5; // Get fixed header height   
      if (ancora.length){
        goupto = $(this);
        $('html,body').animate({
          scrollTop: ancora.offset().top - headerHeight
        }, 500);
        $('.up').fadeIn(); //DAVIDE
        return false;
      }else{
        alert("Ancora inesistente"); //TODO remove
      }
      });
    });
    //Riscrivo i link esterni in modo che aprano in una nuova pagina
    $(pageid+' a[href]:not([href^="#"])').each(function(){
      $(this).attr('target','_blank');
    });
}
/**************************************************************************************  
**  *******************************************************************************  **
**  **                            DOCUMENT READY                                 **  **  
**  *******************************************************************************  **   
**************************************************************************************/
$(document).ready(function (){
  $('#container').css('min-height', $(window).height());
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    }
  });
  /* Chiamata AJAX per ottenere la lista dei documenti */
  $.ajax({
    url : "documents/",
    dataType: "json",
    success : function (data) {
      //var column = "1";
      var counter = 0;
      $.each(data.docs, function(index, element){
        $("#documents-column1").append('\
          <a href="'+counter+'" filename="'+element.filename+'" class="doc-link list-group-item"> \
            <span class="pull-left"><i class="fa fa-file-text-o"></i></span> \
            '+ element.title +' \
          </a>');
        counter++;
      });
      $(".doc-link").click(onDocumentLinkClick);
    },
    error : function (richiesta,stato,errori) {
      alert("Non riesco ad ottenere la lista dei documenti: " + stato);
    }
  });

  $("#doge").hide();
  $("#right-click").popover();
  $("#right-click ul").css("position", "static");

  $('#backli').click(annotareaBackClick);
  $('#backli').mouseenter(function(){
    if($(this).hasClass('active')){
      $(this).parent().css('background-color', 'white');
    }
  }).mouseleave(function(){
    $(this).parent().css('background-color', '#F4F2F2');
  });

  // GESTIONE SOTTOLINEATURE
  $(document).on( "mouseenter", ".ao-fgmt:not(.clearStyleType):not(.clearStyleAuthor):not(.clearStyleDate)", function() {
    $('.ao-fgmt[ao-fgmt-id="'+$(this).attr('ao-fgmt-id')+'"]').each(function(){
      $(this).addClass('hovered');
    });
  }).on("mouseleave", ".ao-fgmt:not(.clearStyleType):not(.clearStyleAuthor):not(.clearStyleDate)", function() {
    $('.ao-fgmt[ao-fgmt-id="'+$(this).attr('ao-fgmt-id')+'"]').each(function(){
      $(this).removeClass('hovered');
    });
  });

  createFilterPage();
  audio = new Audio('/static/annotaria/audio/sirtaki.mp3');
  openTab('#open');
});
/**************************************************************************************
*                           FINE DOCUMENT READY                                       *
**************************************************************************************/


/**************************************************************************************
*                         FUNZIONI ACCESSORIE                                         *
**************************************************************************************/

function getCurrentTabId(){
  var id = $('li.active>a').attr('href').slice(1);
  return id;
}

function convertJsonValues(values){
  var temp = new Object();
  for(var key in values){
    temp[key] = values[key]['value'];
  }
  return temp;
}

function currentDocId(){
   var id = $('li.active>a').attr('href');
   if(id.substring(id.length-5, id.length)=="-meta"){
     id=id.substring(0,id.length-5);
   }
   id=id.substring(4);
   return id;
}

function getCurrentFilename(){
  var coso = $('li.active>a').attr('href').substring(4,6);
  if(coso.charAt(1) == "-"){
    coso = coso.charAt(0);
  }
  return $('#open a[href="'+ coso +'"]').attr('filename');
}

/**
* Adjust the font of elem1 to adapt/fill elem2
* min_fs/max_fs min/max font-size
*/
function adjustElemFontInto(el1, el2, min_fs, max_fs){
  if(min_fs==null){ //if min/max_fs are null set them with default values
    min_fs=0;
    max_fs=100;
  }
  if(max_fs==null){
    max_fs=100;
  }

  var offset = 1;             //increment/decrement unit
  var elem1 = $(el1);         
  var elem2 = $(el2);
  var el1_h = elem1.height();
  var el1_w = elem1.width();
  var el2_h = elem2.height();/*
  if(el2=='#titolo'){
    el2_h-=40;
  }*/
  var el2_w = elem2.width();

  var font = parseInt(elem1.css('font-size'));
  if(el1_h-el2_h < -4 && el1_w-el2_w <-4) {
    while(el1_h-el2_h < -4 && el1_w-el2_w <-4 && font>min_fs && font<max_fs){ //increment
      //alert(">font: "+font+" elem1: "+el1_h+" elem2: "+el2_h);
      font=font+offset;
      elem1.css('font-size', font);
      el1_h = elem1.height();
      el1_w = elem1.width();
    }
    font-=offset;
    elem1.css('font-size', font);
    //alert("FINE>font: "+font+" elem1: "+el1_h+" elem2: "+el2_h);

  }else{
    while((el1_h-el2_h>4 || el1_w-el2_w>4) && font>min_fs && font<max_fs){
      font-=offset;
      //alert("<font:"+font+"el1_h"+el1_h+"el2_h:"+el2_h);
      elem1.css('font-size', font);
      el1_h = elem1.height();
      el1_w = elem1.width();
    }
    //("FINE<font: "+font+" elem1: "+el1_h+" elem2: "+el2_h);
  }
}

/* Trasforma un Datetime in un Date GG-MM-YYYY */
function datetimeToDate(datetime){
  return datetime.getDate() + "/" + (datetime.getMonth()+1) + "/" + datetime.getFullYear();
}

/* Trasforma un Datetime in un Time HH:MM:SS */
function datetimeToTime(datetime){
  return datetime.toTimeString().substring(0, 8);
}

/**************************************************************************************
*                     DOGE DOGE DOGE DOGE DOGE DOGE DOGE                              *
**************************************************************************************/
function loading(){
  //$('html, body').animate({scrollTop: 0}, duration, function(){
    $(document.body).css('overflow','hidden');
    $('.darken').fadeIn(function(){
      $('#loading').fadeIn();
      $('#loading').load();
    });
  //});
}

function stopLoading(){
  $(document.body).css('overflow','auto');
  $('.darken').fadeOut();
  $('#loading').fadeOut(function(){
    $('#loading').stop();  
  });
  $('#loading').css("display","none");
}

tlog=new TimelineMax({
  paused:true
});
 tlog.to($("#logo"), 0.5, {rotation:360, ease:Linear.easeNone, repeat:-1});

$("#logo").rotate({ 
  bind: 
  { 
    mouseover : function() { 
      tlog.restart()
    },
    mouseout : function() {
      tlog.pause(tlog.endTime())
    }
  } 
});

tsuchsuch=new TimelineMax({
  paused:true
});
tsuchsuch.to($(".search-logo"), 0.1, {rotation:360, ease:Linear.easeNone, repeat:-1});

$(".search-logo").rotate({
  bind:
  {
    mouseover:function(){
      tsuchsuch.restart();
    },
    mouseout:function(){
      tsuchsuch.pause(tsuchsuch.endTime())

    }
  }
});


/* Toggles doge apocalypse */
function toggleDogepocalypse(){
  if(dogepocalypse){
    flyingDogeInterval = setInterval(function(){
    rand = Math.floor((Math.random() *5)) + 1;
      if(rand == 1){
        $("#lol").doge();
      }
    },50);
    audio.play();
    //$('#audio').prop("volume", 10);
    $("#dogefy").text('Cage the Doge');
    tlog.restart();
    tsuchsuch.restart();

  }else{
    audio.pause();
    $("#dogefy").text('Unchain the Doge');
    clearInterval(flyingDogeInterval);
     tlog.pause(tlog.endTime());
    tsuchsuch.pause(tsuchsuch.endTime());

  }
}

$("#dogefy").click(function(){
  dogepocalypse=!dogepocalypse;
  toggleDogepocalypse();
});

/**************************************************************************************
*                                SPAZIO PER LE PROVE                                  *
**************************************************************************************/
function onAnnotator(){
  var switchA = $('#switch-mode');
  var parent = $('#switch-mode').parent();
  $('body').removeClass('mode-reader');
  $('body').addClass('mode-annotator');
  switchA.find('i').removeClass('fa fa-book');
  switchA.find('i').addClass('glyphicon glyphicon-pencil');
  switchA.find('#switch-mode-text').text('Annotator');
  modal.modal("hide");
  parent.removeAttr("data-toggle");
  parent.removeAttr("data-target");
  parent.removeAttr("data-type");
  switchA.one("click", function(){
    resetUserData();
    $('body').removeClass('mode-annotator');
    $('body').addClass('mode-reader');
    switchA.find('i').removeClass('glyphicon glyphicon-pencil');
    switchA.find('i').addClass('fa fa-book');
    switchA.find('#switch-mode-text').text('Reader');
    $('#doc-ao-modal').modal("hide");
    window.setTimeout(function(){
      parent.attr("data-toggle", "modal");
      parent.attr("data-target", "#doc-ao-modal");
      parent.attr("data-type", "login");
    }, 100);
  });
}

/**
 *  Gestisce l'applicazione dei filtri ai documenti 
 */
function filterHandler(){
  $('.filter').click(function(){
    var filterby = $(this).attr('data-type');
    var value = $(this).attr('value');
    var ischecked = $(this).is(':checked');
    var selected = $('input[data-type="'+filterby+'"]:checked').length;
    if(selected == 0){
      if(filterby=='filter-type'){
        $('.ao-fgmt.clearStyleType').each(function(){
          $(this).removeClass('clearStyleType');
        });
      }else if(filterby=='filter-author'){
        $('.ao-fgmt.clearStyleAuthor').each(function(){
          $(this).removeClass('clearStyleAuthor');
        });
      }
    }else if(ischecked && selected==1){
      if(filterby=='filter-type'){
        $('.ao-fgmt:not(.'+value+')').each(function(){
          $(this).addClass('clearStyleType');
        });        
      } else if(filterby=='filter-author'){
        $('span:not([ao-annotatedby="'+value+'"])').each(function(){
          $(this).addClass('clearStyleAuthor');
        });
      }
    }else if(ischecked){
      if(filterby=='filter-type'){
        $('.ao-fgmt.'+value).each(function(){
          $(this).removeClass('clearStyleType');
        });
      }else if(filterby=='filter-author'){
        $('.ao-fgmt[ao-annotatedby="'+value+'"]').each(function(){
          $(this).removeClass('clearStyleAuthor');
        });
      }
    }else{
      if(filterby=='filter-type'){
        $('.ao-fgmt.'+value).each(function(){
          $(this).addClass('clearStyleType');
        });
      }else if(filterby=='filter-author'){
        $('.ao-fgmt[ao-annotatedby="'+value+'"]').each(function(){
          $(this).addClass('clearStyleAuthor');
        });
      }
    }
  });
}

/**
 * Chiamato quando viene mostrata la finesta modale dei widget
 * Event contiene il tipo di annotazione che è stato richiesto 
 */
$('#doc-ao-modal').on('show.bs.modal', function (event) {
  var trigger = $(event.relatedTarget); // Bottone che ha chiamato la modale
  var annotationType = trigger.data('type'); // Estrae le informazioni dall'attributo data-*
  var newDiv = "";
  var subject = getCurrentFilename();
  if(annotationType == "unsaved"){
    var docNumber = trigger.parent("a").attr("href").substring(4,6);
    if(docNumber.charAt(1) == "-"){
      docNumber = docNumber.charAt(0);
    }
    subject = $("#open").find("a[href='"+docNumber+"']").attr("filename");
  }
  if(trigger.hasClass('pull-left')){
    resetAnnotationParams();
  }
  // Inizializza il widget (widget.js)
  showWidget($('#doc-ao-modal'), annotationType, lastStart, lastEnd, lastId, subject);
});

$('#doc-ao-modal').on('hide.bs.modal', function (event) {
  //$(this).find(".modal-body").html("");
})

/**
 * Chiamato quando viene chiusa la finesta modale di un'annotazione
 */
$('#modal-annotation').on('hide.bs.modal', function(event){
  $(this).find(".modal-body").html("");
  runningAnimation = false;
});

/**
 * Click listener sul bottone per aggiungere un'annotazione
 */
$("#add-annotation").click(function(){
  if(!$(this).hasClass('disabled')){
    // Popola il drowpdown
    $(this).parent().find(".dropdown-menu").html(annotationList());
  }
});

/**
 * Setta lo username corrente dopo che ha fatto il login
 * @param name: Nome
 */
function setUsername(name){
  username = name;
}

/**
 * Setta la mail dell'utente corrente dopo che ha fatto il login
 * @param name: Mail
 */
function setUsermail(mail){
  usermail = mail;
}

/**
 * Chiamato quando viene aggiunta una annotazione (save della modale di widget.js).
 * Aggiunge una nuova annotazione non ancora salvata sul triple store.
 * @param type:   Tipo di annotazione
 * @param object: Oggetto dell'annotazione (URI)
 * @param label:  Label dell'annotazione
 * @param start:  Indice di inizio dell'annotazione || undefined
 * @param end:    Indice di fine dell'annotazione || undefined
 * @param value:  Id su cui è stata fatta l'annotazione
 */
function newUnsavedAnnotation(type, object, label, start, end, value){
  var annotatedBy = usermail;
  var date = new Date().toISOString();
  var annotatedAt = date.substring(0, date.length - 5);
  var subject = getCurrentFilename();
  annotatedBy = "<mailto:" + usermail + ">";
  annotation = {};
  // Pulisce i parametri e li aggiunge ad un oggetto
  annotation['annotatedBy'] = $.trim(annotatedBy).replace(/(\r\n|\n|\r)/gm,"");
  annotation['annotatedAt'] = $.trim(annotatedAt).replace(/(\r\n|\n|\r)/gm,"");
  annotation['subject'] = $.trim(subject).replace(/(\r\n|\n|\r)/gm,"");
  annotation['type'] = $.trim(type).replace(/(\r\n|\n|\r)/gm,"");
  annotation['object'] = $.trim(object).replace(/(\r\n|\n|\r)/gm,"");
  annotation['label'] = $.trim(label).replace(/(\r\n|\n|\r)/gm,"");
  if(start != undefined && end != undefined){
    annotation['isFragment'] = true;
    annotation['start'] = $.trim(start);
    annotation['end'] = $.trim(end);
    annotation['value'] = $.trim(value);
  }
  if(value !== undefined){
    if(value.startsWith('meta-')){
      value = value.substring(5);
    }
  }
  var id = $('li.active>a').attr('href').slice(1) + "-" + value;
  var element = document.getElementById(id);
  showSave();
  if(annotation['isFragment']){
    var startId = createAnnotationOnDocument(element, start, end, annotation);
    annotation['startId'] = startId;
  } else {
    var detId = insertAoEntry(getCurrentTabId().substring(0,5), annotation);
    if(detId.charAt(1) == "-"){
      detId = detId.charAt(0);
    }
    annotation['detId'] = detId;
  }
  if(unsavedAnnotations[subject] == undefined){
    unsavedAnnotations[subject] = new Array();
  }
  unsavedAnnotations[subject].push(annotation);
}

function logAnnotation(annotatedBy, annotatedAt, subject, type, object, label, start, end){
  console.log("AnnotatedBy: " + annotatedBy);
  console.log("AnnotatedAt: " + annotatedAt);
  console.log("Subject: " +  subject);
  console.log("Type: " + type);
  console.log("Object: " + object);
  console.log("Label: " + label);
  console.log("Start: " + start);
  console.log("End: " + end);
  console.log("---------------------------------------");
}

function adjustURI(person){
  if(person.startsWith("http://")){
    var n = person.lastIndexOf("/") + 1;
    person = person.substring(n, person.length);
    person = "aop:" + person;
  } else if(person.startsWith("mailto:")){
    person = "<" + person + ">";
  }
  return person;
}

function deAdjustURI(uri){
  if(uri.startsWith("<")){
    uri = uri.substring(1, uri.length-1);
  }
  if(uri.startsWith("mailto:")){
    uri = uri.substring("mailto".length+1);
  }
  return uri;
}

/**
 * Restituisce in HTML la lista dei tipi di annotazione che è possibile fare
 */
function annotationList(){
  var selection = getSelectionRange();
  var startNode = selection.anchorNode;
  var startOffset = selection.anchorOffset;
  var endNode = selection.focusNode;
  var endOffset = selection.focusOffset;
  var isSelection = false;
  if(startNode != null && $(startNode.parentNode).parents("#document").length){
    var commonParent = selection.getRangeAt(0).commonAncestorContainer;
    if(endNode.nodeType != 3){
      endNode = getLastTextNodesIn(startNode.parentNode);
      endOffset = endNode.length;
      commonParent = startNode.parentNode;
    }
    if(commonParent.nodeType == 3){
      commonParent = commonParent.parentNode;
    }
    while(commonParent.tagName == "SPAN"){
      commonParent = commonParent.parentNode;
    }
    var parentTextNodes = getTextNodesIn(commonParent);
    var indexes = findMarginIndexes(parentTextNodes, startNode, startOffset, endNode, endOffset);
    if(indexes.start != indexes.end){
      isSelection = true;
      lastId = commonParent.id.substring(commonParent.id.indexOf("-")+1);
      lastStart = indexes.start;
      lastEnd = indexes.end;
    } else {
      resetAnnotationParams();
    }
  } else {
    resetAnnotationParams();
  }
  var listHtml = "";
  if(isSelection){
    listHtml = ' \
      <li class="dropdown-header" data-translation="addFragao">'+dictionary[$(document.body).attr('data-language')]['addFragao']+'</li> \
      <li class="divider"></li>';
    for(key in fragao){
      listHtml+=' \
        <li data-toggle="modal" data-target="#doc-ao-modal" data-type="'+key+'"> \
          <a tabindex="-1" href="#" data-translation="'+key+'">'+dictionary[$(document.body).attr('data-language')][key]+'</a> \
        </li>';
    }

  } else {
    listHtml = ' \
      <li class="dropdown-header" data-translation="addDocao">'+dictionary[$(document.body).attr('data-language')]['addDocao']+'</li> \
      <li class="divider"></li>';
    for(key in docao){
      listHtml+=' \
        <li data-toggle="modal" data-target="#doc-ao-modal" data-type="'+key+'"> \
          <a tabindex="-1" href="#" data-translation="'+key+'">'+dictionary[$(document.body).attr('data-language')][key]+'</a> \
        </li>';
    }
  }
  return listHtml;
}

function isEmptyAnnotations(filename){
  if(unsavedAnnotations[filename].length > 0){
    return false;
  } else {
    return true;
  }
}

/**
 * Restituisce le annotazioni di un dato file.
 * @param filename: String - Filename
 * @return: Array - Annotazioni
 */
function getUnsavedAnnotations(filename){
  return unsavedAnnotations[filename];
}

/**
 * Sovrascrive un'annotazione (per la modifica)
 * @param annotation: Nuova annotazione
 * @param index:      Indice sul quale modificare
 */
function setUnsavedAnnotation(annotation, index){
  unsavedAnnotations[annotation['subject']][index] = annotation;
}

/**
 * Rimuove la visualizzazione di una annotazione sul documento di tipo Fragment.
 * Viene chiamata da removeUnsavedAnnotationFromDoc.
 * @param id: ID dell'annotazione.
 */
function removeSpanAnnotation(id){
  var element = document.getElementById(id);
  var next = $(element).attr("next");
  // Se non è l'ultimo della lista, va in ricorsione fino ad arrivarci
  if(next != "end"){
    removeSpanAnnotation(next);
  }
  // Elimina lo span
  $(element).replaceWith(element.childNodes);
}

/**
 * Rimuove la visualizzazione di una annotazione sul documento.
 * @param annotation: Annotazione da rimuovere.
 */
function removeUnsavedAnnotationFromDoc(annotation){
  if(annotation['isFragment']){
    removeSpanAnnotation(annotation['startId']);
  } else {
    removeAoEntry(getCurrentTabId(), annotation['detId']);
  }
}

/**
 * Rimuove un'annotazione data essa ed il suo indice (opzionale).
 * Se è presente l'indice la cancellazione è più veloce.
 * @param annotation: L'annotazione
 * @param index:      Opzionale - Indice dell'annotazione
 */
function removeUnsavedAnnotation(annotation, index){
  // Se è dato l'indice rimuove direttamente l'annotazione
  if(index !== undefined){
    unsavedAnnotations[annotation['subject']].splice(index, 1);
  } else {
    // Altrimenti scorre le annotazioni del documento dato
    for(var i=0; i<unsavedAnnotations[annotation['subject']].length; i++){
      var curAo = unsavedAnnotations[annotation['subject']][i];
      if(curAo['annotatedAt'] == annotation['annotatedAt']){
        // Quando la trova la rimuove
        unsavedAnnotations[annotation['subject']].splice(i, 1);
        break;
      }
    }
  }
  // Se non ci sono più annotazioni sul documento, nasconde l'icona
  if(unsavedAnnotations[annotation['subject']].length == 0){
    hideSave();
    clearUnsavedInstance(annotation['subject']);
  }
}

/**
 * Aggiunge una nuova istanza.
 * @param classType:  Tipo di classe dell'istanza
 * @param uri:        Uri dell'oggetto
 * @param label:      Lavel
 */
function addUnsavedInstance(classType, uri, label){
  if(unsavedInstances[getCurrentFilename()] === undefined){
    unsavedInstances[getCurrentFilename()] = new Array();
  }
  unsavedInstances[getCurrentFilename()].push({"type": classType, "uri":uri, "label":label});
}

/**
 * Rimuove dalle istanze non salvate quella indicata dall'uri.
 * @param uri: URI da rimuovere
 */
function removeUnsavedInstance(uri){
  // Scorre tutte le istanze
  for(var i=0; i<unsavedInstances[getCurrentFilename()].length; i++){
    if(unsavedInstances[getCurrentFilename()][i]['uri'] == uri){
      unsavedInstances[getCurrentFilename()].splice(i, 1);
      break;
    }
  }
}

/**
 * Rimuove tutte le istanze di un dato filename.
 * @param filename: Filename su cui togliere le istanze
 */
function clearUnsavedInstance(filename){
  unsavedInstances[filename] = new Array();
}

/**
 * Salva le annotazioni: le invia al triple store.
 * @param filename: file sul quale salvare le annotazioni.
 */
function saveAnnotations(filename){
  var annotations = unsavedAnnotations[filename];
  var annotatedBy = "mailto:"+usermail;
  /* Controlla se sul triple store è già presente l'utente che ha fatto l'annotazione.
     Se non è presente lo aggiunge. */
  $.ajax({
    url: "annotations/person/" + adjustURI(annotatedBy),
    type: "GET",
    success: function(data){
      if(data.results.bindings[0] == undefined){
        $.ajax({
          url: "annotations/person/",
          type: "POST",
          data: {"uri": annotatedBy, "label": username, "mail": deAdjustURI(annotatedBy)},
          success: function(data){
          },
          error: function(request, state){
            newAlert("Error creating a new person instance: " + username, "danger");
          }
        });
      }
    }
  });
  /* Salva sul triple store tutte le annotazioni fatte */
  for(var i=0; i<annotations.length; i++){
    var annotation = annotations[i];
    annotation["object"] = adjustURI(annotation["object"]);
    $.ajax({
      url: "insert/",
      type: "POST",
      data: annotation,
      success: function(data){
        newAlert("New Annotation: " + annotation["label"] + " added!", "success");
        removeUnsavedAnnotation(annotation);
      },
      error: function(request, state){
        newAlert("Error a new annotation: " + annotation["label"], "danger");
      }
    });
  }
  /* Salva sul triple store tutte le nuove istanze create */
  if(unsavedInstances[filename] !== undefined){
    for(var i=0; i<unsavedInstances[filename].length; i++){
      var instance = unsavedInstances[filename][i];
      instance['uri'] = adjustURI(instance['uri']);
      instance['uri'] = removeSymbolsURI(instance['uri']);
      $.ajax({
        url: "annotations/" + instance['type'] + "/",
        type: "POST",
        data: instance,
        success: function(data){
          newAlert("New instance added: " + instance['label'], "success");
          removeUnsavedInstance(instance['uri']);
        },
        error: function(request, state){
          newAlert("Error creating a new instance: " + instance['label'], "danger");
        }
      });
    }
  }
  hideSave(); // Nasconde l'icona del save
}


/**
 * Rimuove eventuali simboli dall'URI
 * @param uri: URI da correggere
 */
function removeSymbolsURI(uri){
  return uri.replace(/[\.,|\"$%+`#@&\/\[\]{}<>;=?]/g, "");
}

/**
 * Ripristina ai valori di default i parametri di sessione dell'utente
 */
function resetUserData(){
  unsavedAnnotations = new Object();
  unsavedInstances = new Object();
  usermail = "";
  username = "";
  hideSave();
}

/**
 * Ripristina ai valori di default i parametri di id, inizio e fine 
 * dell'annotazione
 */
function resetAnnotationParams(){
  lastId = "";
  lastStart = 0;
  lastEnd = 0;
}

/**
 * Mostra l'icona che indica la presenza di annotazioni non salvate
 */
function showSave(){
  $('li.active').addClass("unsaved");
}

/**
 * Nasconde l'icona che indica la presenza di annotazioni non salvate
 */
function hideSave(){
  $('li.active').removeClass("unsaved");
}

var csrftoken = getCookie("csrftoken");
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

/**
 * Gestore del pulsante di accumulazione delle tab
 */
function manageExtrali(){
  var wrapperWidth = $('#myTab').width();
  var contentWidth = $('#openli').width();
  var nMyTab = $('#myTab>li').length-2;
  var nTot = nMyTab + $('#extrali>ul>li').length;
  var i = $('#myTab>li').index($('#myTab>li.active'));
  if(i!=1){
    contentWidth+=50;
  }
  contentWidth += nTot*100;
  /* Se ci stanno tutti */
  if(contentWidth <= wrapperWidth){
    $('#extrali>ul>li').each(function(){
      //alert('all'+$(this).html()); -----OK
      $(this).appendTo('#myTab');
    });
  /* Se non ci stanno tutti */
  }else{
    contentWidth = $('#openli').width() + 46;
    if(i!=1){
      contentWidth+=50;
    }
    var nAvail = parseInt((wrapperWidth-contentWidth)/100);
    /* Se ce ne sono troppi */
    if(nMyTab > nAvail){
      $('#myTab>li:nth-last-child(-n+'+(nMyTab-nAvail)+')').each(function(){
        if($(this).attr('id')!='extrali'){
          if($(this).hasClass('active')){
            //Get the index of the following tab
            var i = $(this).index()-1;
            /* Take the id of the new tab */
            $('#myTab>li:eq('+i+')').appendTo($('#extrali>ul'));
          }else{
            $(this).appendTo($('#extrali>ul'));
          }
        }
      });
    /* Se ce ne sono troppo pochi */
    }else if(nMyTab < nAvail){
      $('#extrali>ul>li:nth-child(-n+'+(nAvail-nMyTab)+')').each(function(){
        $(this).appendTo($('#myTab'));
      });
    }
  }
  /* Se il pulsante non contiene nulla*/
  if($('#extrali>ul>li').length==0){
    $('#extrali').removeClass('visible');
  }else{
    $('#extrali').addClass('visible');
    var extraliHeight = wrapperWidth - ($('#openli').width() + (($('#myTab>li').length-2)*99));
    if(i!=1){
      extraliHeight -= 50;
    }
    $('#extrali').css('max-width',extraliHeight);
    $('#extrali').width(extraliHeight);
    $('#extrali>a').css('max-width',extraliHeight);
    $('#extrali>a').width(extraliHeight);
    var w = $(window).width() - 60;
    if(w>=400){
      w=400;
    }
    $('#extrali>ul>li>a').css('max-width', w);
  }
}

/**
 * Gestore del click sui documenti nel pulsante di accumulazione
 */
$(document).on('click', '#extrali>ul>li>a', function(){
  var tabId = $(this).attr('href');
  $(this).parent().insertAfter($('#myTab li:nth-child(2)')); 
  $('#extrali>ul>li>a[href="'+tabId+'"]').remove();
  openTab($(this).attr('href'));
});

/**
 * Gestore del click sulle linguette dei documenti
 */
$(document).on('click', '#myTab>li>a', onOpenTabClick);

/**
 * Gestore dei click sul pulsante della scelta della lingua
 */
$(document).on('click', '#language>ul>li', function(){
  $(document.body).attr('data-language',  $(this).find('span').attr('data-language'));
  
  newAlert("Il supporto per questa lingua è ancora in beta...", "warning");

  $('#language>button>span').appendTo($(this));
  $(this).find('span:eq(0)').appendTo($('#language>button'));
  $('*[data-translation]').each(function(){
    if($(this).attr('placeholder')){
      $(this).attr('placeholder', dictionary[$(document.body).attr('data-language')][$(this).attr('data-translation')]);
    }else{
      $(this).text(dictionary[$(document.body).attr('data-language')][$(this).attr('data-translation')]);
    }
  });
});

/**
 * Gestisce il settaggio dell'annotarea in base alla annotarea che si vuole aprire
 * @param newAoId: id della annotarea da aprire
 */
function openAnnotarea(newAoId){
  var currentAoId = $('.ao-active').attr('id');
  // Se voglio visualizzare i filtri
  if(newAoId == 'open-ao'){
    //cambia nome, visualizza filtri, disabilita back, cambia filter
    $('#annotarea-title>span').attr('data-translation', 'filters');
    $('#annotarea-title>span').text(dictionary[$(document.body).attr('data-language')]['filters']);

    $('#backli').css('opacity', '0');
    $('#backli').removeClass('active');
    //tl.clear();

    $('#filterli').addClass('active');
    $('#annotarea-filter').removeClass('glyphicon glyphicon-tags');
    $('#annotarea-filter').addClass('glyphicon glyphicon-tag');
  // Se voglio aprire filter-ao, ao-det o ao-fgmt
  } else if(newAoId.substring(0,3)=='tab'){
    //cambio nome, disabilito back, cambio filter, visualizzo
    $('#annotarea-title>span').attr('data-translation', 'docao');
    $('#annotarea-title>span').text(dictionary[$(document.body).attr('data-language')]['docao']);

    $('#backli').css('opacity', '0');
    $('#backli').removeClass('active');

    $('#filterli').removeClass('active');
    $('#annotarea-filter').removeClass('glyphicon glyphicon-tag');
    $('#annotarea-filter').addClass('glyphicon glyphicon-tags');
  } else if($('#'+newAoId).attr('data-parent')=='open-ao' || ($('#'+newAoId).attr('data-parent') && $('#'+newAoId).attr('data-parent').substring(0,3)=='tab')){
    $('#backli').css('opacity', '1'); 
    $('#backli').addClass('active');
    // Se voglio aprire ao-det o ao-fgmt 
    if($('#'+newAoId).attr('data-parent') && $('#'+newAoId).attr('data-parent').substring(0,3)=='tab'){
      $('#filterli').removeClass('active');
      $('#annotarea-filter').removeClass('glyphicon glyphicon-tag');
      $('#annotarea-filter').addClass('glyphicon glyphicon-tags');
      // Se voglio aprire ao-fgmt
      if(newAoId.substring(0,7)=='ao-fgmt'){
        $('#annotarea-title>span').attr('data-translation', 'fgmtao');
        $('#annotarea-title>span').text(dictionary[$(document.body).attr('data-language')]['fgmtao']);
      }
    }
  }  
  if ($(this).scrollTop() > offset) {
    $('#annotarea-body').css("max-height", ""+$(window).height()-160);
  }else{   
    $('#annotarea-body').css("max-height", ""+$(window).height()-160-$('#titolo').height()+$(this).scrollTop());
  }
  switchTab(currentAoId, newAoId);
}
/**
 * Gestore ricerca documenti
 */
$("#suchsuchwow>input").keyup(filterKeyUp2);
function filterKeyUp2(event){
  var text = $("#suchsuchwow>input").val();
  $('#documents-column1>a').each(function(){
    if(($(this).text().toLowerCase().indexOf(text.toLowerCase())!=(-1) || $(this).attr('filename').toLowerCase().indexOf(text.toLowerCase())!=(-1))) {
      $(this).show();
    }else{
      $(this).hide();
    }
  });
}

/**
 * Controlla se la pagina è della dimensione data.
 * @param alias: xs || sm || md || lg
 * @return boolean
 */
function isBreakpoint(alias){
  return $('.device-' + alias).is(':visible');
}

/* 
* controllo se il dispositivo è mobile
*/
function detectmob(){ 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
 else {
    return false;
  }
}

function loadlogo(){
  tlog.restart();
}
function stoploadlogo(){
  tlog.pause(tlog.endTime());
}

/*
 * Mostra un'alert
 * @param text: Testo da mostrare
 * @param type: success || info || warning || danger
 */
function newAlert(text, type){
  var node = $('<div class="alert alert-' + type + ' annotation-alert" role="alert">' + text + '</div>').appendTo("body");
  var t = new TimelineMax({onComplete: function(){
    node.remove();
  }});
  var currentNodes = $(".annotation-alert");
  currentNodes.each(function(){
    TweenMax.to(this, 0.4, {y:"-="+ 95});
  });
  t.fromTo(node, 0.4, {x:-100}, {x:"+="+130,display:"block"}, "+=0.4");
  t.to(node, 0.4, {x:"-="+(node.width()+100)}, "+=5");
}


