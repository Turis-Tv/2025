function loadChannels() {
  const country = document.getElementById('country-select').value;
  const channelList = document.getElementById('channel-list');
  channelList.innerHTML = '<li>Loading channels...</li>';

  const url = `https://raw.githubusercontent.com/mohammedxp2024/tv-channels/refs/heads/main/channels.json`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      channelList.innerHTML = '';

      if (!data[country]) {
        channelList.innerHTML = '<li>No channels found for this category</li>';
        return;
      }

      data[country].forEach(channel => {
        const li = document.createElement('li');

        const logo = document.createElement('img');
        logo.src = channel.logo || 'default-logo.png';
        logo.alt = `${channel.name} logo`;
        logo.className = 'channel-logo';

        const name = document.createElement('span');
        name.textContent = channel.name;

        li.appendChild(logo);
        li.appendChild(name);

        li.onclick = () => changeChannel(channel.name, channel.url);
        channelList.appendChild(li);
      });

      // ✅ بعد تحميل القنوات، انتقل إلى وضع التحكم بالقنوات
      if (mode === 'channels') {
        selectedChannelIndex = 0;
        highlightChannel(selectedChannelIndex);
      }
    })
    .catch(error => {
      console.error("Error loading channels:", error);
      channelList.innerHTML = '<li>Error loading channels</li>';
    });
}





















// التحقق من التحديثات
const versionFileUrl = "https://raw.githubusercontent.com/mohammedxp2024/tv-channels/main/version.json";
const currentVersion = "1.0.0";

async function checkForUpdate(manualCheck = false) {
    try {
        const response = await fetch(versionFileUrl);
        const data = await response.json();
        const latestVersion = data.version;

        if (latestVersion !== currentVersion) {
            if (confirm(`🔔 يتوفر تحديث جديد (${latestVersion})! هل تريد تحميله الآن؟`)) {
                window.location.href = "https://github.com/mohammedxp2024/tv-channels/releases/latest/download/app-debug.apk";
            }
        } else if (manualCheck) {
            alert("✅ لديك أحدث إصدار من التطبيق!");
        }
    } catch (error) {
        alert("❌ حدث خطأ أثناء التحقق من التحديث، حاول مرة أخرى لاحقًا.");
        console.error("خطأ:", error);
    }
}

document.getElementById("update-btn").addEventListener("click", function (e) {
    e.preventDefault();
    checkForUpdate(true);
});












let mode = 'categories'; // يبدأ بالتحكم بالباقات
let selectedCategoryIndex = 0;
let selectedChannelIndex = 0;

function focusCategory(index) {
  const select = document.getElementById('country-select');
  select.selectedIndex = index;
  loadChannels();
}

function highlightChannel(index) {
  const items = document.querySelectorAll('#channel-list li');
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === index);
  });

  // التحكم في عرض القناة داخل المجال المرئي بدون انزعاج
  const selectedItem = items[index];
  if (selectedItem) {
    const container = document.getElementById('channel-list');
    const offsetTop = selectedItem.offsetTop;
    const containerHeight = container.clientHeight;
    const itemHeight = selectedItem.offsetHeight;

    const scrollPosition = offsetTop - (containerHeight / 2) + (itemHeight / 2);
    container.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }
}


document.addEventListener('keydown', (e) => {
  const categories = document.getElementById('country-select');
  const channels = document.querySelectorAll('#channel-list li');

  if (mode === 'categories') {
    if (e.key === 'ArrowDown') {
      selectedCategoryIndex = (selectedCategoryIndex + 1) % categories.options.length;
      categories.selectedIndex = selectedCategoryIndex;
    } else if (e.key === 'ArrowUp') {
      selectedCategoryIndex = (selectedCategoryIndex - 1 + categories.options.length) % categories.options.length;
      categories.selectedIndex = selectedCategoryIndex;
    } else if (e.key === 'Enter') {
      mode = 'channels';
      loadChannels();
      selectedChannelIndex = 0;
      setTimeout(() => highlightChannel(selectedChannelIndex), 100); // تأخير بسيط لتحديث القنوات
    }
  } else if (mode === 'channels') {
    if (e.key === 'ArrowDown') {
      selectedChannelIndex = (selectedChannelIndex + 1) % channels.length;
      highlightChannel(selectedChannelIndex);
    } else if (e.key === 'ArrowUp') {
      selectedChannelIndex = (selectedChannelIndex - 1 + channels.length) % channels.length;
      highlightChannel(selectedChannelIndex);
    } else if (e.key === 'Enter') {
      channels[selectedChannelIndex].click();
    } else if (e.key === 'Backspace') {
      mode = 'categories';
      document.getElementById('search-input').blur();
    }
  }
});