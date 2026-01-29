import "./styles/HairTypes.css"

const HairTypes = () =>{

    return(
        <section id="hair-types" className="hair-types-section">
            <h2 className="hair-types-section-title">V ponuke máme dva typy vlasov</h2>
            <div className="hair-types-grid">
                <div className="hair-type-card">
                    <h3 className="hair-type-card-title">Európske<br />Panenské vlasy:</h3>
                    <div className="hair-type-card-description">
                        <p>Ide o panenské vlasy, často aj detské, ktoré neboli nikdy farbené ani nijako chemicky či mechanicky upravované. Práve vďaka tomu patria medzi vlasy najvyššej kvality.</p>
                        <br/>
                        <p>Sú mimoriadne jemné, prirodzené a dokonale zachované. Sú ideálnou voľbou pre dámy s veľmi jemnými vlasmi, pretože krásne splynú s ich prirodzenou štruktúrou a pôsobia nenápadne a autenticky.</p>
                        <br/>
                        <p>Keďže neprešli farbením, vynikajú prirodzenou farebnou rozmanitostou, vrátane jemných farebných prechodov a prirodzene svetlejších koncov.</p>
                        <br/>
                        <p>Dostupné sú v rôznych prirodzených variantoch, od rovných cez vlnité až po kučeravé, zosvetlených slnkom.</p>
                    </div>
                </div>
                <div className="hair-type-card">
                    <h3 className="hair-type-card-title">Ruské vlasy:</h3>
                    <div className="hair-type-card-description">
                        <p>Ruské vlasy sú prirodzene husté, pevnejšie a majú rovný až jemne vlnitý charakter. Sú ideálne pre dámy, ktoré si vlasy často upravujú žehlením, fénovaním či natáčaním a zároveň pre dámy, ktoré potrebujú dodať svojim vlasom výraznejší objem.</p>
                        <br/>
                        <p>Vďaka svojej hustote a pevnejšej štruktúre vydržia veľmi dlho v krásnom stave.</p>
                        <br/>
                        <p>Ich pôvodná farba je tmavá, preto u našich dodávateľov prechádzajú veľmi zdĺhavým a šetrným procesom bielenia, po ktorom sú zafarbené do šiestich základných odtieňov.</p>
                        <br/>
                        <p>Po výbere farby zo vzorkovníka je možné ich podľa potreby ďalej tónovať alebo dofarbiť, aby dokonale ladili s prirodzeným odtieňom klientky.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HairTypes;