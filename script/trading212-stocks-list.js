$('#all-equities .d-row').each(function(e){
    function extract($element){
        return $element.text().trim();
    }
    let $row = $(this);
    let $ticker = $row.find(".d-cell:nth-child(1)");
    let $name = $row.find(".d-cell:nth-child(2)");
    let $currency = $row.find(".d-cell:nth-child(3)");
    let $isin = $row.find(".d-cell:nth-child(4)");
    let $minTradedQuantity = $row.find(".d-cell:nth-child(5)");
    let $marketName = $row.find(".d-cell:nth-child(6)");
    let $marketHours = $row.find(".d-cell:nth-child(7)");
    console.log(extract($ticker) + ',' + extract($name) + ',' + extract($currency) + ',' + extract($isin) + ',' + extract($minTradedQuantity) + ',' + extract($marketName) + ',' + extract($marketHours));
});