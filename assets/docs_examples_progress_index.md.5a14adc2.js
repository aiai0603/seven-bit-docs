import{_ as s,c as e,o as a,e as n}from"./app.85edad19.js";const D=JSON.parse('{"title":"进度条 Progress","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"进度条状态","slug":"进度条状态","link":"#进度条状态","children":[]},{"level":2,"title":"环形进度条","slug":"环形进度条","link":"#环形进度条","children":[]},{"level":2,"title":"进度条大小","slug":"进度条大小","link":"#进度条大小","children":[]},{"level":2,"title":"渐变进度条","slug":"渐变进度条","link":"#渐变进度条","children":[]},{"level":2,"title":"自定义进度条的颜色","slug":"自定义进度条的颜色","link":"#自定义进度条的颜色","children":[]}],"relativePath":"docs/examples/progress/index.md"}'),o={name:"docs/examples/progress/index.md"},r=n(`<h1 id="进度条-progress" tabindex="-1">进度条 Progress <a class="header-anchor" href="#进度条-progress" aria-hidden="true">#</a></h1><p>给予用户当前系统执行中任务运行状态的反馈，多用于运行一段时间的场景，有效减轻用户在等待中产生的焦虑感。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-hidden="true">#</a></h2><p>简单的进度条。</p><p>:::code progress/progress1.vue :::</p><h2 id="进度条状态" tabindex="-1">进度条状态 <a class="header-anchor" href="#进度条状态" aria-hidden="true">#</a></h2><p>通过 <code>status</code> 指定进度条状态</p><p>:::code progress/progress2.vue :::</p><h2 id="环形进度条" tabindex="-1">环形进度条 <a class="header-anchor" href="#环形进度条" aria-hidden="true">#</a></h2><p>设置 <code>type=&quot;circle&quot;</code> 将会展示环形进度条。</p><p>:::code progress/progress3.vue :::</p><h2 id="进度条大小" tabindex="-1">进度条大小 <a class="header-anchor" href="#进度条大小" aria-hidden="true">#</a></h2><p>通过 size 设置进度条的大小。</p><p>:::code progress/progress4.vue :::</p><h2 id="渐变进度条" tabindex="-1">渐变进度条 <a class="header-anchor" href="#渐变进度条" aria-hidden="true">#</a></h2><p><code>color</code> 传入数组时， 会作为 <code>linear-gradient</code> 的属性值设置渐变色，数组格式如下所示：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LinearGradient</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">offset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Percent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RGB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HEX</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LinearGradient</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">......</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>:::code progress/progress5.vue :::</p><h2 id="自定义进度条的颜色" tabindex="-1">自定义进度条的颜色 <a class="header-anchor" href="#自定义进度条的颜色" aria-hidden="true">#</a></h2><p>可以 通过 <code>color</code> 设置进度条的颜色，通过 <code>trackColor</code> 设置剩余进度条的颜色。</p><p>:::code progress/progress6.vue :::</p>`,21),l=[r];function p(c,t,d,i,h,C){return a(),e("div",null,l)}const F=s(o,[["render",p]]);export{D as __pageData,F as default};
