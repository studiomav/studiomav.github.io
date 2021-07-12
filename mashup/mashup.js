console.log('ready!');

var files = [
  {title: 'jellyfish jam', path: 'files/jellyfish_jam.ogg', len: 15355},
  {title: 'megalovania', path: 'files/megalovania.ogg', len: 16003},
  {title: 'creep', path: 'files/creep.ogg', len: 20926},
  {title: 'feel good inc', path: 'files/feel_good.ogg', len: 13893},
  {title: 'photograph', path: 'files/photograph.ogg', len: 17753},
  {title: 'boys', path: 'files/boys.ogg', len: 13716},
  //{title: '', path: 'files/.ogg', len:},
]

var paths = [];
var lengths = [];
for (let i = 0; i < files.length; i++)
{
  paths.push(files[i].path);
  lengths.push(files[i].len);
}

var dropdown1 = document.getElementById("track0select");
var dropdown2 = document.getElementById("track1select");
var dropdown3 = document.getElementById("track2select");
var dropdown4 = document.getElementById("track3select");

for (let i = 0; i < files.length; i++)
{
  var option1 = document.createElement("option");
  var option2 = document.createElement("option");
  var option3 = document.createElement("option");
  var option4 = document.createElement("option");
  option1.value = option2.value = option3.value = option4.value = i+1;
  option1.text = option2.text = option3.text = option4.text = files[i].title;
  dropdown1.add(option1);
  dropdown2.add(option2);
  dropdown3.add(option3);
  dropdown4.add(option4);
}

var currentSpeed = 75;

var track0 = new Howl(
{
  src: paths[0],
  html5: true,
  loop: true,
  autoplay: false
});

var track1 = new Howl(
{
  src: paths[0],
  html5: true,
  loop: true,
  autoplay: false
});

var track2 = new Howl(
{
  src: paths[0],
  html5: true,
  loop: true,
  autoplay: false
});

var track3 = new Howl(
{
  src: paths[0],
  html5: true,
  loop: true,
  autoplay: false
});

var tracks = [track0, track1, track2, track3];

function playTrack(t, v)
{
  if (t < 3)
  {
    document.getElementById(`group${t+1}`).style.visibility = "visible";
  }

  if (v == -1) return tracks[t].volume(0);

  console.log('track ' + t + ', index ' + v);
  console.log(files[v].title);

  tracks[t].stop();
  tracks[t] = new Howl(
  {
    src: paths[v],
    html5: true,
    loop: true,
    autoplay: false
  });
  tracks[t].once('load', function()
  {
    var d = tracks[t].duration();
    console.log('duration: ' + d);
    adjustRate(t);
    adjustSeek(t);
    tracks[t].play();
  });
}

function adjustSeek(t)
{
  if (t == 0)
  {
    tracks[t].seek((tracks[1].seek() / tracks[1].duration()) * tracks[t].duration());

  }
  else
  {
    tracks[t].seek((tracks[0].seek() / tracks[0].duration()) * tracks[t].duration());
  }
}

function adjustRate(t)
{
  tracks[t].rate(tracks[t].duration() / 10);
  tracks[t].rate(tracks[t].rate() * (currentSpeed / 100));
}

function updateSpeed(s)
{
  var sliderDiv = document.getElementById("speedValue");
  sliderDiv.innerHTML = s;
  currentSpeed = s;

  for (let i = 0; i < tracks.length; i++)
  {
    adjustRate(i);
    adjustSeek(i);
  }
}