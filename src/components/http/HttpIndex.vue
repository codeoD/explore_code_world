<template>
  <div>
    <h2 id="#http" class="pb-4">HTTP</h2>
    <div>
      <div>
        <h3 id="headers" class="mt-4 mb-4">Headers</h3>
      </div>
      <div>
        <h3 id="res_status_codes" class="mt-4 mb-4">Response Status Codes</h3>
        <p>HTTP 响应状态代码指示特定 HTTP 请求是否已成功完成。
          响应分为五类：信息响应，成功响应，重定向，客户端错误和服务器错误。
          状态代码由
          <a href="https://tools.ietf.org/html/rfc2616#section-10">section 10 of RFC 2616</a>
          定义。这里主要介绍后面4种的部分状态码，完整请参考
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status">MDN Http响应代码</a>
        </p>
        <div class="mt-2 mb-2">
          <span class="text-orange-light">成功响应</span>
          <div>
            <span class="text-teal-light font-serif">200 OK</span>
            <p class="pl-8">
              请求成功。成功的含义取决于HTTP方法：
              GET：资源已被提取并在消息正文中传输。
              HEAD：实体标头位于消息正文中。
              POST：描述动作结果的资源在消息体中传输。
              TRACE：消息正文包含服务器收到的请求消息
            </p>
          </div>
        </div>
        <div class="mt-2 mb-2">
          <span class="text-orange-light">重定向</span>
          <div>
            <span class="text-teal-light font-serif">301 Moved Permanently</span>
            <p class="pl-8">被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。</p>
            <span class="text-teal-light font-serif">304 Not Modified</span>
            <p class="pl-8">
              如果客户端发送了一个带条件的 GET 请求且该请求已被允许，
              而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。
              304 响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。
            </p>
          </div>
        </div>
        <div class="mt-2 mb-2">
          <span class="text-orange-light">客户端错误</span>
          <div>
            <span class="text-teal-light font-serif">400 Bad Request</span>
            <p class="pl-8">
              语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。
              或者请求参数有误。
            </p>
            <span class="text-teal-light font-serif">401 Unauthorized</span>
            <p class="pl-8">
              当前请求需要用户验证。
              该响应必须包含一个适用于被请求资源的 WWW-Authenticate 信息头用以询问用户信息。
              客户端可以重复提交一个包含恰当的 Authorization 头信息的请求。
              如果当前请求已经包含了 Authorization 证书，那么401响应代表着服务器验证已经拒绝了那些证书。
              如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，
              那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。
            </p>
            <span class="text-teal-light font-serif">403 Forbidden</span>
            <p class="pl-8">
              服务器已经理解请求，但是拒绝执行它。
              如果这不是一个 HEAD 请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。
              当然服务器也可以返回一个 404 响应，假如它不希望让客户端获得任何信息。
            </p>
            <span class="text-teal-light font-serif">404 Not Found</span>
            <p class="pl-8">
              请求失败，请求所希望得到的资源未被在服务器上发现。
              404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。
            </p>
            <span class="text-teal-light font-serif">405 Method Not Allowed</span>
            <p class="pl-8">
              请求行中指定的请求方法不能被用于请求相应的资源。
              该响应必须返回一个Allow 头信息用以表示出当前资源能够接受的请求方法的列表。
            </p>
          </div>
        </div>
        <div class="mt-2 mb-2">
          <span class="text-orange-light">服务器错误</span>
          <div>
            <span class="text-teal-light font-serif">500 Internal Server Error</span>
            <p class="pl-8">服务器遇到了不知道如何处理的情况。</p>
            <span class="text-teal-light font-serif">501 Not Implemented</span>
            <p class="pl-8">此请求方法不被服务器支持且无法被处理。
              只有GET和HEAD是要求服务器支持的，它们必定不会返回此错误代码。
            </p>
            <span class="text-teal-light font-serif">502 Bad Gateway</span>
            <p class="pl-8">此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应</p>
            <span class="text-teal-light font-serif">503 Service Unavailable</span>
            <p class="pl-8">
              服务器没有准备好处理请求。常见原因是服务器因维护或重载而停机。
              请注意，与此响应一起，应发送解释问题的用户友好页面。
              这个响应应该用于临时条件和 Retry-After：如果可能的话，HTTP头应该包含恢复服务之前的估计时间。
              网站管理员还必须注意与此响应一起发送的与缓存相关的标头，因为这些临时条件响应通常不应被缓存。
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mt-4 mb-4">Other</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HttpIndex'
}
</script>
<style lang="scss" scoped>
h2 {
  border-bottom: 0.05rem solid #faad63;
}
.font-serif {
  font-family: serif;
}
</style>
