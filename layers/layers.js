var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KAWASANKUBUR_1 = new ol.format.GeoJSON();
var features_KAWASANKUBUR_1 = format_KAWASANKUBUR_1.readFeatures(json_KAWASANKUBUR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKUBUR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKUBUR_1.addFeatures(features_KAWASANKUBUR_1);
var lyr_KAWASANKUBUR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKUBUR_1, 
                style: style_KAWASANKUBUR_1,
                popuplayertitle: "KAWASAN KUBUR",
                interactive: true,
                title: '<img src="styles/legend/KAWASANKUBUR_1.png" /> KAWASAN KUBUR'
            });
var format_JALANRAYA_2 = new ol.format.GeoJSON();
var features_JALANRAYA_2 = format_JALANRAYA_2.readFeatures(json_JALANRAYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANRAYA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANRAYA_2.addFeatures(features_JALANRAYA_2);
var lyr_JALANRAYA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANRAYA_2, 
                style: style_JALANRAYA_2,
                popuplayertitle: "JALANRAYA",
                interactive: true,
                title: '<img src="styles/legend/JALANRAYA_2.png" /> JALANRAYA'
            });
var format_PAGARKONKRIT_3 = new ol.format.GeoJSON();
var features_PAGARKONKRIT_3 = format_PAGARKONKRIT_3.readFeatures(json_PAGARKONKRIT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAGARKONKRIT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAGARKONKRIT_3.addFeatures(features_PAGARKONKRIT_3);
var lyr_PAGARKONKRIT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAGARKONKRIT_3, 
                style: style_PAGARKONKRIT_3,
                popuplayertitle: "PAGAR KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/PAGARKONKRIT_3.png" /> PAGAR KONKRIT'
            });
var format_LONGKANGKONKRIT_4 = new ol.format.GeoJSON();
var features_LONGKANGKONKRIT_4 = format_LONGKANGKONKRIT_4.readFeatures(json_LONGKANGKONKRIT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LONGKANGKONKRIT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LONGKANGKONKRIT_4.addFeatures(features_LONGKANGKONKRIT_4);
var lyr_LONGKANGKONKRIT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LONGKANGKONKRIT_4, 
                style: style_LONGKANGKONKRIT_4,
                popuplayertitle: "LONGKANG KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/LONGKANGKONKRIT_4.png" /> LONGKANG KONKRIT'
            });
var format_PAPANTANDA_5 = new ol.format.GeoJSON();
var features_PAPANTANDA_5 = format_PAPANTANDA_5.readFeatures(json_PAPANTANDA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAPANTANDA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPANTANDA_5.addFeatures(features_PAPANTANDA_5);
var lyr_PAPANTANDA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAPANTANDA_5, 
                style: style_PAPANTANDA_5,
                popuplayertitle: "PAPAN TANDA",
                interactive: true,
                title: '<img src="styles/legend/PAPANTANDA_5.png" /> PAPAN TANDA'
            });
var format_LOTKUBURZONC_6 = new ol.format.GeoJSON();
var features_LOTKUBURZONC_6 = format_LOTKUBURZONC_6.readFeatures(json_LOTKUBURZONC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTKUBURZONC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBURZONC_6.addFeatures(features_LOTKUBURZONC_6);
var lyr_LOTKUBURZONC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBURZONC_6, 
                style: style_LOTKUBURZONC_6,
                popuplayertitle: "LOT KUBUR ZON C",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBURZONC_6.png" /> LOT KUBUR ZON C'
            });
var format_LOTKUBURZONB_7 = new ol.format.GeoJSON();
var features_LOTKUBURZONB_7 = format_LOTKUBURZONB_7.readFeatures(json_LOTKUBURZONB_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTKUBURZONB_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBURZONB_7.addFeatures(features_LOTKUBURZONB_7);
var lyr_LOTKUBURZONB_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBURZONB_7, 
                style: style_LOTKUBURZONB_7,
                popuplayertitle: "LOT KUBUR ZON B",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBURZONB_7.png" /> LOT KUBUR ZON B'
            });
var format_LOTKUBURZONA_8 = new ol.format.GeoJSON();
var features_LOTKUBURZONA_8 = format_LOTKUBURZONA_8.readFeatures(json_LOTKUBURZONA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTKUBURZONA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBURZONA_8.addFeatures(features_LOTKUBURZONA_8);
var lyr_LOTKUBURZONA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBURZONA_8, 
                style: style_LOTKUBURZONA_8,
                popuplayertitle: "LOT KUBUR ZON A",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBURZONA_8.png" /> LOT KUBUR ZON A'
            });
