# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(name = "examples")

# This rule is built-into Bazel but we need to load it first to download more rules
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "895c2b0d1480834808216fb36cd4bf21517954cb966c893ee42421dfefcfd4bc",
    strip_prefix = "rules_nodejs-1f6d878a9ea3a095291f66e3d1a0f6b4641f5159",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/1f6d878a9ea3a095291f66e3d1a0f6b4641f5159.zip",
)

http_archive(
    name = "build_bazel_rules_typescript",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.20.3.zip",
    strip_prefix = "rules_typescript-0.20.3",
    #name = "build_bazel_rules_typescript",
    #sha256 = "5a31a67550d2a92270599e90a221afe229f6e1863bf2eff22e9750c6ecf45978",
    #strip_prefix = "rules_typescript-2963b55370b21d545d0ac0f30fca9dc74a0f5538",
    #url = "https://github.com/bazelbuild/rules_typescript/archive/2963b55370b21d545d0ac0f30fca9dc74a0f5538.zip",
)

http_archive(
    name = "io_bazel_rules_go",
    urls = ["https://github.com/bazelbuild/rules_go/releases/download/0.16.5/rules_go-0.16.5.tar.gz"],
    sha256 = "7be7dc01f1e0afdba6c8eb2b43d2fa01c743be1b9273ab1eaf6c233df078d705"
)

# The @angular repo contains rule for building Angular applications
http_archive(
    name = "angular",
    strip_prefix = "angular-7.0.4",
    url = "https://github.com/angular/angular/archive/7.0.4.zip",
)

# The @rxjs repo contains targets for building rxjs with bazel
http_archive(
    name = "rxjs",
    sha256 = "72b0b4e517f43358f554c125e40e39f67688cd2738a8998b4a266981ed32f403",
    strip_prefix = "package/src",
    url = "https://registry.yarnpkg.com/rxjs/-/rxjs-6.3.3.tgz",
)

# Rules for compiling sass
http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "76ae498b9a96fa029f026f8358ed44b93c934dde4691a798cb3a4137c307b7dc",
    strip_prefix = "rules_sass-1.15.1",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.15.1.zip",
)

####################################
# Load and install our dependencies downloaded above.

load("@angular//packages/bazel:package.bzl", "rules_angular_dependencies")

rules_angular_dependencies()

load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")

rules_typescript_dependencies()

load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dependencies")

rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories", "yarn_install")

# The minimum bazel version to use with this example repo
# Bazel 0.19 supports the .bazelignore file
check_bazel_version(minimum_bazel_version = "0.19.0")

node_repositories(
    node_version = "10.9.0",
    yarn_version = "1.12.1",
)

yarn_install(
    name = "npm",
    #data = ["//:postinstall.tsconfig.json"],
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@io_bazel_rules_go//go:def.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()

browser_repositories(
    chromium = True,
    firefox = True,
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")

sass_repositories()

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()
