use sycamore::prelude::*;

#[component]
fn App<G: Html>(cx: Scope) -> View<G> {
    let state = create_signal(cx, 0);

    view! { cx,
        button(on:click=|_| { state.set(*state.get() + 1) }) { "Click" }
        p {
            (state.get())
        }
    }
}

fn main() {
    sycamore::render(|cx| {
        view! { cx, App {} }
    });
}