var format_BANGUNAN_9 = new ol.format.GeoJSON();
var features_BANGUNAN_9 = format_BANGUNAN_9.readFeatures(json_BANGUNAN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_9.addFeatures(features_BANGUNAN_9);
var lyr_BANGUNAN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_9, 
                style: style_BANGUNAN_9,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_9.png" /> BANGUNAN'
            });
var format_LOTZONKANAKKANAK_10 = new ol.format.GeoJSON();
var features_LOTZONKANAKKANAK_10 = format_LOTZONKANAKKANAK_10.readFeatures(json_LOTZONKANAKKANAK_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTZONKANAKKANAK_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTZONKANAKKANAK_10.addFeatures(features_LOTZONKANAKKANAK_10);
var lyr_LOTZONKANAKKANAK_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTZONKANAKKANAK_10, 
                style: style_LOTZONKANAKKANAK_10,
                popuplayertitle: "LOT ZON KANAK KANAK",
                interactive: true,
                title: '<img src="styles/legend/LOTZONKANAKKANAK_10.png" /> LOT ZON KANAK KANAK'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KAWASANKUBUR_1.setVisible(true);lyr_JALANRAYA_2.setVisible(true);lyr_PAGARKONKRIT_3.setVisible(true);lyr_LONGKANGKONKRIT_4.setVisible(true);lyr_PAPANTANDA_5.setVisible(true);lyr_LOTKUBURZONC_6.setVisible(true);lyr_LOTKUBURZONB_7.setVisible(true);lyr_LOTKUBURZONA_8.setVisible(true);lyr_BANGUNAN_9.setVisible(true);lyr_LOTZONKANAKKANAK_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KAWASANKUBUR_1,lyr_JALANRAYA_2,lyr_PAGARKONKRIT_3,lyr_LONGKANGKONKRIT_4,lyr_PAPANTANDA_5,lyr_LOTKUBURZONC_6,lyr_LOTKUBURZONB_7,lyr_LOTKUBURZONA_8,lyr_BANGUNAN_9,lyr_LOTZONKANAKKANAK_10];
lyr_KAWASANKUBUR_1.set('fieldAliases', {'qc_id': 'qc_id', 'kawasan': 'kawasan', });
lyr_JALANRAYA_2.set('fieldAliases', {'qc_id': 'qc_id', 'jalan': 'jalan', });
lyr_PAGARKONKRIT_3.set('fieldAliases', {'qc_id': 'qc_id', 'pagar': 'pagar', });
lyr_LONGKANGKONKRIT_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_PAPANTANDA_5.set('fieldAliases', {'qc_id': 'qc_id', 'jnis tanda': 'jnis tanda', });
lyr_LOTKUBURZONC_6.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_LOTKUBURZONB_7.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_LOTKUBURZONA_8.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_BANGUNAN_9.set('fieldAliases', {'qc_id': 'qc_id', 'jenis bang': 'jenis bang', });
lyr_LOTZONKANAKKANAK_10.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_KAWASANKUBUR_1.set('fieldImages', {'qc_id': '', 'kawasan': '', });
lyr_JALANRAYA_2.set('fieldImages', {'qc_id': '', 'jalan': '', });
lyr_PAGARKONKRIT_3.set('fieldImages', {'qc_id': '', 'pagar': '', });
lyr_LONGKANGKONKRIT_4.set('fieldImages', {'qc_id': '', 'id': '', });
lyr_PAPANTANDA_5.set('fieldImages', {'qc_id': '', 'jnis tanda': '', });
lyr_LOTKUBURZONC_6.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_LOTKUBURZONB_7.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_LOTKUBURZONA_8.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_BANGUNAN_9.set('fieldImages', {'qc_id': 'TextEdit', 'jenis bang': 'TextEdit', });
lyr_LOTZONKANAKKANAK_10.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_KAWASANKUBUR_1.set('fieldLabels', {'qc_id': 'no label', 'kawasan': 'no label', });
lyr_JALANRAYA_2.set('fieldLabels', {'qc_id': 'no label', 'jalan': 'no label', });
lyr_PAGARKONKRIT_3.set('fieldLabels', {'qc_id': 'no label', 'pagar': 'no label', });
lyr_LONGKANGKONKRIT_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_PAPANTANDA_5.set('fieldLabels', {'qc_id': 'no label', 'jnis tanda': 'no label', });
lyr_LOTKUBURZONC_6.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_LOTKUBURZONB_7.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_LOTKUBURZONA_8.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_BANGUNAN_9.set('fieldLabels', {'qc_id': 'no label', 'jenis bang': 'no label', });
lyr_LOTZONKANAKKANAK_10.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_LOTZONKANAKKANAK_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});