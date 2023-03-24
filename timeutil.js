function HedefeKalanZamaniBul(saat,dakika) {
    const hedefTarih = new Date();
    hedefTarih.setHours(saat);
    hedefTarih.setMinutes(dakika);
    hedefTarih.setSeconds(0);
    hedefTarih.setMilliseconds(0);


    let hedefekalanzaman = hedefTarih.getTime() - Date.now();
    if(hedefekalanzaman<0) {
        hedefekalanzaman = (24*60*60*1000) - (-hedefekalanzaman);
    }

    return hedefekalanzaman;
}

module.exports = { HedefeKalanZamaniBul };