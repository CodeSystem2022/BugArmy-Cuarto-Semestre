var isButtonCd = false;
async function dropSignIn() {
    if (isButtonCd) {
        return;
    } else {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.classList.contains("show")) {
            dropdown.classList.add('fadeAway');
            await delay(900)
            dropdown.classList.remove('show');
            dropdown.classList.remove('fadeAway');
        } else {
            dropdown.classList.add('show');
        }
        isButtonCd = true;
        await delay(1000);
        isButtonCd = false;
    }
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

main.onclick = async function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.add('fadeAway');
                await delay(900);
                openDropdown.classList.remove('show');
                openDropdown.classList.remove('fadeAway');
            }
        }
    }
}

document.getElementById("myDropdown").onclick = function (event) {
    event.stopPropagation();
}