function HedefeKalanZamaniBul(saat, dakika) {
    const hedefTarih = new Date();
    hedefTarih.setUTCHours(saat);
    hedefTarih.setUTCMinutes(dakika);
    hedefTarih.setUTCSeconds(0);
    hedefTarih.setUTCMilliseconds(0);
  
    let hedefekalanzaman = hedefTarih.getTime() - Date.now();
    if (hedefekalanzaman < 0) {
      hedefTarih.setUTCDate(hedefTarih.getUTCDate() + 1);
      hedefekalanzaman = hedefTarih.getTime() - Date.now();
    }
  
    return hedefekalanzaman;
  }
module.exports = { HedefeKalanZamaniBul };