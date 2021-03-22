
    (function({C,directs,wx}, remotes) {
      const $3 = props => {
  fre.useEffect(() => {
    const params = window.getUrl(window.location.href);
    onLoad && onLoad(params);
    return onUnload && onUnload(params);
  }, []);
  const {
    data: {
      leftcount,
      name,
      item,
      list
    },
    onLoad,
    onUnload,
    addtodo,
    clickIco,
    clear
  } = usePage(fre.useState({})[1], props);
  return fre.h(fre.Fragment, null, fre.h(remotes.View, {
    class: "container",
    style: 'padding-top:' + leftcount,
    "data-w-866668": true
  }, fre.h(remotes.View, {
    class: "title",
    "data-w-866668": true
  }, fre.h(remotes.Text, null, "todos")), fre.h(remotes.View, {
    class: "list",
    "data-w-866668": true
  }, fre.h(remotes.View, {
    class: "list-items",
    "data-w-866668": true
  }, fre.h(remotes.Input, {
    onKeyDown: e => addtodo(e),
    placeholder: "What needs to be done?",
    value: name,
    id: "test"
  })), fre.h(fre.Fragment, null, directs.$for(list, item => fre.h(remotes.Block, null, fre.h(remotes.UseItem, {
    item: item,
    myevent: e => clickIco(e),
    clear: e => clear(e)
  })), null)), directs.$ensure("$3$template$footer"))));
};

remotes['$3$template$footer'] = props => {
  const {
    data: {
      leftcount,
      list
    },
    onLoad,
    onUnload,
    clearCompleted
  } = usePage(null, props);
  return fre.h(fre.Fragment, null, directs.$ensure(null), fre.h(remotes.View, {
    class: "footer",
    "data-w-866668": true
  }, fre.h(remotes.Text, null, leftcount, " items left"), directs.$if(() => list.length - leftcount > 0, () => fre.h(remotes.View, {
    class: "clear",
    onClick: e => clearCompleted(e),
    "data-w-866668": true
  }, "clear completed"), null)));
};


    window['berial-bhnzee'] = {
      async bootstrap({host}){
        const div = document.createElement('div');
        div.id = "root";
        host.appendChild(div)
      },
      async mount({host}){
        window.remotes.host = host;
        fre.render(fre.h('div',{},fre.h($3)),host.getElementById("root"));
      },
      async unmount({host}){
        host.getElementById("root").innerHTML = ""
      }
    }
    
    })(window,window.remotes);
    