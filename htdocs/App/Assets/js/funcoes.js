function MudarConfirme() {
    const button = document.getElementById('confirme');
    button.classList.toggle('Aberto');
    button.classList.toggle('Confirmado');
    if (button.classList.contains('Aberto')) {
        document.getElementById('checkbox-confirme').checked = false
    } else {
        document.getElementById('checkbox-confirme').checked = true;
    }
}

function ConverterData(vrData) {
    const ano = vrData.getFullYear();
    const mes = String(vrData.getMonth() + 1).padStart(2, '0'); // Mês começa de 0, por isso o +1
    const dia = String(vrData.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}


(function () {
    const dataVencimento = document.getElementById('data_vencimento');
    let btnFixo = document.getElementById('fixa');
    let btnParcelado = document.getElementById('parcelado');
    let btnTipoParcela = document.getElementById('btnRepetir');
    let btnObs = document.getElementById('btnObs');
    let btnAnexobtnAnexo = document.getElementById('btnAnexo');



    if (dataVencimento) {
        const dataAtual = new Date();
        dataVencimento.value = ConverterData(dataAtual);
    } else {
        console.error('Elemento data_vencimento não encontrado.');
    }

    // *********** FAZ O PROCESSO DE APRESENTAR A PARCELA

    btnTipoParcela.addEventListener('click', function () {
        document.getElementById('apresentarRepetir').classList.toggle('d-none');
    })

    btnFixo.addEventListener('click', function () {
        btnParcelado.checked = false;
    });

    btnParcelado.addEventListener('click', function () {
        btnFixo.checked = false;
    });

    // *********** FIM DO PROCESSO DE APRESENTAR A PARCELA

    // *********** FAZ O PROCESSO DE APRESENTAR OBSERVAÇAO

    btnObs.addEventListener('click', function () {
        document.getElementById('apresentarObs').classList.toggle('d-none');
    })

    // *********** DIM DO PROCESSO DE APRESENTAR OBSERVAÇAO

    // *********** FAZ O PROCESSO DE APRESENTAR ANEXO

    btnAnexo.addEventListener('click', function () {
        document.getElementById('apresentarAnexo').classList.toggle('d-none');
    })

    // *********** FIM DO PROCESSO DE APRESENTAR ANEXO



})();

