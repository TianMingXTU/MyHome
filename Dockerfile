# 使用 Node.js 官方镜像
FROM node:16-alpine

# 安装 http-server
RUN npm install -g http-server

# 设置工作目录为 QHJ
WORKDIR /usr/src/app

# 将当前目录下的 QHJ 目录复制到容器中的工作目录
COPY QHJ /usr/src/app

# 暴露容器的 8080 端口
EXPOSE 8080

# 启动 http-server，监听 8080 端口
CMD ["http-server", ".", "-p", "8080"]
