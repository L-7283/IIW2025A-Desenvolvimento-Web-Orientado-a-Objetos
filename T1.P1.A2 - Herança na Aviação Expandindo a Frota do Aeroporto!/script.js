class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = 0;
        this.status = "No Solo";
    }

    // O método que desenha as mudanças na tela
    atualizarTela() {
        document.getElementById("cod").innerText = this.codigo;
        document.getElementById("alt").innerText = this.altitude;
        
        const elStatus = document.getElementById("stat");
        const elAviao = document.getElementById("aviao");

        elStatus.innerText = this.status;

        // Lógica de Movimento
        if (this.status === "Voando") {
            elStatus.style.color = "green";
            elAviao.style.bottom = "50px"; // Sobe
            elAviao.style.left = "40%";    // Vai para o meio
            elAviao.style.transform = "rotate(-5deg)"; // Inclina para cima
        } 
        else if (this.status === "Pousado") {
            elStatus.style.color = "red";
            elAviao.style.bottom = "-15px";  // Desce para a pista
            elAviao.style.left = "80%";    // AVANÇA para o final da pista (não volta)
            elAviao.style.transform = "rotate(30deg)";
        }
    }

    decolar() {
        this.status = "Voando";
        this.altitude = 10000;
        this.atualizarTela();
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        this.atualizarTela();
    }

    ganharAltitude() {
        if (this.status === "Voando") {
            this.altitude += 5000;
            this.atualizarTela();
        }
    }
}

// Criar o voo
const meuVoo = new Voo("GOL-123", "SP", "RJ");
meuVoo.atualizarTela(); // Mostrar dados iniciais