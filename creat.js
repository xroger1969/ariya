const versions = {
    engage: {
        name: "Engage",
        features: {
            "Exterior": `
                Faróis full LED, Luz diurna "Follow me Home", Luzes traseiras LED, 
                Retrovisores aquecidos e rebatíveis, Antena de tubarão, Molduras cromado acetinado`,
            "Personalização Interior": `
                Estofo misto Black KAITEKI em pele sintética e Alcântara`,
            "Jantes": `Jantes de liga leve KOTAE de 48 cm (19")`,
            "Conforto": `
                Climatizador automático dual, Retrovisor antiencadeamento, 
                Bancos ajustáveis manualmente (6 posições), Tomadas USB Tipo A e C`,
            "Tecnologia": `
                TFT de 12,3", Apple CarPlay®, Android Auto®, e-Pedal Step, 
                Câmara traseira`,
            "Segurança": `
                6 airbags, Anti-colisão frontal, ABS + EBD, Assistência à travagem`,
            "Carregamento": `
                Cabo EVSE (10A), Cabo Modo 3 (32A), Bateria refrigerada a água`,
        },
    },
    advance: {
        name: "Advance",
        features: {
            "Exterior": `
                Faróis LED com nevoeiro, Porta bagageira mãos-livres, 
                Para-brisas aquecido, Vidros escurecidos`,
            "Personalização Interior": `
                Estofo misto Black SHORAI ou Grey SHORAI`,
            "Conforto": `
                Bancos ajustáveis eletricamente e aquecidos, Volante aquecido`,
            "Tecnologia": `
                Carregador sem fios, Câmara 360º, ProPILOT Assist`,
        },
    },
    evolve: {
        name: "Evolve",
        features: {
            "Exterior": `
                Teto panorâmico de abrir, Luzes intermitentes sequenciais, 
                Retrovisores com memória`,
            "Personalização Interior": `
                Estofo misto Black TAMASHII ou Grey TAMASHII`,
            "Conforto": `
                Bancos ventilados e traseiros aquecidos, Consola elétrica`,
            "Tecnologia": `
                Head-Up Display 10", ProPILOT Park, Som Bose 10 colunas`,
        },
    },
    evolvePlus: {
        name: "Evolve+",
        features: {
            "Exterior": `
                Jantes DEZAIN 51 cm (20")`,
            "Personalização Interior": `
                Estofo em pele Nappa Blue`,
            "Tecnologia": `
                Carregador 22 kW`,
        },
    },
};

function updateComparison() {
    const version1 = document.getElementById("version1").value;
    const version2 = document.getElementById("version2").value;

    const tableBody = document.getElementById("comparisonTable");
    tableBody.innerHTML = "";

    if (version1 || version2) {
        document.getElementById("version1Title").textContent =
            versions[version1]?.name || "N/A";
        document.getElementById("version2Title").textContent =
            versions[version2]?.name || "N/A";

        const features = new Set([
            ...Object.keys(versions[version1]?.features || {}),
            ...Object.keys(versions[version2]?.features || {}),
        ]);

        features.forEach((feature) => {
            const row = document.createElement("tr");

            const featureCell = document.createElement("td");
            featureCell.textContent = feature;
            row.appendChild(featureCell);

            const version1Cell = document.createElement("td");
            version1Cell.textContent =
                versions[version1]?.features[feature] || "N/A";
            row.appendChild(version1Cell);

            const version2Cell = document.createElement("td");
            version2Cell.textContent =
                versions[version2]?.features[feature] || "N/A";
            row.appendChild(version2Cell);

            tableBody.appendChild(row);
        });
    }
}
